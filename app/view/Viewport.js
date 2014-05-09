Ext.define('SmarTrans.view.Viewport', {
  extend: 'Ext.container.Viewport',
  layout: 'card',
  requires: [
    'Ext.ux.map.Panel',
    'SmarTrans.view.cargo.Panel'
  ],
  initComponent: function () {
    var me = this;
    this.items = [
      {
        xtype: 'mappanel',
        header: false,
        city: '珠海'
      },
      {
        xtype: 'cargopanel',
        title: '我的货物',
        html: 'on building...'
      }
    ]
    this.callParent();
  }
});