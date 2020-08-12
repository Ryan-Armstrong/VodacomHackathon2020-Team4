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
require('../../components/options/options?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/custom-button/custom-button?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/landing-page/landing-page?hash=b449417de28a88425372e8a40318501ce3757174');
require('../../pages/buy-page/buy-page?hash=710b7a966270cfbd78d932592766ce31ce208f98');
require('../../pages/details-page/details-page?hash=36b405fc5fc9438aaa3dc0b0d313f51a2f778225');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}