$(document).ready(function(){
  $('#get-weather').on('click',function(){
    $('.results').empty();
    $('.date').empty();
  
    //getting current position
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(function(position){
        var lat = position.coords.latitude
        var long = position.coords.longitude
        // $('.results').append('latitude: '+ lat + '<br>longitude: ' + long);
    
    var url = 'https://api.openweathermap.org/data/2.5/weather?lat='+ lat +'&lon='+ long + '&APPID=623be45a6bb2bb53a9cbc6a34bc0efc0';
    // requesting AJAX from openWeatherapp 
    $.ajax({
      url: url,
      method: 'GET',
      })
    //success
    .done(function(data){
      var icon = data.weather[0].icon,
          desc = data.weather[0].description,
          main = data.weather[0].main,
          windSpeed = data.wind.speed,
          city = data.name
          kelvinTemp = data.main.temp;

      //icon map (js dictionary)
      var iconMap = new Map();
      iconMap.set('10d', '.sun-shower');
      iconMap.set('10n', '.sun-shower');
      iconMap.set('09d', '.rainy');
      iconMap.set('09n', '.rainy');
      iconMap.set('01d', '.sunny');
      iconMap.set('01n', '.sunny');
      iconMap.set('02d', '.cloudy');
      iconMap.set('02n', '.cloudy');
      iconMap.set('03d', '.cloudy');
      iconMap.set('03n', '.cloudy');
      iconMap.set('04d', '.cloudy');
      iconMap.set('04n', '.cloudy');
      iconMap.set('11d', '.thunder-storm');
      iconMap.set('11n', '.thunder-storm');
      iconMap.set('13d', '.flurries');
      iconMap.set('13n', '.flurries');
      //  iconMap.set('50d', '.misty');
      //  iconMap.set('50n', '.misty');

      //temp in Farenheit
      farTemp = (kelvinTemp)*(9/5)- 459.67;
      //temp in Celcius
      celTemp = Math.round(kelvinTemp-273.15);

      $('.results').append('<h2>'+ city+'</h2>'+ '<h3>' + main + '</h3>' + '<p>' + desc  + '</p>' + '<p>'+ "local temperature is: " + celTemp + '&deg C'+'</p>');
      $(iconMap.get(icon)).removeClass('hidden');
    });// done data

  });
      
};
//to show the current time and date
var current = $.now();
var maxDate = new Date(current);
var currentDate = maxDate.toDateString();
$('.date').append('<p>'+ currentDate + '</p>');
  });// end of on click 

}); //end of document ready
