import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'
import { AiFillCloseCircle } from 'react-icons/ai'

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
  const [isOpen, setIsOpen] = useState<Boolean>(false)

  const handleClickOpen = () => {
    setIsOpen(true)
  }
  const handleClickClose = () => {
    setIsOpen(false)
  }

  return (
    <div className="card-container">
      {props.users.map((user: data) => (
        <div className="person-photo" id={`user-${user.id}`} key={user.id}>
          <TinderCard
            preventSwipe={['up', 'down']}
            onSwipe={() => {
              props.setCurrentId((currentId: number) => currentId - 1)
              // setIsOpen(false)
            }}
          >
            <div className="person-photo-inner">
              <img src={user.img} alt="" />
              <div className="person-info" onClick={handleClickOpen}>
                <strong>{user.name}</strong>, {user.age}
              </div>
            </div>
            <div className={isOpen ? 'modal-info' : 'modal-info-hide'}>
              <div className="modal-info-inner">
                <AiFillCloseCircle
                  className="closeicon"
                  onClick={handleClickClose}
                />
                <p>Name: {user.name}</p>
                <p>Age: {user.age}</p>
              </div>
            </div>
          </TinderCard>
        </div>
      ))}
    </div>
  )
}

export default TinderCards
