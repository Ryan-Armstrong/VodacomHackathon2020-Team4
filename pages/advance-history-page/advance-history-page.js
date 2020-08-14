Page({
  data: {
    title: "Airtime advance",
    tabs: [
      {
        title: 'ADVANCES',
        key: "advances"
      },
      {
        title: 'REPAYMENTS',
        key: "repayment"
      },
    ],
    activeTab: 0,
    history: [
      { title: "R5 airtime", price: 5, totalRepayment: 6, fee: 1, icon: "topup.png" },
      { title: "R10 airtime", price: 5, totalRepayment: 6, fee: 1, icon: "topup.png" },
      { title: "60MB for R9", price: 9, totalRepayment: 10, fee: 1, icon: "topup.png" },
      { title: "60MB for R9", price: 9, totalRepayment: 10, fee: 1, icon: "topup.png" },
      { title: "R12 airtime", price: 12, totalRepayment: 13, fee: 1, icon: "topup.png" }
    ]
  },
  onLoad(query) {
    // Page load
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  handleTabClick({ index }) {
    this.setData({
      activeTab: index,
    });
  },
  handleTabChange({ index }) {
    this.setData({
      activeTab: index,
    });
  },
  loadMore() {

  },
  outstanding() {
    my.navigateTo({
      url: '../outstanding-balance-page/outstanding-balance-page',
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
