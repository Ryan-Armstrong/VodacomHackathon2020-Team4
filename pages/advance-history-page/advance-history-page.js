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
    // Page load
    my.showLoading();
    my.request({
      url: 'http://192.168.1.103:3005/history',
    }).then(resp => {
      my.hideLoading();
      this.populateHistory(resp.data.advanceHistory);
      this.populateAdvanceHistory(resp.data.repaymentHistory);
    });
  },
  populateHistory(historyData){
    let history = [];
    historyData.map((item)=>{
      let obj =  { title: item.option.title, date:item.date, price: item.option.price, totalRepayment: item.totalRepayment, fee:item.option.fee, icon: "topup.png" };
      history.push(obj);
    })
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
