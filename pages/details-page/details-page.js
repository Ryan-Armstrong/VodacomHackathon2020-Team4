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
    my.showLoading();
    let result = this.subumit({ totalRepayment: this.data.totalRepayment, option: this.data.option });
    app.loggedUser = result.loggedInUsers;
    my.hideLoading();
    if (result.success) {
      my.navigateTo({
        url: '../success-page/success-page',
      });
    } else {
      my.navigateTo({
        url: '../recharge-page/recharge-page',
      });
    }
  },

  subumit(data) {
    let loggedInUsers = app.loggedUser;
    if (!loggedInUsers.msidn) {
      resp.json({ success: false, error: "Not logged in" });
    } else {
      if (loggedInUsers.balance >= data.totalRepayment) {
        loggedInUsers.balance = loggedInUsers.balance - data.totalRepayment;
        return { success: true, loggedInUsers: loggedInUsers };
      } else {
        if (data.totalRepayment > loggedInUsers.balance) {
          loggedInUsers.balance = 0;
          data.totalRepayment = data.totalRepayment - loggedInUsers.balance;
        }
        if (data.totalRepayment > loggedInUsers.amountAdvance) {
          return {
            success: false,
            reason: "Outstanding Balance",
            outstandingBalance: loggedInUsers.advances + loggedInUsers.totalFees,
            loggedInUsers: loggedInUsers,
          };
        } else {
          loggedInUsers.advances += data.option.price;
          loggedInUsers.totalFees += data.option.fee;
          loggedInUsers.amountAdvance -= data.totalRepayment;
          let date = new Date();
          let historyEntry = {
            option: data.option,
            totalRepayment: data.totalRepayment,
            date: date,
          };
          loggedInUsers.history.push(historyEntry);
          return { success: true, loggedInUsers: loggedInUsers };
        }
      }
    }
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
