module.exports = {
  extends: 'standard',
  plugins: [
    'standard',
    'promise',
    'json'
  ],
  globals: {
    App: true,
    Page: true,
    Component: true,
    getApp: true,
    wx: true
  }
};
