function setup() {
  var url = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22granary%20square%2C%20kings%20cross%2C%20london%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';
  loadJSON(url, gotWeather);
  resizeCanvas(500,500);
}

var windSpeed = 0;
var windDirection = 0

function gotWeather(data) {
  console.log(data.query.results.channel.wind.speed);
  console.log(data.query.results.channel.wind.direction);
  
  windSpeed = data.query.results.channel.wind.speed;
  windDirection = data.query.results.channel.wind.direction;

}
  


var x = 0; 
var y = windDirection;

function draw(){
  
  x = (windSpeed / 100);
  
  background(100,200,100);
  stroke(0);
  ellipse(x, 100, 50, 50);
  
 //if(y < 30);

  

}