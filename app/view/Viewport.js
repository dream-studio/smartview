Ext.define('SmarTrans.view.Viewport', {
  extend: 'Ext.container.Viewport',
  layout: 'fit',
  requires: [
  ],
  initComponent: function () {
    this.html = 'Welcome to SmarTrans!!';
    console.log('init viewport');
    this.callParent();
  }
});