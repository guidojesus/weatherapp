const searchform = document.querySelector('.search-location');
const cityValue = document.querySelector('.search-location input')
const cityName = document.querySelector('.city-name p')
const cardBody = document.querySelector('.card-body')
const timeImage = document.querySelector('.card-top img')
const cardInfo = document.querySelector('.back-cards')

const cambiarCelcius=(kelvin) => {
    celcius = Math.round(kelvin -273.15)
    return celcius
}

const dayTime = (icon) =>{
    if(icon.includes('d')){
        return true
    } else {
        return false
    }
}
updateweatherApp = (city) =>{
    const nameImage = city.weather[0].icon;
    const iconSrc = `https://openweathermap.org/img/wn/${nameImage}.png`;
    cityName.textContent = city.name;
    cardBody.innerHTML=`
    <div class="card-mid row">
    <div class="col-8 text-center temp">
        <span>${cambiarCelcius(city.main.temp)}&deg;C</span>
    </div>
    <div class="col-4 condition-temp">
        <p class="condition">${city.weather[0].description}</p>
        <p class="high">${cambiarCelcius(city.main.temp_max)}&deg;C</p>
        <p class="low">${cambiarCelcius(city.main.temp_min)}&deg;C</p>
    </div>
</div>

<div class="icon-container card shadow mx-auto">
    <img src="${iconSrc}" alt="">
</div>

<div class="card-botton px-5 py-4 row">
    <div class="col text-center">
        <p>${cambiarCelcius(city.main.feels_like)}&deg;</p>
        <span>Feels like</span>
    </div>
    <div class="col text-center">
        <p>${city.main.humidity}%</p>
        <span>Humidity</span>
    </div>
</div>
    
    
    
    `;

    if(dayTime(nameImage)) {
        console.log('day');
        timeImage.setAttribute('src','img/day_image.svg');
        cityName.classList.add('text-black')
    }
    else{
        console.log('night');
        timeImage.setAttribute('src','img/night_image.svg');
        cityName.classList.add('text-white')
    }

    cardInfo.classList.remove('d-none');
   
}



// add a event Listener to de form

searchform.addEventListener('submit',e => {
    e.preventDefault();
    const citySearched = cityValue.value.trim();
    console.log(citySearched)
    searchform.reset();

    requestCity(citySearched)
      .then((data) => {

        updateweatherApp(data)
          

      })
      .catch((error)=>{console.log(error)})
})