const app = getApp();
Page({
  data: {
    title: "Airtime advance",
    tabs: [
      {
        title: 'Airtime',
        key: "airtime"
      },
      {
        title: 'Data',
        key: "data"
      },
    ],
    user: {},
    activeTab: 0,
    options: JSON.parse("{\"airtime\":{\"title\":\"Choose amount\",\"items\":[{\"title\":\"R5 airtime\",\"price\":5,\"fee\":1,\"icon\":\"topup.png\"},{\"title\":\"R10 airtime\",\"price\":10,\"fee\":1,\"icon\":\"topup.png\"},{\"title\":\"R15 airtime\",\"price\":15,\"fee\":1,\"icon\":\"topup.png\"},{\"title\":\"R20 airtime\",\"price\":20,\"fee\":1,\"icon\":\"topup.png\"},{\"title\":\"R75 airtime\",\"price\":75,\"fee\":1,\"icon\":\"topup.png\"}]},\"data\":{\"title\":\"Choose amount\",\"items\":[{\"title\":\"10 MB for R3\",\"details\":\"Data bundles are valid until midnight\",\"price\":10,\"fee\":1,\"icon\":\"sharing.png\"},{\"title\":\"25 MB for R6\",\"details\":\"Data bundles are valid until midnight\",\"price\":6,\"fee\":1,\"icon\":\"sharing.png\"},{\"title\":\"70 MB for R11\",\"details\":\"Data bundles are valid until midnight\",\"price\":11,\"fee\":1,\"icon\":\"sharing.png\"},{\"title\":\"125 MB for R18\",\"details\":\"Data bundles are valid until midnight\",\"price\":10,\"fee\":1,\"icon\":\"sharing.png\"},{\"title\":\"25 MB + 25 MB free for R9\",\"details\":\"Data bundles for 30 days\",\"price\":9,\"fee\":1,\"icon\":\"sharing.png\"},{\"title\":\"50 MB for R12\",\"details\":\"Data bundles for 30 days\",\"price\":12,\"fee\":1,\"icon\":\"sharing.png\"},{\"title\":\"150 MB for R29\",\"details\":\"Data bundles for 30 days\",\"price\":29,\"fee\":1,\"icon\":\"sharing.png\"},{\"title\":\"325 MB for R55\",\"details\":\"Data bundles for 30 days\",\"price\":55,\"fee\":1,\"icon\":\"sharing.png\"},{\"title\":\"500 MB for R79\",\"details\":\"Data bundles for 30 days\",\"price\":79,\"fee\":1,\"icon\":\"sharing.png\"},{\"title\":\"1 GB for R99\",\"details\":\"Data bundles for 30 days\",\"price\":99,\"fee\":1,\"icon\":\"sharing.png\"},{\"title\":\"5 GB for R229\",\"details\":\"Data bundles for 30 days\",\"price\":229,\"fee\":1,\"icon\":\"sharing.png\"},{\"title\":\"5 GB for R349\",\"details\":\"Data bundles for 30 days\",\"price\":349,\"fee\":1,\"icon\":\"sharing.png\"},{\"title\":\"10 GB for R469\",\"details\":\"Data bundles for 30 days\",\"price\":469,\"fee\":1,\"icon\":\"sharing.png\"},{\"title\":\"20 GB for R699\",\"details\":\"Data bundles for 30 days\",\"price\":699,\"fee\":1,\"icon\":\"sharing.png\"}]}}"
    )
  },

  onLoad() {
    this.setData({
      user:app.loggedUser
    })
    my.showLoading();
    my.request({
      url: `${app.connectionURL}/options`,
    }).then(resp => {
      my.hideLoading();
      this.setData({
        options: resp.data
      })
    });
  },
  onOptionMenuClick(e) {
    my.navigateTo({
      url: '../how-it-works-page/how-it-works-page',
    });
  },
  onAdvanceHistory() {
    my.navigateTo({
      url: '../advance-history-page/advance-history-page',
    });
  },
  onItemClick(ev) {
    let tab = this.data.tabs[this.data.activeTab];
    let item = this.data.options[tab.key].items[ev.index];
    app.selectedOption = item;
    my.navigateTo({
      url: '../details-page/details-page',
    });
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
