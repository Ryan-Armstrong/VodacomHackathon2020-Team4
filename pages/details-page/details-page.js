const app = getApp();
Page({
  data: {
    title: "Airtime advance",
    option: [],
    totalRepayment: 0
  },
  onLoad() {
    let totalRepayment = Number(app.selectedOption.price) + Number(app.selectedOption.fee);
    this.setData({
      option: app.selectedOption,
      totalRepayment: totalRepayment
    })
  },
  confirm() {
    my.request({
      url: `${app.connectionURL}/submit`,
      method: 'POST',
      data: { totalRepayment: this.data.totalRepayment, option: this.data.option },
      timeout: 30000,
      success: (result) => {
        app.loggedUser = result.data.loggedInUsers;
        if (result.data.success) {
          my.navigateTo({
            url: '../success-page/success-page',
          });
        }else{
          my.navigateTo({
            url: '../recharge-page/recharge-page',
          });
        }
      },
      fail: () => {

      },
      complete: () => {

      }
    });
  },
  onButtonAction() {
    console.log("sdgsgs");
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
