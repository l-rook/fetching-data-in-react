import { useState } from 'react'

export default function weatherSearch(props){

    const [city, setCity] = useState('')

    function handleSubmit(e){
        e.preventDefault()

        console.log('handle submit is being called')

        props.fetchData(city)

        setCity('')
    }


    return(
        <section>
            <h2>Search</h2>
            <form action="">
                <label htmlFor="city"></label>
                <input
                    type="text" 
                    id="city" 
                    placeholder="search"
                    value={city}
                    onChange={(e) => setCity(e.target.value)} 
                />
                <button onClick={handleSubmit}>Search Weather</button>
            </form>
        </section>
    )
}