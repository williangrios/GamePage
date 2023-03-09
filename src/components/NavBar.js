import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <nav>
        <ul className='ul-menu'>
            <li><a className='commom-link' href='#launch'>Launch</a></li>
            <li><a className='commom-link' href='#'>Marketplace</a></li>
            <li><a className='commom-link'>Info</a></li>
            <li><a className='commom-link' href='#roadmap'>Roadmap</a></li>
            <li><a className='commom-link' href='#faq'>FAQ</a></li>
            <li className='play'><a className='play-link' href='#'>Play</a></li>
        </ul>
    </nav>
  )
}

export default NavBar