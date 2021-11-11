
let city = 'Kyrgyzstan'

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        city = inp.value;
        go()
        inp.value = ''
    }
})

function go () {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9ea42b98ce29bddfa6694ff56ca97e18`
   
    fetch(URL)
        .then((resp) => { return resp.json() })
        .then(data => {
            const name = document.createElement('h2')
            name.innerHTML = `${data.name}`
            mainInfo.append(name)

            const temp = document.createElement('h3')
            temp.innerHTML = Math.round(data.main.temp - 273) + '&deg'
            mainInfo.append(temp)   
        })
    mainInfo.innerHTML = ''
}
 go ()