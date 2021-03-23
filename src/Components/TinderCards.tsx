import React from 'react'
import TinderCard from 'react-tinder-card'

type data = {
  id: number
  name: string
  age: number
  img: string
}

type Props = {
  users: data[]
  currentId: number
  setCurrentId: (value: React.SetStateAction<number>) => void
}

const TinderCards: React.FC<Props> = (props) => {
  return (
    <div className="card-container">
      {props.users.map((user: data) => (
        <div className="person-photo" id={`user-${user.id}`} key={user.id}>
          <TinderCard
            preventSwipe={['up', 'down']}
            onSwipe={() =>
              props.setCurrentId((currentId: number) => currentId - 1)
            }
          >
            <div className="person-photo-inner">
              <img src={user.img} alt="" />
              <div className="person-info">
                <strong>{user.name}</strong>, {user.age}
              </div>
            </div>
          </TinderCard>
        </div>
      ))}
    </div>
  )
}

export default TinderCards
