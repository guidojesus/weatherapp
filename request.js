const key ='ff3a587b916231176dbbea790b570447';

// const baseURL = 'https://api.openweathermap.org/data/2.5/weather?q=barquisimeto&appid=ff3a587b916231176dbbea790b570447';

// fetch(baseURL)
// .then((data) => {console.log('response',data.json())})
// .catch((error)=>{console.log(error)})

const requestCity = async (city)=>{
    const baseURL = 'https://api.openweathermap.org/data/2.5/weather';
    const query = `?q=${city}&appid=${key}`;

    // make fetch call (promise call)

    const response = await fetch(baseURL+query);

    // promise data 

    const data  = await response.json();
    return data
}

