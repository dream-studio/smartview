Ext.define('SmartView.view.map.MapPanel', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.mappanel',
  requires: ['SmartView.controller.MapController'],
  mixins: {
    maphelper: 'SmartView.view.map.BMapHelper'
  },
  controller: 'map',

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
  mapLoading: false,
  mapLoaded: false,
  initComponent: function(){
    var me = this;

    me.callParent();

    me.addStateEvents('aftermapload');
  },
  // override Ext.util.Renderer.afterLayout
  afterLayout: function(){
    var me = this;
    me.callParent();

    try{
      (BMap);
    }catch(e){
      me.update('<div style="text-align:center;font-size:20pt;line-height: ' + me.body.el.getHeight() + 'px; ">无法加载百度地图控件，请联系管理员</div>');
      me.mapLoaded = false;
      return;
    }

    if (me.mapLoaded || me.mapLoading){
      return;
    }

    me.mapLoading = true;
    var map;
    me.map = map = new BMap.Map(me.body.el.dom);
    map.enableScrollWheelZoom();
//    map.disableAutoResize();

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
      // 默认珠海市
      map.centerAndZoom(new BMap.Point(113.562447, 22.256915), 13);
    }else{
      map.centerAndZoom(me.city);
    }

    // fixed bug of map can't zoom to specified region when container switch to hidden during map initialing
    var p = map.getBounds().toSpan();
    if (p.lat === 0 && p.lng === 0){
      me.mapLoading = false;
      me.mapLoaded = false;
      return;
    }

    me.fireEvent('aftermapload', me);

    me.mapLoading = false;
    me.mapLoaded = true;
  },
  /**
   * example: addMarker(113.561447, 22.256915,'<div>test</div>', {onmousedown: function(e){console.log("MouseDown : " + e.point.lng + " , " + e.point.lat + " ; " + e.pixel.x + " , " + e.pixel.y)}});
   * @param lng
   * @param lat
   * @param html
   * @param listeners
   * @returns {window.BMapLib.RichMarker}
   */
  addMarker: function(lng, lat, html, listeners){
    var me = this,
      point = new BMap.Point(lng, lat),
      richMarker = new BMapLib.RichMarker(me.markerTpl.apply({content: html}), point, {
        'anchor': new BMap.Size(-63, -90)
      });

    me.map.addOverlay(richMarker);
    var markerBody = richMarker.K.children[0];
    // animation
    markerBody.className = 'show-class ' + markerBody.className;

    if (listeners){
      Ext.Object.each(listeners, function(k, func){
        richMarker.addEventListener(k, func);
      });
    }

//    richMarker.addEventListener('onclick', function(e){
//      console.log('onclick!!', markerBody.offsetHeight);
//      300 - markerBody.offsetHeight
//      markerBody.style.height = '300px';
//      markerBody.style.top = '-220px';
//    });

    return richMarker;
  },
  removeMarker: function(marker){
    var me = this;
    me.map.removeOverlay(marker);
  }
});