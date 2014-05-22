Ext.define('SmartView.controller.MapController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.map',
  defaultToken: 'personal',
  init: function() {
    this.control({
      '#': {
//        afterrender: function(){
//          console.log('map rendered!!');
//        }
      }
    })
  },
  onAddClick: function(){
    console.log('add clicked!');
  }
});