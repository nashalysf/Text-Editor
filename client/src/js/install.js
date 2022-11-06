// Install btn
const buttonInstall = document.getElementById('buttonInstall');
   
window.addEventListener('beforeinstallprompt', (event) => {
 event.preventDefault();
 buttonInstall.style.visibility = 'visible';

 buttonInstall.addEventListener('click', () => {
   event.prompt();
   buttonInstall.setAttribute('disabled', true);
   buttonInstall.textContent = 'Installed!';
   });
 });

 window.addEventListener('appinstalled', (event) => {
   console.log('👍', 'appinstalled', event);
 });
