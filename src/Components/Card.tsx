import React from 'react'

type data = {
  id: number
  name: string
  age: number
  img: string
}

type Props = {
  users: data[]
}

const Card: React.FC<Props> = (props) => {
  return (
    <div className="card-container">
      {props.users.map((user: data) => (
        <div className="person-photo" key={user.id}>
          <div className="person-photo-inner">
            <img src={user.img} alt="" />
            <div className="person-info">
              <strong>{user.name}</strong>, {user.age}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card
