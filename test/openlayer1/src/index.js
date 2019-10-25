import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
// import OSM from 'ol/source/OSM';
import {OSM, TileArcGISRest} from 'ol/source';
var url = 'https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/' +
    'Specialty/ESRI_StateCityHighway_USA/MapServer';

var layer=[
    new TileLayer({
        source: new OSM()
    }),
    new TileLayer({
        extent: [-13884991, 2870341, -7455066, 6338000],//范围 [minx, miny, maxx, maxy]
        source: new TileArcGISRest({
            url: url
        })
    }),
];

const map = new Map({
    target: 'map',
    layers: [                                  //图层。如果要使矢量层出现在图块层的顶部，则它必须位于图块层之后。
        new TileLayer({
            source: new OSM()                 //来源
        })
    ],
    view: new View({
        center: [-10997148, 4569099],          //中心坐标
        zoom:2,                               //缩放级别
    })
});
// var view=map.getView();
// var zoom=view.getZoom();
// view.on('change:resolution',function(e){
//     console.log('zoom了');
// });
// view.on('change:center',function(e){
//     console.log('moveing了');
// });
// map.on('moveend',function(e){
//     console.log('moveend了');
//     if(view.getZoom()!==zoom)
//         console.log('zomeend了,change:zoom了');
// });



// import 'ol/ol.css';
// import Map from 'ol/Map';
// import View from 'ol/View';
// import {Draw, Modify, Snap} from 'ol/interaction';
// import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
// import {OSM, Vector as VectorSource} from 'ol/source';
// import {Circle as CircleStyle, Fill, Stroke, Style} from 'ol/style';
//
// var raster = new TileLayer({
//     source: new OSM()
// });
//
// var source = new VectorSource();
// var vector = new VectorLayer({
//     source: source,
//     style: new Style({
//         fill: new Fill({
//             color: 'rgba(255, 255, 255, 0.2)'
//         }),
//         stroke: new Stroke({
//             color: '#000',
//             width: 2
//         }),
//         image: new CircleStyle({
//             radius: 7,
//             fill: new Fill({
//                 color: '#ffcc33'
//             })
//         })
//     })
// });
//
// var map = new Map({
//     layers: [raster, vector],
//     target: 'map',
//     view: new View({
//         center: [-11000000, 4600000],
//         zoom: 4
//     })
// });
//
// var modify = new Modify({source: source});
// map.addInteraction(modify);
//
// var draw, snap; // global so we can remove them later
// var typeSelect = document.getElementById('type');
//
// function addInteractions() {
//     draw = new Draw({
//         source: source,
//         type: typeSelect.value
//     });
//     map.addInteraction(draw);
//     snap = new Snap({source: source});
//     map.addInteraction(snap);
//
// }

/**
 * Handle change event.
 */
// typeSelect.onchange = function() {
//     map.removeInteraction(draw);
//     map.removeInteraction(snap);
//     addInteractions();
// };
//
// addInteractions();