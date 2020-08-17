const app = getApp();
Page({
  data: {
    image: "info.png",
    title: "Please recharge",
    isColumn: true,
    buttons: [{ name: "Recharge", action: "onRecharge", outline: false }],
    messages: ["You cannot use this service, because you’ve got an outstanding balance of R50.",
      "Please recharge in order to pay your outstanding advances."],
    airtimeAmount: ''
  },
  onLoad() {
    if (app.loggedUser.amountQualify == 0) {
      this.setData({
        messages: ["To qualify for an advance, please recharge with a minimum of R29 per month for the next 3 months, and be active on Vodacom for 6 months."]
      })
    } else {
      this.setData({
        messages: [`You cannot use this service, because you’ve got an outstanding balance of R${app.loggedUser.advances + app.loggedUser.totalFees}.`,
          "Please recharge in order to pay your outstanding advances."]
      })
    }
  },
  onInput(e) {
    this.setData({
      airtimeAmount: e.detail.value
    })
  },
  onRecharge() {
    this.setData({
      modalOpened: true
    })
  },
  onModalClick() {
    this.setData({
      modalOpened: false,
    });
    my.showLoading();
    app.loggedUser = this.recharge(this.data.airtimeAmount);
    my.navigateBack(100);
    my.hideLoading();
  },

  recharge(value) {
    let airtimeAmount = Number(value);
    let loggedInUsers = app.loggedUser;
    let totalRepayment = loggedInUsers.advances + loggedInUsers.totalFees;
    if (airtimeAmount > totalRepayment) {
      loggedInUsers.advances = 0;
      loggedInUsers.totalFees = 0;
      loggedInUsers.amountAdvance = loggedInUsers.amountQualify;
      loggedInUsers.balance = airtimeAmount - totalRepayment;
    } else {
      if (airtimeAmount > loggedInUsers.advances) {
        loggedInUsers.balance = loggedInUsers.advances - airtimeAmount;
        loggedInUsers.advances = 0;
        loggedInUsers.amountAdvance =
          loggedInUsers.amountQualify - loggedInUsers.totalFees;
      } else {
        loggedInUsers.advances = loggedInUsers.advances - airtimeAmount;
      }
      if (
        loggedInUsers.advances === 0 &&
        loggedInUsers.balance > loggedInUsers.totalFees
      ) {
        loggedInUsers.balance = loggedInUsers.balance - loggedInUsers.totalFees;
        loggedInUsers.totalFees = 0;
        loggedInUsers.amountAdvance = loggedInUsers.amountQualify;
      }
    }
    let date = new Date();
    let repaymentEntry = {
      repayment: airtimeAmount,
      owing: loggedInUsers.owing,
      datePaid: date,
    };
    loggedInUsers.repayments.push(repaymentEntry);
    return loggedInUsers;
  },
  onModalClose() {
    this.setData({
      modalOpened: false,
    });
    app.airtimeAmount = this.data.airtimeAmount;
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
