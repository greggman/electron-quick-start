// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const {dialog} = require('electron').remote;

const button = document.querySelector('button');
button.addEventListener('click', openDialog);

// this works!
const input = document.querySelector('input');
input.addEventListener('change', handleFileSelect);

function handleFileSelect(evt) {
  const files = evt.target.files; // FileList object
  for (let i = 0; i < files.length; ++i) {
      const f = files[i]
      log(i, f.name);
  }
}

// this does NOT work
function openDialog() {
  log('dialog.showOpenDialog:', dialog.showOpenDialog({
    properties: ['openFile', 'openDirectory', 'multiSelections'],
  }));
}

openDialog();  // do it once to start

function log(...args) {
  const elem = document.createElement('div');
  elem.textContent = [...args].join(' ');
  document.body.appendChild(elem);
}

