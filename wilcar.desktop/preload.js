const { shell } = require('electron');

window.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a[href^="http"]');
  links.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      shell.openExternal(event.target.href);
    });
  });
});