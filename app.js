
App({
  selectedOption: {},
  loggedUser:{},
  infoPageData:{},
  errorType:"",
  isProd:true,
  connectionURL:"",
  onLaunch(options) {
    const app = getApp();
    // Page opens for the first time
    console.info('App onLaunch');
    const sysInfo = my.getSystemInfoSync();
    app.connectionURL = app.isProd?"http://ec2-18-231-179-150.sa-east-1.compute.amazonaws.com:3005":"http://192.168.1.103:3005";
    console.log(sysInfo);
  },
  onOptionMenuClick() {
    // Trigger on clicking upper-right corner menu button
    console.log("sdgsdgs");
  },
  events: {
    onBack() {
      console.log("sdgsdgsdgs");
      // Trigger on page returning
    },
    onKeyboardHeight(e) {
      // Trigger on keyboard height changing
      console.log('keyboard height:', e.height)
    },
    onOptionMenuClick() {
      // Trigger on clicking upper-right corner menu button
      console.log("sdgsdgs");
    },
    onPopMenuClick(e) {
      // Trigger on clicking custom menu buttons in upper-right general menu
      console.log('index of the clicked custom menu', e.index)
      console.log('name of the clicked custom menu', e.name)
      console.log('menuIconUrl of the clicked custom menu', e.menuIconUrl)
    }
  },
  onShow(options) {
    // Reopened by scheme from the background
  }
});
