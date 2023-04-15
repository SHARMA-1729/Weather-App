const submitButton = document.getElementById('submit');
const cityvalue = document.getElementById('cityname');
const cityName = document.getElementById('city');
const card = document.querySelector('.result');
let SKY = document.getElementById('sky');
let TEMP = document.getElementById('temp');
let WIND = document.getElementById('wind');
let HUMIDITY=document.getElementById('Humidity')
let body = document.getElementById('bg');
let baadal=document.getElementById('ico');

function getWeatherByLocation() {
    API = 'edb9d09bc911e77d9b0916f3ae422c2a';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityvalue.value}&appid=${API}`)

        .then(
            res => res.json()
        )
        .then(data => {
            console.log(data);
            city.innerHTML = data.name;
            SKY.innerHTML = data.weather[0].main;
            TEMP.innerHTML = `Temperature : ${Math.round(data.main.temp-273.15)}°C`;
            WIND.innerHTML = `Wind speed : ${data.wind.speed}Km/hr`;
            HUMIDITY.innerHTML = `Humidity : ${data.main.humidity}%`;
            
            setBackground(SKY.innerHTML);
            seticobaadal(SKY.innerHTML);


        })
}

submitButton.addEventListener('click', getWeatherByLocation);

function setBackground(weather) {
    if (weather === "Rain") {
        body.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('rain.jpg')";
    } else if (weather == "Snow") {
         body.style.background ="linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('snow.jpg')";
    } else if (weather == "Clear") {
        body.style.background ="linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('clear.jpg')";
    } else if (weather == "Clouds") {
        body.style.background ="linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('cloud.jpg')";
    }
  else if (weather == "Haze") {
    body.style.background ="linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('haze.jpg')";
    
  }
else if (weather == "Smoke") {
    body.style.background ="linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('smoke.jpg')";
    
  }
else if (weather == "Mist") {
    body.style.background ="linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('mist.jpg')";
    
  }
  }




  function seticobaadal(weather) {
    if (weather === "Rain") {
       ico.src="rain3.jpg"
    } else if (weather == "Snow") {
        ico.src="snowcloud.png"
    } else if (weather == "Clear") {
        ico.src="clearsun.png"
    } else if (weather == "Clouds") {
        ico.src="bizlecloud.png"
    }
  else if (weather == "Haze") {
    ico.src="mistcloud.webp"
    
  }
else if (weather == "Smoke") {
    ico.src="mistycloudy.png"
    
  }
else if (weather == "Mist") {
    ico.src="mistcloud.webp"
  }
  }





























  window.addEventListener("load", () => {
    clock();
    function clock() {
      const today = new Date();
  
      // get time components
      const hours = today.getHours();
      const minutes = today.getMinutes();
      const seconds = today.getSeconds();
  
      //add '0' to hour, minute & second when they are less 10
      const hour = hours < 10 ? "0" + hours : hours;
      const minute = minutes < 10 ? "0" + minutes : minutes;
      const second = seconds < 10 ? "0" + seconds : seconds;
  
      //make clock a 12-hour time clock
      const hourTime = hour > 12 ? hour - 12 : hour;
  
      // if (hour === 0) {
      //   hour = 12;
      // }
      //assigning 'am' or 'pm' to indicate time of the day
      const ampm = hour < 12 ? "AM" : "PM";
  
      // get date components
      const month = today.getMonth();
      const year = today.getFullYear();
      const day = today.getDate();
  
      //declaring a list of all months in  a year
      const monthList = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
  
      //get current date and time
      const date = monthList[month] + " " + day + ", " + year;
      const time = hourTime + ":" + minute + ":" + second + ampm;
  
      //combine current date and time
      const dateTime = date + " - " + time;
  
      //print current date and time to the DOM
      document.getElementById("date-time").innerHTML = dateTime;
      setTimeout(clock, 1000);
    }
  });
