import { useEffect, useState } from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card'
import db from '../firebase';

const TinderCards = () => {
    // const [people, setPeople] = useState([
    //     { name: "Steve", url: "https://randomuser.me/api/portraits/men/9.jpg" },
    //     { name: "Elon", url: "https://randomuser.me/api/portraits/men/8.jpg" },
    //     { name: "Michele", url: "https://randomuser.me/api/portraits/women/76.jpg" },
    //     { name: "Mary", url: "https://randomuser.me/api/portraits/women/25.jpg" }
    // ])

    const [people, setPeople] = useState([]);

    useEffect(() => {
        db.collection('people').onSnapshot(snapshot => {
            setPeople(snapshot.docs.map(doc => doc.data()))
        })
    },[])

    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
    }

    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
    }

    return (
        <div className='tinderCards'>
            <div className="tinderCards__container">
                {people.map(person => (
                    <TinderCard
                        className='swipe'
                        onSwipe={onSwipe}
                        onCardLeftScreen={() => onCardLeftScreen(person.name)}
                        preventSwipe={['up', 'down']}
                    >
                        <div style={{ backgroundImage: `url(${person.url})` }} className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards