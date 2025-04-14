import { useEffect, useState } from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card'

const TinderCards = () => {
    const [people, setPeople] = useState([
        { name: "Steve", url: "https://randomuser.me/api/portraits/men/9.jpg" },
        { name: "Elon", url: "https://randomuser.me/api/portraits/men/8.jpg" },
        { name: "Michele", url: "https://randomuser.me/api/portraits/women/76.jpg" },
        { name: "Mary", url: "https://randomuser.me/api/portraits/women/25.jpg" }
    ])

    return (
        <div className='tinderCards'>
            {people.map(person => (
                <h1>{person.name}</h1>
            ))}
        </div>
    )
}

export default TinderCards