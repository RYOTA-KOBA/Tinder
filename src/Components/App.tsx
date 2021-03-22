import React, { useState, useEffect } from 'react'
import '../styles/App.scss'
import data from '../data.json'
import { ImCross } from 'react-icons/im'
import { BsInfoCircleFill } from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai'
import TinderCards from './TinderCards'

type data = {
  id: number
  name: string
  age: number
  img: string
}

const App: React.FC = () => {
  const [activeNo, setActiveNo] = useState(false)
  const [activeLike, setActiveLike] = useState(false)
  const [users, setUsers] = useState<data[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentId, setCurrentId] = useState(data.length)
  // const [loading, setLoading] = useState(false)
  // const removedCard = [];

  const nextUser = () => {
    const nextIndex = users.length - 2 === currentIndex ? 0 : currentIndex + 1
    setCurrentIndex(nextIndex)
  }

  const handleNo = (id: number) => {
    // setLoading(true)
    setActiveNo(true)
    setCurrentId(currentId - 1)
    nextUser()
    if (activeNo) {
      document.querySelector(`#user-${id}`)?.classList.add('dislike-animation')
      // setLoading(false)
    }
  }
  const handleLike = (id: number) => {
    // setLoading(true)
    setActiveLike(true)
    setCurrentId(currentId - 1)
    nextUser()
    if (activeLike) {
      document.querySelector(`#user-${id}`)?.classList.add('like-animation')
      // setLoading(false)
    }
  }

  // console.log(loading)

  useEffect(() => {
    setUsers(data)
  }, [])

  return (
    <div id="phone">
      <div id="app">
        <div className="header">
          <div className="top">
            <span className="left">
              <span className="fontawesome-circle"></span>
              <span className="fontawesome-circle"></span>
              <span className="fontawesome-circle-blank"></span>
              <a href="http://rena.to" target="_blank">
                rena.to
              </a>
              <span className="fontawesome-signal"></span>
            </span>
            <span className="center clock"></span>
            <span className="right">
              <span>75%</span>
              <div id="battery"></div>
              <span className="fontawesome-bolt"></span>
            </span>
          </div>
        </div>
        <div id="people">
          {users.length !== 0 && <TinderCards users={users} />}
          <h1 style={{ textAlign: 'center' }}>Empty!!</h1>
        </div>
        <div id="control">
          <div className="button no">
            <button
              className="trigger"
              onClick={() => handleNo(currentId)}
              // disabled={loading ? true : false}
            >
              <ImCross className="imcross" />
            </button>
          </div>
          <div className="button info">
            <a className="trigger">
              <BsInfoCircleFill className="bsinfocirclefill" />
            </a>
          </div>
          <div className="button yes">
            <button
              className="trigger"
              onClick={() => handleLike(currentId)}
              // disabled={loading ? true : false}
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
