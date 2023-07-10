const url = 'https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '130f2ed792msha258969442564b4p195c0djsnaa53fd871984',
		'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
	}
};
const getAQI = (city) => {
    cityname.innerHTML = city;
    fetch("https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=" + city , options)
.then(response => response.json())
.then(response => showInfo(response))
.catch(err => console.error(err));
}


function showInfo(response) {
    overall_aqi.innerHTML = response.overall_aqi;
};

submit.addEventListener("click", (e) => {
    e.preventDefault();
    getAQI(city.value);

})

getAQI("Kolkata");