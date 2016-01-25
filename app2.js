$(document).ready(function() {
 
  $.ajax({
    async: true,
    crossDomain: true,
    url: "https://api.ipify.org/?format=json/?callback=?",
    success: function(response) {
      $("#div1").text(response);
    }
  });

  $("#submit").on("click", function(event){
    event.preventDefault();
  });

      $.ajax({
      url: "http://api.openweathermap.org/data/2.5/weather?q=denver,co&appid=11b4e2aa51067d3162de79fbcd05ee80",
      success: function(json) {
        $("#div2").html(json.weather[0].description);
        $("#lat").append("Latitude: ", json.coord.lat);
        $("#long").append("Longitude: ", json.coord.lon);
      }
    });
  });