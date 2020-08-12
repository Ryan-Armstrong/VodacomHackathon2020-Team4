const app = getApp();
Page({
  data: {
    title: "Airtime advance",
    option: [],
    totalRepayment:0
  },
  onLoad() {
    let totalRepayment = Number(app.selectedOption.content.price)+Number(app.selectedOption.content.serviceFee);
    this.setData({
      option:app.selectedOption,
      totalRepayment:totalRepayment
    })
  },
  confirm(){
    console.log(this.data.totalRepayment);
    console.log(this.data.option);
    my.request({
      url: 'http://localhost:9001/api/hackton/submit',
      method: 'POST',
      data: {totalRepayment:this.data.totalRepayment,option:this.data.option},
      timeout: 30000,
      success: (result) => {
        
      },
      fail: () => {
        
      },
      complete: () => {
        
      }
    });
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
