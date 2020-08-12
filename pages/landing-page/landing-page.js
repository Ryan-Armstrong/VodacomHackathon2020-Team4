Page({
  data: {
    services: [{
      text: 'Airtime Advance',
      icon: "../../assets/airtime.png",
    }, {
      text: 'Vodabucks',
      icon: "../../assets/vodacom.png"
    },
    {
      text: 'takealot',
      icon: "../../assets/takealot.png"
    },
    {
      text: 'Win a Pozi',
      icon: "../../assets/pozi.png"
    },
    {
      text: 'Electricity',
      icon: "../../assets/electricity.png"
    }, {
      text: 'Bills',
      icon: "../../assets/bills.png"
    }
      ,
    {
      text: 'Tickets',
      icon: "../../assets/tickets.png"
    },
    {
      text: 'Micro-Invest',
      icon: "../../assets/invest.png"
    }],
  },
  onLoad(query) {
    // Page load
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  onItemClick(ev) {
    let index = ev.detail.index;
    let item = this.data.services[index];
    if (item.text === "Airtime Advance") {
      my.navigateTo({
        url: '../buy-page/buy-page',
      });
    } else {
      my.alert({
        content: `${item.text} Not implemented`,
      });
    }
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
