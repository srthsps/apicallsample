import React from 'react'
import {useFetch} from './useFetch'
import { Link } from 'react-router-dom'

const Home = () => {

    // https://randomuser.me/api/?requests=10

    const items = useFetch('https://randomuser.me/api/?results=10')

    console.log(items)

    return (
        <div>

            {items.loading ? <span>Loading...</span> : items.data.map(item=>{
                return(
                    <ul key={item.name.first}>
                        <li><Link to={{pathname:`/profile/${item.name.first}`, state:{item}}}>{item.name.first}{" "}{item.name.last}</Link></li>
                    </ul>
                )
            })}
        </div>
    )
}

export default Home
