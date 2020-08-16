const app = getApp();
Page({
  data: {
    image: "error.png",
    title: "Please recharge",
    isColumn: true,
    buttons: [{ name: "ButtonOne",action:"onButton1", outline: false }, { name: "ButtonTwo",action:"onButton2", outline: true }],
    messages: ["You cannot use this service, because you’ve got an outstanding balance of R50.",
      "Please recharge in order to pay your outstanding advances."]
  },                                                                   
  onLoad() {
    this.setData({
      image: app.infoPageData.image,
      title: app.infoPageData.title,
      isColumn: app.infoPageData.isColumn,
      buttons: app.infoPageData.buttons,
      messages: app.infoPageData.messages
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
