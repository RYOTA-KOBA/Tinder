import React, { useState } from 'react'
import '../styles/App.scss'
// import data from '../data.json'
import { ImCross } from 'react-icons/im'
import { BsInfoCircleFill } from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai'

const App: React.FC = () => {
  // const [people, setPeople] = useState(data)
  const [activeNo, setActiveNo] = useState(false)
  const [activeLike, setActiveLike] = useState(false)

  const handleNo = () => {
    setActiveNo(true)
    if (activeNo) {
      document
        .querySelector('.person-photo')
        ?.classList.add('dislike-animation')
    }
  }
  const handleLike = () => {
    setActiveLike(true)
    if (activeLike) {
      document.querySelector('.person-photo')?.classList.add('like-animation')
    }
  }

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
          <div className="person-photo">
            <div className="person-photo-inner">
              <img src="https://i.imgur.com/QZuGC10.jpg" alt="" />
              <div className="person-info">
                <strong>Linda</strong>, 25
              </div>
            </div>
          </div>
        </div>
        <div id="control">
          <div className="button no">
            <a href="#" className="trigger" onClick={handleNo}>
              <ImCross className="imcross" />
            </a>
          </div>
          <div className="button info">
            <a href="#" className="trigger">
              <BsInfoCircleFill className="bsinfocirclefill" />
            </a>
          </div>
          <div className="button yes">
            <a href="#" className="trigger" onClick={handleLike}>
              <AiFillHeart className="aifillheart" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
