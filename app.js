
App({
  selectedOption: {},
  loggedUser:{},
  infoPageData:{},
  errorType:"",
  isProd:true,
  connectionURL:"",
  users:JSON.parse("[{\"msidn\":\"0806060321\",\"amountAdvance\":100,\"active\":true,\"forbidden\":false,\"balance\":0,\"advances\":0,\"totalFees\":0,\"amountQualify\":100,\"history\":[],\"repayments\":[]},{\"msidn\":\"0616060321\",\"amountAdvance\":100,\"balance\":0,\"active\":true,\"forbidden\":false,\"advances\":0,\"totalFees\":0,\"amountQualify\":30,\"history\":[],\"repayments\":[]},{\"msidn\":\"0710603212\",\"amountAdvance\":30,\"active\":true,\"forbidden\":false,\"balance\":0,\"advances\":0,\"totalFees\":0,\"amountQualify\":30,\"history\":[],\"repayments\":[]},{\"msidn\":\"0710603213\",\"amountAdvance\":50,\"balance\":0,\"active\":true,\"forbidden\":false,\"advances\":0,\"totalFees\":0,\"amountQualify\":50,\"history\":[],\"repayments\":[]},{\"msidn\":\"0720603250\",\"amountAdvance\":0,\"balance\":0,\"active\":true,\"forbidden\":false,\"advances\":0,\"totalFees\":0,\"amountQualify\":0,\"history\":[],\"repayments\":[]},{\"msidn\":\"0760603252\",\"amountAdvance\":0,\"balance\":0,\"active\":false,\"forbidden\":false,\"advances\":0,\"totalFees\":0,\"amountQualify\":0,\"history\":[],\"repayments\":[]},{\"msidn\":\"0710603280\",\"amountAdvance\":0,\"balance\":0,\"active\":false,\"forbidden\":true,\"advances\":0,\"totalFees\":0,\"amountQualify\":0,\"history\":[],\"repayments\":[]}]"),
  onLaunch(options) {
    const app = getApp();
    // Page opens for the first time
    console.info('App onLaunch');
    const sysInfo = my.getSystemInfoSync();
    // app.connectionURL = app.isProd?"http://ec2-18-231-179-150.sa-east-1.compute.amazonaws.com:3005":"http://192.168.1.103:3005";
    console.log(sysInfo);
  },
  onOptionMenuClick() {
    // Trigger on clicking upper-right corner menu button
    console.log("sdgsdgs");
  },
  onShow(options) {
    // Reopened by scheme from the background
  }
});
