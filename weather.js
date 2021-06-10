//Window onload function to get the city,api calls
window.onload = function what(){

	var  city2=sessionStorage.getItem("city");


//Constant to get the api
	const tempDegree= "&units=metric";
	const key = "&appid=64324530610d6e779465dec9dab572b6";
	const api = 'https://api.openweathermap.org/data/2.5/weather?q=';

	getWeatherReport(city2); //Calling getWeatherareport function to get the api & json file

		function getWeatherReport(city){
			var url = api+city+key+tempDegree;
			fetch(url)
			.then(weather =>{
				return weather.json();
			}).then(showWeatherReport);
		}

		//Showing the weather

		function showWeatherReport(weather){
			//By api call changing the place
			var place = document.getElementsByClassName("location")[0];
			place.innerHTML = `${weather.name},${weather.sys.country}`;

			//By api call changing the temperature
			var temperature = document.getElementsByClassName("temp")[0];
			temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

			//By api call changing the minimum & maximum temperature
			var minMaxTemp = document.getElementsByClassName("tempmin_max")[0];
			minMaxTemp.innerHTML = `Min ${Math.floor(weather.main.temp_min)}&deg;C | Max ${Math.ceil(weather.main.temp_max)}&deg;C`;

			//By api call changing the weather condition
			var weatherType = document.getElementById("condition");
			weatherType.innerText = `${weather.weather[0].main}`;

			//By api call changing the icon element
			var iconElement = document.getElementsByClassName("image")[0];
			var icon1 =`${weather.weather[0].icon}`;
			icon1stportion ="http://openweathermap.org/img/wn/";
			iconlastportion ="@2x.png";
			var shape = icon1stportion+icon1+iconlastportion;
			iconElement.src = `${shape}`;
		}
	}