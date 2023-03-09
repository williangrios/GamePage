import React from 'react';
import NavBar from './NavBar';
import './Header.css';


function Header() {
  return (
    <header className='box-container'>
        <NavBar/>
        <h1>Crypto Football</h1>
        <p>The world of football is here!!</p>
        <article className='details-banner'>
          <div className='box-details-banner'>
              <p className='title-details'>Free mint at Launch</p>
              <p>Follow the steps:</p>
              <p>1: Follow us in Twitter</p>
              <p>2: Retweet pinned tweet</p>
              <p>3: Follow us in Instagram</p>
              <p>4: Join our Discord</p>
          </div>
          <div className='box-details-banner'>
              <p className='title-details'>Free mint your NFT team (only in launch)</p> 
              <a className='mint-button' href='#launch'>Mint your team/pack</a>
          </div>
        </article>
    </header>
  )
}

export default Header