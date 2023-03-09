import React from 'react'
import  discordIcon from '../assets/icons/discord.png';
import  instagramIcon from '../assets/icons/instagram.png';
import telegramIcon from '../assets/icons/telegram.png';
import twitterIcon from '../assets/icons/twitter.png';
import youtubeIcon from '../assets/icons/youtube.png';
import './SocialMedias.css';

function SocialMedias() {
  return (
    <div className='social-medias'>Follow us:
        <a href='https://www.youtube.com'  target='_blank'><img src={instagramIcon} className='icons' target='_blank' href='#' /></a>
        <a href='https://www.youtube.com'  target='_blank'><img className='icons' src={discordIcon} href='#'  target='_blank'/></a>
        <a href='https://www.youtube.com'  target='_blank'><img className='icons' src={telegramIcon} href='#'  target='_blank'/></a>
        <a href='https://www.youtube.com'  target='_blank'><img className='icons' src={twitterIcon} href='#'  target='_blank'/></a>
        <a href='https://www.youtube.com'  target='_blank'><img className='icons' src={youtubeIcon}/></a>
    </div>
  )
}

export default SocialMedias