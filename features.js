$("#myModal").on('hidden.bs.modal', function (e) { 
  $("#myModal iframe").attr("src", $("#myModal iframe").attr("src")); 
}); 


$(document).ready(function(){

 


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


function myMap () {
  myCenter=new google.maps.LatLng(42.277346, -83.738323);
  var mapOptions= {
    center:myCenter,
    zoom:12, scrollwheel: false, draggable: false,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapOptions);

  var marker = new google.maps.Marker({
    position: myCenter,
  });
  marker.setMap(map);
}

// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
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

// $(".").on("show", function () {
//   alert("works")
//   $("body").addClass("modal-open");
// }).on("hidden", function () {
//   $("body").removeClass("modal-open")
// });



//scroll effect

