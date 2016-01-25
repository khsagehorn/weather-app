$(document).ready(function() {
 
  $.ajax({
    async: true,
    crossDomain: true,
    url: "https://api.ipify.org/?format=json/?callback=?",
    success: function(response) {
      $("#div1").text(response);
      getWeather($("#location-input").val());
    }
  });

  $("#submit").on("click", function(event){
    event.preventDefault();
    var location = $("#location-input").val();
    getWeather(location);
  });
});

function getWeather(location) {
  var baseURL = "http://api.openweathermap.org/data/2.5/weather?q=";
  var apiKey = "&appid=11b4e2aa51067d3162de79fbcd05ee80";
  $.ajax({
    url: baseURL + location + apiKey,
    success: function(json) {
      $("#description").html(json.weather[0].description);
      $("#lat").html(json.coord.lat);
      $("#long").html(json.coord.lon);
      $("#temp").html(Math.round((json.main.temp - 273.15)*1.8) + 32);
      $("#city").html(location);

      var weather = json.weather[0].main;
      console.log(weather);

      changeBackground(weather);

    }
  });
}

function changeBackground(weather) {
  console.log(weather);

  // var background = $("#body").css("background-image", )
  switch (weather) {
    case "Snow": 
      $("#body").css("background-image", "url(http://wallpaperrs.com/uploads/3d-abstract/snowflakes-wide-wallpaper-13508.jpg)");
      break;
    case "Clouds": 
      $("#body").css("background-image", "url(https://upload.wikimedia.org/wikipedia/commons/a/a3/Overcast_skies_from_Tropical_Storm_Danny.jpg)");
        break;
    case "Rain":
      $("#body").css("background-image", "url(http://applehdwallpaper.com/wp-content/uploads/Rain-HD-Wallpapers.jpg)");
        break;
    case "Clear":
      $("#body").css("background-image", "url(http://www.torange.us/photo/20/16/Clear-sky-1363594685_18.jpg)");
        break;

  }
}




