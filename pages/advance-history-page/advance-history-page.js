const app = getApp();
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
    history: [],
    repayments:[]
  },
  onLoad(query) {
    my.showLoading();
    let result = app.loggedUser;
    console.log(result);
    this.populateHistory(result.history);
    this.populateAdvanceHistory(result.repayments);
    my.hideLoading();
  },
  populateHistory(historyData){
    let history = [];
    historyData.map((item)=>{
      let obj =  { title: item.option.title, date:item.date, price: item.option.price, totalRepayment: item.totalRepayment, fee:item.option.fee, icon: "topup.png" };
      history.push(obj);
    })
    console.log(history);
    this.setData({
      history:history
    })
  },
  populateAdvanceHistory(historyData){
    let repayments = [];
    historyData.map((item)=>{
      console.log(item);
      let obj =  { repayment: item.repayment, date:item.datePaid,icon: "topup.png" };
      repayments.push(obj);
    })
    this.setData({
      repayments:repayments
    })
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
