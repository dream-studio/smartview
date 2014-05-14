Ext.define('Ext.ux.map.BMapHelper', {
  markerTpl: new Ext.XTemplate(
    '<div class="dmarker-anim dmarker-main">',
      '{content}',
      '<div class="dmarker-arrow-outter">',
      '<div class="dmarker-entry-trangle"><!--本Div只来实现三角形，无其他作用--></div>',
      '</div>',
    '</div>',
    {}
  )
});