//Initialize different parameter for response window size
var main_zoom;
var image_size;
var font_size;
var marker_sise;
var search_font_size;
if ($(window).width() <= 768) {
    main_zoom = 11;
    image_size = '150x80';
    font_size = '12px';
    search_font_size = '18px';
} else {
    if ($(window).width() > 768 && $(window).width() <= 1024) {
        main_zoom = 12;
        image_size = '200x150';
        font_size = '15px';
        search_font_size = '22px';
    } else {
        main_zoom = 13;
        image_size = '200x150';
        font_size = '16px';
        search_font_size = '25px';
    }
}
$('.sidebar').css('font-size', font_size);
$('#reset').css('font-size', font_size);
$('.search').css('font-size', search_font_size);

//Initialize different parameter for map set up
var map;
var markers = [];
var largeInfowindow;
var locations = [{
        num: 0,
        title: 'Kamppi Center',
        address: 'Urho Kekkosen katu 1, 00100 Helsinki, Finland',
        location: {
            lat: 60.169856,
            lng: 24.933338
        }
    },
    {
        num: 1,
        title: 'Helsinki Olympic Stadium',
        address: 'Paavo Nurmen tie 1, 00250 Helsinki, Finland',
        location: {
            lat: 60.187491,
            lng: 24.923087
        }
    },
    {
        num: 2,
        title: 'Temppeliaukion Church',
        address: 'Lutherinkatu 3, 00100 Helsinki, Finland',
        location: {
            lat: 60.1725517,
            lng: 24.9255819
        }
    },
    {
        num: 3,
        title: 'Aalto University',
        address: '02150 Espoo, Finland',
        location: {
            lat: 60.185877,
            lng: 24.828006
        }
    },
    {
        num: 4,
        title: 'Hartwall Arena',
        address: ' Areenankuja 1, 00240 Helsinki, Finland',
        location: {
            lat: 60.205739,
            lng: 24.929222
        }
    },
    {
        num: 5,
        title: 'Helsinki Cathedral',
        address: 'Unioninkatu 29, 00170 Helsinki, Finland',
        location: {
            lat: 60.1701247,
            lng: 24.949292
        }
    }
];


map_center = {
    lat: 60.187491,
    lng: 24.903087
};


// Set up the map and Create markers
function initMap() {
    // Constructor creates a new map .
    map = new google.maps.Map(($('#map').get(0)), {
        center: map_center,
        zoom: main_zoom,
        styles: [{
                "elementType": "geometry",
                "stylers": [{
                    "color": "#ebe3cd"
                }]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#523735"
                }]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#f5f1e6"
                }]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#c9b2a6"
                }]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#dcd2be"
                }]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#ae9e90"
                }]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#dfd2ae"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#dfd2ae"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#93817c"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#a5b076"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#447530"
                }]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f5f1e6"
                }]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#fdfcf8"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f8c967"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#e9bc62"
                }]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e98d58"
                }]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#db8555"
                }]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#806b63"
                }]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#dfd2ae"
                }]
            },
            {
                "featureType": "transit.line",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#8f7d77"
                }]
            },
            {
                "featureType": "transit.line",
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#ebe3cd"
                }]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#dfd2ae"
                }]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#b9d3c2"
                }]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#92998d"
                }]
            }
        ],
        mapTypeControlOptions: {
            mapTypeIds: []
        }
    });

    //Create a InfoWindow
    largeInfowindow = new google.maps.InfoWindow();
    //Set each markers
    for (var i = 0; i < locations.length; i++) {
        var position = locations[i].location;
        var title = locations[i].title;
        var marker = new google.maps.Marker({
            position: position,
            title: title,
            animation: google.maps.Animation.DROP,
            map: map,
            id: i,
        });
        // Push the marker to our array of markers.
        markers.push(marker);
        // Create an onclick event to open an infowindow at each marker.
        marker.addListener('click', function() {
            populateInfoWindow(this, largeInfowindow);
        });
    }
    //Add click event for each marker
    for (var j = 0; j < markers.length; j++) {
        $('#' + j).click(function() {
            showMarker($(this).attr("id"));
        });
    }

}

