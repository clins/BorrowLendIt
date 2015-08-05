var lentThing = arguments[0] || {};

$.map.title = lentThing.get('whatDescription');

var Map = require('ti.map');

var mapView = Map.createView({
	            mapType: Map.STANDARD_TYPE,
	            animate:true,
	            regionFit:true});
 
var address = lentThing.get('whereLocation');
 
Ti.Geolocation.forwardGeocoder(address,
								function(event) {
						            var objLocationAnnotation = Map.createAnnotation({
						                latitude: event.latitude,
						                longitude: event.longitude,
						                image: 'appcelerator_small.png'});
						                
						    		mapView.addAnnotation(objLocationAnnotation);
						    	});

$.map.add(mapView);

function close() {
	$.navWin.close();
}
