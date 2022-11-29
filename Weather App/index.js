// JavaScript Part
const inputArea = document.querySelector('.inputValue');
const inputButton = document.querySelector('.button');
const cityName = document.querySelector('.name');
const cityTemp = document.querySelector('.temp');
const cityDesc = document.querySelector('.desc');
const cityHumid = document.querySelector('.humid');
const citywind = document.querySelector('.wind');


inputButton.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputArea.value+'&appid=50a7aa80fa492fa92e874d23ad061374')
    .then(response=> response.json())
    .then(data => {
        const tempValue = data['main']['temp'];
        const nameValue = data['name'];
        const descValue = data['weather'][0]['description'];
        const humidValue = data['main']['humidity'];
        const windValue = data['wind']['speed'];

        cityName.innerHTML = "City : " + nameValue;
        cityTemp.innerHTML = tempValue + " Kelvin";
        cityDesc.innerHTML = "Description : " + descValue;
        cityHumid.innerHTML = "Humid : " + humidValue;
        citywind.innerHTML = "Wind : " + windValue;

        inputArea.value ="";
    })
    .catch(err=> "Could not find a City name like this.")
});