import React from 'react';
import { FaFacebook, FaFacebookMessenger, FaGooglePlus, FaInstagram, FaTwitter, FaWhatsapp, FaYahoo } from 'react-icons/fa';
import webLogo from '../../../assets/Logo/navLogo.png'
const Footer = () => {
    return (
        <div className='Footer bg-black text-white mt-7 rounded-3xl'>
          
        <div className=' bg-black mt-7 rounded-3xl p-7 grid md:grid-cols-5 gap-2 text-center md:text-left'>
        <section className='findSection text-2xl'>
              <h2>Find Us</h2>
              <div className="ICON flex gap-4 mt-5 text-3xl justify-center md:justify-start ">

                  <a href='https://www.facebook.com/suvrodev.1122' target='_blank'> <FaFacebook/> </a>
                  <FaTwitter/>
                  <FaWhatsapp/>
                  <FaGooglePlus/>
                  <FaInstagram/>
              </div>
          </section>

          <section className='mostSold'>
              <h2 className='text-2xl'>Criteria for join our champ</h2>
              <p>Age Range under 15</p>
              <p>Have to Focus on Program</p>
              <p>Have to main schedule</p>
              <p>Have to maintain time</p>
              <p>Have to dedicated</p>
              
              
          </section>

          <section className='address'>
              <h2 className='text-2xl'>Address</h2>
              <p> KDA Avenue,Khulna  Bangladesh</p>
              <small className='text-green-500'>Open: <span className='ms-2 font-bold text-yellow-400'>All Time</span> </small>

          </section>

          <section className='category'>
              <h2 className='text-2xl'>Our Classes</h2>
              <p>Rabindra Sangeet</p>
              <p>Nazrul Geeti</p>
              <p>Lalon Geeti</p>
              <p>Baul Gaan</p>
              <p>Shyama Sangeet</p>
              <p>Follk</p>
          </section>

          <section className='category'>
              <h2 className='text-2xl'>Contact with us</h2>
              <p className='flex items-center justify-center md:justify-start gap-2'> <span> <FaYahoo/></span><span> suvrodev.cse@yahoo.com </span></p>
              <p className='flex items-center  justify-center md:justify-start gap-2'> <span><FaWhatsapp/> </span> <span>01518748081</span> </p>
              <p className='flex items-center  justify-center md:justify-start gap-2'> <span><FaFacebookMessenger/></span> <span> <a href='https://www.facebook.com/suvrodev.1122' target='_blank' >Suvrodeb</a></span> </p>
          </section>
        </div>

        <div>
          <div className='bg-black flex flex-col items-center justify-center md:flex-row'>
              <img className='w-44' src={webLogo} alt="" />
              <h1 className='text-4xl webName'>SunnySkiesAcademy</h1>
          </div>
          <div className='bg-black text-center'>
              <small className='font-bold mt-5'> Copyright <span>©</span> Suvrodeb Howlader 2023 </small>
          </div>
        </div>
         
          
      </div>
    );
};

export default Footer;