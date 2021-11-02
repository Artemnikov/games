window.addEventListener('load', () => {
    let long
    let lat
    const temperatureDescription = document.querySelector('.temperature-description');
    const temperatureDegree = document.querySelector('.temperature-degree');
    const timezoneDesc = document.querySelector('.location-timezone')
    const icon = document.querySelector('.imgs');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude
            lat = position.coords.latitude
            const icon = document.querySelector('.imgs');
            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,munutely&units=metric&appid=b190a0605344cc4f3af08d0dd473dd25
            `)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data)
                    update(data)
                })
                .catch( () => {
                    console.log('error')
                })
        })
    
    }
    function update (data) {
        timezoneDesc.innerHTML = data.timezone
        temperatureDegree.innerHTML = data.current.temp
        icon.src = `http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`
    }
})