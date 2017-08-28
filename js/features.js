
$(document).ready(function(){

  //Stop Youtube Video from playing after closing modal
    $('.w3-modal').each(function(){
            var src = $(this).find('iframe').attr('src');

        $(this).on('click', function(){

            $(this).find('iframe').attr('src', '');
            $(this).find('iframe').attr('src', src);

        });
    });

  //Smooth Scrolling
   $('#homenav').click(function() {

    $('html,body').animate({
      scrollTop: $("#home").offset().top - 40}, 
      '1000'
    ); 
    return false;
  });

  $('#aboutnav').click(function() {

    $('html,body').animate({
      scrollTop: $("#about").offset().top - 40}, 
      '1000'
    );
    return false;
  });

  $('#projectnav').click(function() {

    $('html,body').animate({
      scrollTop: $("#projects").offset().top - 40}, 
      '1000'
    );
    return false;
  });

   $('#contactnav').click(function() {

    $('html,body').animate({
      scrollTop: $("#contact").offset().top - 40}, 
      '1000'
    );
    return false;
  });
  
});

//Google Maps API
function myMap () {
  myCenter=new google.maps.LatLng(42.277346, -83.738323);
  var mapOptions= {
    center:myCenter,
    zoom:12, scrollwheel: false, 
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapOptions);

  var marker = new google.maps.Marker({
    position: myCenter,
  });
  marker.setMap(map);
}


// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
   
        navbar.className = "w3-bar" + " w3-card-2" + " w3-animate-top" + " w3-white";
    } else {
      
        navbar.className = navbar.className.replace(" w3-card-2 w3-animate-top w3-white", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}