//When click name in siderbar, show the marker specifically
function showMarker(marker_num) {
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0; i < markers.length; i++) {
        if (marker_num == i) {
            bounds.extend(markers[i].position);
            populateInfoWindow(markers[i], largeInfowindow);
        }
    };
    // Extend the boundaries of the map for each marker and display the marker
    map.fitBounds(bounds);
    map.setZoom(14);
}


//When click each marker, show the infowindow
function populateInfoWindow(marker, infowindow) {
    // Check to make sure the infowindow is not already opened on this marker.
    if (infowindow.marker != marker) {
        infowindow.marker = marker;

        //Get google streetview image(it has own error handle )
        var content = '';
        content = '<div>' + marker.title + '</div>';
        var streetViewUrl = 'http://maps.googleapis.com/maps/api/streetview?size=' + image_size + '&location=' + locations[marker.id].location.lat + ',' + locations[marker.id].location.lng + '';
        content += '<img class="mark-img" src="' + streetViewUrl + '">';


        //Error handle for wikipedia
        var wikiRequestTimeout = setTimeout(function(){
            content += '<div>'+'wiki seems not work'+'</div>';
        }, 8000);
        //Get Wikipedia data
        var wikiUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + marker.title + '&format=json&callback=wikiCallback';
        $.ajax({
            url: wikiUrl,
            dataType: "jsonp",
            jsonp: "callback",
            success: function(response) {
                var articleList = response[1];
                //Only show the first article
                articleStr = articleList[0];
                //console.log(articleStr);
                var url = 'http://en.wikipedia.org/wiki/' + articleStr.split(' ').join('_');
                content += '<div><a href=' + url + '>' + 'Wikipedia: ' + articleStr + '</a></div>';
                infowindow.setContent(content);
                infowindow.open(map, marker);
                clearTimeout(wikiRequestTimeout);
            }
        });

        //Show infowindow
        infowindow.setContent(content);
        infowindow.open(map, marker);

        // Make sure the marker property is cleared if the infowindow is closed.
        infowindow.addListener('closeclick', function() {
            infowindow.marker = null;
        });
    }
}



//Use knockout to bind locations data to the list
var viewModel = {
    //show locations in default
    locations: ko.observableArray(locations),
    //show search in default
    query: ko.observable(''),

    search: function(value) {
        viewModel.locations.removeAll();
        var temp_num = 0;
        for (var x in locations) {
            if (locations[x].title.toLowerCase().indexOf(value.toLowerCase()) >= 0) {
                viewModel.locations.push(locations[x]);
                temp_num = locations[x].num;
                markers[x].setMap(map);
                $('#' + temp_num).click(function() {
                    showMarker($(this).attr("id"));
                });
            } else {
                markers[x].setMap(null);
            }
        }
    }
};
viewModel.query.subscribe(viewModel.search);

ko.applyBindings(viewModel);


//Menu click to show the sidebar and hide the sidebar
$(document).ready(function() {
    $('.menu-trigger').click(function() {
        if (!$('.menu-trigger').hasClass('move-menu')) {
            $('.sidebar').addClass('move-sidebar');
            $('.menu-trigger').addClass('move-menu');
        } else {
            $('.menu-trigger').removeClass('move-menu');
            $('.sidebar').removeClass('move-sidebar');
        }
    });
});

//Update the parameter when window resize
$(window).resize(function() {
    map.setCenter(map_center);
    if ($(window).width() <= 768) {
        main_zoom = 11;
        image_size = '150x80';
        font_size = '12px';
        search_font_size = '18px';
    } else {
        if ($(window).width() > 768 && $(window).width() <= 1024) {
            main_zoom = 12;
            image_size = '200x150';
            font_size = '15px';
            search_font_size = '22px';
        } else {
            main_zoom = 13;
            image_size = '200x150';
            font_size = '16px';
            search_font_size = '25px';
        }
    }
    $('.sidebar').css('font-size', font_size);
    $('#reset').css('font-size', font_size);
    $('.search').css('font-size', search_font_size);
    map.setZoom(main_zoom);
});

//Reset buttun use to reset the map
$('#reset').click(function() {
    map.setCenter(map_center);
    map.setZoom(main_zoom);
    $('#search').val('');
    viewModel.locations.removeAll();
    for (var x in locations) {
        viewModel.locations.push(locations[x]);
        markers[x].setMap(map);
        $('#' + x).get(0).addEventListener('click', function() {
            showMarker($(this).attr("id"));
        });
    }
});
