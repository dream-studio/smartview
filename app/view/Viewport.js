Ext.define('SmartView.view.Viewport', {
  extend: 'Ext.container.Viewport',
  layout: 'fit',
  requires: [
    'Ext.ux.map.Panel',
    'SmartView.view.cargo.Panel',
    'SmartView.view.order.Panel',
    'Ext.ux.statusbar.StatusBar'
  ],
  initComponent: function () {
    var me = this;
    this.items = [
      {
        xtype: 'panel',
        layout: 'card',
        items: [
          {
            xtype: 'mappanel',
            id: 'myMap',
            header: false,
            city: '珠海'
          },
          {
            xtype: 'cargopanel',
            id: 'myCargo',
            title: '我的货物',
            html: 'on building...'
          }
          ,
          {
            xtype: 'orderpanel',
            id: 'myOrder',
            title: '订单打不开啦！！还没弄好啦',
            html: 'on building...'
          }
        ]
      }
    ];
//
//    this.bbar = [
//      {
//        id: 'systemStatusBar',
//        xtype: 'toolbar',
//        dock: 'bottom',
//        defaultText: 'Default status',
////        statusAlign: 'right', // the magic config
//        text: 'Connecting to server...',
//        iconCls: 'x-status-busy',
//        items: [{
//          text: 'About us'
//        }]
//      }
//    ];
    this.callParent();

    this.setDocked({
      id: 'systemStatusBar',
      xtype: 'toolbar',
      dock: 'bottom',
      defaultText: 'Default status',
//        statusAlign: 'right', // the magic config
      text: 'Connecting to server...',
      iconCls: 'x-status-busy',
      items: [{
        text: 'About us'
      }]
    }, true) ;
  },
  // override setActiveItem
  setActiveItem: function(){

  }
});