const key = 'w1bhlGDLgLjXGCotZIoYt09m7TK0WHsF';

// Get current weather
const getWeather = async (id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const res = await fetch(base + query);
    const data = await res.json();

    return data[0];
}

// Get city info
const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const res = await fetch(base + query);
    const data =  await res.json();

    return data[0];
};
