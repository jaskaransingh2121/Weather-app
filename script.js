const API_KEY = "fe2e55796427382d67336f01a123953a";

document.getElementById("getweather").addEventListener("click", ()=>{
    let city = document.getElementById("input").value
    if(city === ""){
        alert("Please Enter City Name!")
        return;
    }
    getweather(city)
})
function getweather(city){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    .then(Response=>{
        if(!Response.ok){
            throw new Error("City Not Found")
        }
        return Response.json()
    })
    .then(data=>{
        displayweather(data)
    })
    .catch(error=>{
        document.getElementById("result").innerHTML = `<p>${error.message}</p>`
    })

    function displayweather(data){
        let weatherdiv = document.getElementById("result")
        weatherdiv.innerHTML = 
        `<h3>${data.name}, ${data.sys.country}</h3>
    <p>🌡 Temperature: ${data.main.temp}°C</p>
    <p>☁ Weather: ${data.weather[0].description}</p>
    <p>💧 Humidity: ${data.main.humidity}%</p>`
    }
}