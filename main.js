$(document).ready(function(){
  $('#get-weather').on('click',function(){
    $('.results').empty();
  
    //getting current position
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(function(position){
      
       var lat = position.coords.latitude
        var long = position.coords.longitude
        // $('.results').append('latitude: '+ lat + '<br>longitude: ' + long);
    
    var url = 'http://api.openweathermap.org/data/2.5/weather?lat='+ lat +'&lon='+ long + '&APPID=623be45a6bb2bb53a9cbc6a34bc0efc0';
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

//temp in Farenheit
farTemp = (kelvinTemp)*(9/5)- 459.67;
//temp in Celcius
celTemp = Math.round(kelvinTemp-273);


          $('.results').append('<img src=' + "http://openweathermap.org/img/w/" + icon + ".png" +  '>' +'<h2>'+ city+'</h2>'+ '<h3>' + main + '</h3>' + '<p>' + desc  + '</p>' + '<p>'+ "local temperature is: " + celTemp + '&deg C'+'</p>');
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
