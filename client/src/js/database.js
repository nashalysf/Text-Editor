import { openDB } from "idb";
import "regenerator-runtime/runtime";

 const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log("GET from the database");

  //Create a connection to the IndexedDB database and the version to use.
  const jate = await openDB("jate", 1.0);

  // Create a new transaction and specify the store and data privileges.
  const tx = jate.transaction("jate", "readonly");

  // Open up the desired object store.
  const store = tx.objectStore("jate");

  // Use the .getAll() method to get all data in the database.
  const request = store.get(1);

  // Get confirmation of the request.
  const result = await request;
  console.log("result.value", result);
  return result;
};

export const putDb = async (content) => {
  console.log("PUT to the db");

  //create connection to db and specify version
  const jate = await openDB("jate", 1);

  //create new transaction and specify store and data privileges
  const tx = jate.transaction("jate", "readwrite");

  //open desired object store
  const store = tx.objectStore("jate");

  // use .add() to store an dpass content
  const request = store.put({id: 1, value: content});

  //get confirm of req
  const result = await request;
  return result;
};
initdb();