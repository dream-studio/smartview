Ext.define('SmartView.view.cargo.CargoPanel', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.cargopanel',
  requires: ['SmartView.controller.Cargo'],
  controller: 'cargo',
  tools: [
    {
      type: 'plus',
      handler: 'onAddClick'
    }
  ],
  initComponent: function(){
    this.callParent();
  }
});