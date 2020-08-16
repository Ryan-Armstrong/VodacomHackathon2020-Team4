const app = getApp();
Page({
  data: {
    services: [{
      text: 'Airtime Advance',
      icon: "../../assets/images/airtime.png",
    }, {
      text: 'Vodabucks',
      icon: "../../assets/images/vodacom.png"
    },
    {
      text: 'takealot',
      icon: "../../assets/images/takealot.png"
    },
    {
      text: 'Win a Pozi',
      icon: "../../assets/images/pozi.png"
    },
    {
      text: 'Electricity',
      icon: "../../assets/images/electricity.png"
    }, {
      text: 'Bills',
      icon: "../../assets/images/bills.png"
    }
      ,
    {
      text: 'Tickets',
      icon: "../../assets/images/tickets.png"
    },
    {
      text: 'Micro-Invest',
      icon: "../../assets/images/invest.png"
    }],
    modalOpened: true,
    phoneNumber: ""
  },
  onLoad(query) {
    // Page load
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  onInput(e) {
    console.log(e.detail.value);
    this.setData({
      phoneNumber: e.detail.value
    })
  },
  onModalClick() {
    this.setData({
      modalOpened: false,
    });
    my.showLoading();
    my.request({
      url: `${app.connectionURL}/login`,
      headers: {},
      method: 'GET',
      data: { phoneNumber: this.data.phoneNumber },
      timeout: 30000,
      dataType: 'json',
      success: (result) => {
        app.loggedUser = result.data;
        if (!app.loggedUser.active && !app.loggedUser.forbidden) {
          app.errorType = "eligibility";
          my.navigateTo({
            url: '../error-page/error-page',
          });
        } else if (app.loggedUser.forbidden) {
          app.errorType = "nopayment";
          my.navigateTo({
            url: '../error-page/error-page',
          });
        }
        else if (app.loggedUser.amountAdvance < 5 || app.loggedUser.amountQualify === 0) {
          my.navigateTo({
            url: '../recharge-page/recharge-page',
          });
        }
      },
      fail: () => {

      },
      complete: () => {
        my.hideLoading();
      }
    });
  },
  onModalClose() {
    this.setData({
      modalOpened: false,
    });
    app.phoneNumber = this.data.phoneNumber;
  },
  onLogin() {
    this.setData({
      modalOpened: true,
      phoneNumber: ""
    })
  },
  onItemClick(ev) {
    let index = ev.detail.index;
    let item = this.data.services[index];
    if (item.text === "Airtime Advance") {

      if (app.loggedUser.amountQualify == 0) {
        my.navigateTo({
          url: '../recharge-page/recharge-page',
        });
      } else {
        my.navigateTo({
          url: '../selection-page/selection-page',
        });
      }

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
