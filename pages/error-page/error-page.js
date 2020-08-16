const app = getApp();
Page({
  data: {
    messages: [""],
    errorType: ''
  },
  onLoad() {
    if (app.errorType === "eligibility") {
      this.setData({
        messages: ["You cannot use the service, because:", "You haven’t been active on the Vodacom network for the last 3 months.", "OR", "You haven’t recharged with  at least R29 per month over the last 3 months."],
        errorType: app.errorType
      })
    }
    if (app.errorType === "processing") {
      this.setData({
        messages: ["Something went wrong and we could not process your request. Please try again later."],
        errorType: app.errorType
      })
    }
    if (app.errorType === "nopayment") {
      this.setData({
        messages: ["Due to non-payment on previous loan advances, this service is no longer available to you."],
        errorType: app.errorType
      })
    }
  },
  onCancel() {
    my.navigateBack();
  },
  onOkay() {
    if (this.data.errorType === "eligibility" || this.data.errorType === "nopayment") {
      my.navigateBack({
        delta: 100
      });
    } else {
      my.navigateBack();
    }
  }
});
