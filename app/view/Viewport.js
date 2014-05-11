Ext.define('SmartView.view.Viewport', {
  extend: 'Ext.container.Viewport',
  layout: 'card',
  requires: [
    'Ext.ux.map.Panel',
    'SmartView.view.cargo.Panel',
    'SmartView.view.order.Panel'
  ],
  initComponent: function () {
    var me = this;
    this.items = [
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
      },
      {
        xtype: 'orderpanel',
        id: 'myOrder',
        title: '订单打不开啦！！还没弄好啦',
        html: 'on building...'
      }
    ]
    this.callParent();
  },
  addMarker: function(lng, lat, title){
    var maker;
    return marker;
  }
});