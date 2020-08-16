const app = getApp();
Page({
  data: {
    outstandingBalance: 0,
    totalFees: 0,
    advances: 0,
    amountAdvance: 0,

  },
  onLoad(query) {
    this.setData({
      outstandingBalance: app.loggedUser.advances+app.loggedUser.totalFees,
      totalFees: app.loggedUser.totalFees,
      advances: app.loggedUser.advances,
      amountAdvance: app.loggedUser.amountAdvance,
    })
  },

  onReady() {
    // Page loading is complete
  },
  onShow() {
    // Page display
  },
  onHide() {
    // Page hidden
  },
  onUnload() {
    // Page is closed
  },
  onTitleClick() {
    // Title clicked
  },
  onPullDownRefresh() {
    // Page is pulled down
  },
  onReachBottom() {
    // Page is pulled to the bottom
  },
  onShareAppMessage() {
    // Back to custom sharing information
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
});
