// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const elem = document.querySelector('pre');
window.addEventListener('keydown', handleKey);
window.addEventListener('keyup', handleKey);
window.addEventListener('keypress', handleKey);

function handleKey(e) {
  e.preventDefault();
  e.stopPropagation();
  elem.textContent = `${e.type}: ${e.keyCode}`;
}

console.log(`
Here's some text to copy in the console.
Notice Cmd-F works even though we are trapping all keystrokes
and there is no Cmd-F menu item. Cmd-C, Cmd-V, and Cmd-X should
also continue to work even if there are no corresponding menu items.
`);
