Ext.define('SmartView.view.Viewport', {
  extend: 'Ext.container.Viewport',
  layout: 'fit',
  requires: [
    'SmartView.view.map.MapPanel',
    'SmartView.view.cargo.CargoPanel',
    'SmartView.view.order.OrderPanel',
    'Ext.ux.statusbar.StatusBar'
  ],
  initComponent: function () {
    var me = this;
    this.items = [
      {
        id: 'mainPanel',
        xtype: 'panel',
        layout: {
          type: 'card',
          deferredRender: true
        },
        defaults: {
          border: false
        },
        dockedItems: [
          {
            id: 'systemStatusBar',
            xtype: 'statusbar',
            dock: 'bottom',
            height: 21,
            border: false,
            defaultText: 'Default status',
            style: {
              fontSize: '12px'
            },
    //        statusAlign: 'right', // the magic config
            text: 'Connecting to server...',
            iconCls: 'x-status-busy',
            items: []
          }
        ],
        items: [
//          {
//            xtype: 'container',
//            html: 'empty container'
//          },
          {
            xtype: 'mappanel',
            id: 'myMap',
            header: false,
            city: '珠海'
          },
          {
            xtype: 'cargopanel',
            id: 'myCargo',
            title: '我的货物'
          },
          {
            xtype: 'orderpanel',
            id: 'myOrder',
            title: '订单打不开啦！！还没弄好啦',
            html: 'on building...'
          }
        ]
      }
    ];
    this.callParent();

  },
  // override setActiveItem
  setActiveItem: function(item){
    return this.down('#mainPanel').getLayout().setActiveItem(item);
  }
});