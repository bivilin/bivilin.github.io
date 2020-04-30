var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DEINFO_DISTRITO_1 = new ol.format.GeoJSON();
var features_DEINFO_DISTRITO_1 = format_DEINFO_DISTRITO_1.readFeatures(json_DEINFO_DISTRITO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DEINFO_DISTRITO_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DEINFO_DISTRITO_1.addFeatures(features_DEINFO_DISTRITO_1);
var lyr_DEINFO_DISTRITO_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DEINFO_DISTRITO_1, 
                style: style_DEINFO_DISTRITO_1,
                interactive: true,
    title: 'DEINFO_DISTRITO<br />\
    <img src="styles/legend/DEINFO_DISTRITO_1_0.png" /> 3,0000 - 11,0000<br />\
    <img src="styles/legend/DEINFO_DISTRITO_1_1.png" /> 11,0000 - 21,0000<br />\
    <img src="styles/legend/DEINFO_DISTRITO_1_2.png" /> 21,0000 - 35,0000<br />\
    <img src="styles/legend/DEINFO_DISTRITO_1_3.png" /> 35,0000 - 58,0000<br />\
    <img src="styles/legend/DEINFO_DISTRITO_1_4.png" /> 58,0000 - 81,0000<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_DEINFO_DISTRITO_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_DEINFO_DISTRITO_1];
lyr_DEINFO_DISTRITO_1.set('fieldAliases', {'CLASSID': 'CLASSID', 'FEATID': 'FEATID', 'REVISIONNU': 'REVISIONNU', 'NOME_DIST': 'NOME_DIST', 'SIGLA_DIST': 'SIGLA_DIST', 'COD_DIST': 'COD_DIST', 'COD_SUB': 'COD_SUB', 'DATA_CRIAC': 'DATA_CRIAC', 'USUARIO_ID': 'USUARIO_ID', 'mortesConf': 'mortesConf', 'mortesSusp': 'mortesSusp', 'mortesTota': 'mortesTota', });
lyr_DEINFO_DISTRITO_1.set('fieldImages', {'CLASSID': 'TextEdit', 'FEATID': 'TextEdit', 'REVISIONNU': 'TextEdit', 'NOME_DIST': 'TextEdit', 'SIGLA_DIST': 'TextEdit', 'COD_DIST': 'TextEdit', 'COD_SUB': 'TextEdit', 'DATA_CRIAC': 'DateTime', 'USUARIO_ID': 'TextEdit', 'mortesConf': 'Range', 'mortesSusp': 'Range', 'mortesTota': 'Range', });
lyr_DEINFO_DISTRITO_1.set('fieldLabels', {'CLASSID': 'no label', 'FEATID': 'no label', 'REVISIONNU': 'no label', 'NOME_DIST': 'no label', 'SIGLA_DIST': 'no label', 'COD_DIST': 'no label', 'COD_SUB': 'no label', 'DATA_CRIAC': 'no label', 'USUARIO_ID': 'no label', 'mortesConf': 'no label', 'mortesSusp': 'no label', 'mortesTota': 'no label', });
lyr_DEINFO_DISTRITO_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});