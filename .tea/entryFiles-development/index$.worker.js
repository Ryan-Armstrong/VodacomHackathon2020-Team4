if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


      if( navigator.userAgent && (navigator.userAgent.indexOf('LyraVM') > 0 || navigator.userAgent.indexOf('AlipayIDE') > 0) ) {
        var AFAppX = self.AFAppX.getAppContext ? self.AFAppX.getAppContext().AFAppX : self.AFAppX;
      } else {
        importScripts('https://appx/af-appx.worker.min.js');
        var AFAppX = self.AFAppX;
      }
      self.getCurrentPages = AFAppX.getCurrentPages;
      self.getApp = AFAppX.getApp;
      self.Page = AFAppX.Page;
      self.App = AFAppX.App;
      self.my = AFAppX.bridge || AFAppX.abridge;
      self.abridge = self.my;
      self.Component = AFAppX.WorkerComponent || function(){};
      self.$global = AFAppX.$global;
      self.requirePlugin = AFAppX.requirePlugin;
    

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../node_modules/mini-antui/es/grid/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/modal/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/header/header?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/badge/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/tabs/index?hash=b998354db5b64281090d8969355b2b3db41cda49');
require('../../components/custom-button/custom-button?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/tabs/tab-content/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/list/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/list/list-item/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/options/options?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/footer/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/history-line-item/history-line-item?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/repayment-line-item/repayment-line-item?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/top-header/top-header?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/info-component/info-component?hash=8f6a9579067b3cf3bdd5bd22cf0e367a5d2e6725');
require('../../pages/landing-page/landing-page?hash=0165b597dfae9262261b2dbcf11b10f2a1662823');
require('../../pages/selection-page/selection-page?hash=ec6de8d7214f13c35d6f95578c9f0d214e1e6b23');
require('../../pages/details-page/details-page?hash=e6e658efd6f1f8459cd0277fa8a25e19941848b1');
require('../../pages/advance-history-page/advance-history-page?hash=e392064d08c85c817e2ecc508b1624ae9cf621fc');
require('../../pages/outstanding-balance-page/outstanding-balance-page?hash=710b7a966270cfbd78d932592766ce31ce208f98');
require('../../pages/how-it-works-page/how-it-works-page?hash=36b405fc5fc9438aaa3dc0b0d313f51a2f778225');
require('../../pages/processing-error/processing-error?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/success-page/success-page?hash=3d78cd25ab1bbb03ef2332b9ad86ccb3fac0ccb0');
require('../../pages/info-page/info-page?hash=3d78cd25ab1bbb03ef2332b9ad86ccb3fac0ccb0');
require('../../pages/recharge-page/recharge-page?hash=5316e452f29859ac1505b6e9f265681bf076aa0f');
require('../../pages/error-page/error-page?hash=6ecb114985f5e2c18bc11cdea638e223979741d9');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}