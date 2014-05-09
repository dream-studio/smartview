Ext.define('Ext.ux.map.Panel', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.mappanel',
  enableNavigation: true,
  enableScale: true,
  enableOverview: false,
  enableMapType: false,
  city: undefined,

  // map controllers
  navigationControl: undefined,
  scaleControl: undefined,
  overviewMapControl: undefined,
  mapTypeControl: undefined,

  initComponent: function(){
    var me = this;
    me.callParent();

    me.addStateEvents('aftermapload');

    Ext.defer(function(){
      try{
        (BMap);
      }catch(e){
        me.update('<h2>无法加载百度地图控件，请联系管理员</h2>');
        return;
      }

      var map;
      me.map = map = new BMap.Map(me.body.el.dom);

      if (me.enableNavigation){
        me.navigationControl = new BMap.NavigationControl();
        map.addControl(me.navigationControl);
      }
      if (me.enableScale){
        me.scaleControl = new BMap.ScaleControl();
        map.addControl(me.scaleControl);
      }
      if (me.enableOverview){
        me.overviewMapControl = new BMap.OverviewMapControl();
        map.addControl(me.overviewMapControl);
      }
      if (me.enableMapType){
        me.mapTypeControl = new BMap.MapTypeControl();
        map.addControl(me.mapTypeControl);
      }

      if (Ext.isEmpty(me.city)){
        map.centerAndZoom(new BMap.Point(121.491, 31.233), 11);
      }else{
        map.centerAndZoom(me.city);
      }

      me.fireEvent('aftermapload', me);
    }, 1);
  }

});