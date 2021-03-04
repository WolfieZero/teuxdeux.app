const nativefier = require('nativefier').default;
const packageJson = require('./package.json');

// possible options, defaults unless specified otherwise
const options = {
  name: 'TeuxDeux', // will be inferred if not specified
  targetUrl: 'https://teuxdeux.com/home', // required
  // platform: 'darwin', // defaults to the current system
  // arch: 'x64', // defaults to the current system
  version: packageJson.version,
  out: './release/',
  overwrite: true,
  asar: false, // see conceal
  icon: './assets/icon.png',
  counter: false,
  bounce: false,
  width: 1280,
  height: 800,
  showMenuBar: false,
  fastQuit: false,
  browserwindowOptions: {
    fullscreenable: true,
    simpleFullscreen: false,
  },
  userAgent: 'Chome',
  ignoreCertificate: false,
  ignoreGpuBlacklist: false,
  enableEs3Apis: false,
  // internalUrls: '".*?teuxdeux\.*?"', // defaults to URLs on same second-level domain as app
  blockExternalUrls: true,
  insecure: false,
  honest: false,
  zoom: 1,
  singleInstance: true,
  clearCache: false,
  fileDownloadOptions: {
    saveAs: true, // always show "Save As" dialog
  },
};

nativefier(options, (error, appPath) => {
  if (error) {
    console.error(error);
    return;
  }
  console.info('App has been nativefied to', appPath);
});
