const API_KEY = '53235c5d79734bbd927161153242609'
const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`

async function show(city){
    try {
        const queryString = `&q=${city}`

        const response = await fetch(BASE_URL + queryString)

        const data = await response.json()
        console.log('data: ', data)

        return data
    } catch (error) {
        console.log(error, '<- error in show api call')
    }    
}


export { show }