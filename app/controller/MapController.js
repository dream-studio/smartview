Ext.define('SmartView.controller.MapController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.map',
  defaultToken: 'personal',
  init: function() {
    this.control({
      '#': {
        aftermapload: function(){
          console.log('on map load');
        }
      }
    })
  },
  onAddClick: function(){
    console.log('add clicked!');
  }
});