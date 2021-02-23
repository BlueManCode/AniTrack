const electron = require('electron')
const {app, BrowserWindow, globalShortcut} = electron

let main_window;
let window_options = {
  resizable: false,
  frame: false,
  
};

// listern for the app to be ready
app.on('ready', () => {
  main_window = new BrowserWindow(window_options)
  main_window.maximize()
  main_window.loadURL('https://anitrack.vercel.app/#/')
  
  globalShortcut.register('Shift+Enter', () => {
    main_window.isVisible() ? main_window.hide() : main_window.show()
  })
})