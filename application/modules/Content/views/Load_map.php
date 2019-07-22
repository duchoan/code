
<style>

</style>
<script>
    var infowindow;
    function initialize() {

        var mapOptions = {
            zoom: <?php echo $zoom ;?>,
            center: new google.maps.LatLng(<?php if(!empty($location)){echo $location;}else{echo '14.177834,108.4414900000';}?>),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
        setMarkers(map, beaches, message);

    }
    var beaches = [<?php if(!empty($office)){foreach ($office as $of){ ?>['',<?php echo $of->location ;?>,1],<?php } }?>];
    var message = [<?php if(!empty($office)){foreach ($office as $of){ ?>'<div class=dealer_info><div class=img><img src="<?php echo $of->image ;?>" /></div><div class=info><h3><?php echo $of->title ;?></h3><p><?php echo $of->phone ;?></p><p><?php echo $of->email ;?></p></div></div>',<?php } }?>];
    function setMarkers(map, locations, message) {

        var image = {
            url: '<?php echo base_url();?>skin/frontend/images/icon_place.png',
            size: new google.maps.Size(26, 37),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(0, 32)
        };

        var shadow = {
            url: '<?php echo base_url();?>skin/frontend/images/icon_place.png',
            size: new google.maps.Size(26, 38),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(0, 32)
        };

        var shape = {
            coord: [1, 1, 1, 20, 18, 20, 18, 1],
            type: 'poly'
        };

        infowindow = new google.maps.InfoWindow();

        for (var i = 0; i < locations.length; i++) {

            var beach = locations[i];
            var myLatLng = new google.maps.LatLng(beach[1], beach[2]);
            var marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                title: beach[0],
                zIndex: beach[3]
            });


            infowindow = new google.maps.InfoWindow();
            attachSecretMessage(marker, i, message);

        }

    }

    function attachSecretMessage(marker, num, message) {
        google.maps.event.addListener(marker, 'click', function () {
            infowindow.setContent(message[num]);

            infowindow.open(marker.get('map'), marker);
        });
    }

    initialize();
</script>