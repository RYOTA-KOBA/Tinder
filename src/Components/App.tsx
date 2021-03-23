import React, { useState, useEffect } from 'react'
import '../styles/App.scss'
import data from '../data.json'
import { ImCross } from 'react-icons/im'
import { BsInfoCircleFill, BsCircle, BsCircleFill } from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai'
import TinderCards from './TinderCards'

type data = {
  id: number
  name: string
  age: number
  img: string
}

const App: React.FC = () => {
  const [users, setUsers] = useState<data[]>([])
  const [currentId, setCurrentId] = useState<number>(data.length - 1)
  const [time, setTime] = useState<string>('')

  const displayTime = () => {
    const date = new Date()
    const getHours = toDoubleDigits(date.getHours())
    const getMunites = toDoubleDigits(date.getMinutes())
    const display: string = `${getHours} : ${getMunites}`
    setTime(display)
  }

  const toDoubleDigits = (num: any) => {
    num += ''
    if (num.length === 1) {
      num = '0' + num
    }
    return num
  }

  const handleNo = (id: number) => {
    handleSwipe()
    console.log(currentId)
    document.querySelector(`#user-${id}`)?.classList.add('dislike-animation')
  }
  const handleLike = (id: number) => {
    handleSwipe()
    console.log(currentId)
    document.querySelector(`#user-${id}`)?.classList.add('like-animation')
  }

  const handleSwipe = () => {
    setCurrentId(currentId - 1)
  }

  useEffect(() => {
    setUsers(data)
    setInterval(() => {
      displayTime()
    }, 1000)
  }, [])

  return (
    <div id="phone">
      <div id="app">
        <div className="header">
          <div className="top">
            <span className="left">
              <BsCircleFill />
              <BsCircleFill />
              <BsCircleFill />
              <BsCircle />
              <a href="#" target="_blank">
                phone
              </a>
              <span className="fontawesome-signal"></span>
            </span>
            <span className="center clock">{time}</span>
            <span className="right">
              <span>75%</span>
              <div id="battery"></div>
              <span className="fontawesome-bolt"></span>
            </span>
          </div>
        </div>
        <div id="people">
          {users.length !== 0 && (
            <TinderCards
              users={users}
              currentId={currentId}
              setCurrentId={setCurrentId}
            />
          )}
          <h3 style={{ textAlign: 'center', width: '80%', margin: 'auto' }}>
            全てのユーザーを表示しました。さらに表示したい場合は時間を置いてから再びお試しください。
          </h3>
        </div>
        <div id="control">
          <div className="button no">
            <button
              className="trigger"
              onClick={() => handleNo(currentId)}
              disabled={currentId <= -1 ? true : false}
            >
              <ImCross className="imcross" />
            </button>
          </div>
          <div className="button info">
            <a>
              <BsInfoCircleFill className="bsinfocirclefill" />
            </a>
          </div>
          <div className="button yes">
            <button
              className="trigger"
              onClick={() => handleLike(currentId)}
              disabled={currentId <= -1 ? true : false}
            >
              <AiFillHeart className="aifillheart" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
