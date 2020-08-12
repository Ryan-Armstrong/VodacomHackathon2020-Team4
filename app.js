App({
  selectedOption:{},
  onLaunch(options) {
    // Page opens for the first time
    console.info('App onLaunch');
    const sysInfo = my.getSystemInfoSync();
    console.log(sysInfo);
  },
  onShow(options) {
    // Reopened by scheme from the background
  },
});
