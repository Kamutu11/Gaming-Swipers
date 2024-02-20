import './App.css'

import { Navigation, Pagination, Autoplay, A11y, EffectFade } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';


const App = () => {
  return(
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y, EffectFade]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2500 }}
        pagination={{ clickable: true }}
        effect='fade'
      >
        <SwiperSlide>
          <div className='card'>
            <img src='/call-of-duty.jpg' alt='gamePoster'/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card'>
            <img src='/cyberpunk-2077.jpg' alt='gamePoster' title='cyberpunk 2077'/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card'>
            <img src='/fortnite.jpg' alt='gamePoster' title='fortnite'/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card'>
            <img src='/gta-5.jpg' alt='gamePoster' title='gta'/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card'>
            <img src='/halo.jpg' alt='gamePoster' title='halo'/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card'>
            <img src='/mortal-kombat.jpg' alt='gamePoster' title='mortal kombat'/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card'>
            <img src='/pubg.jpg' alt='gamePoster' title='PUBG'/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='card'>
            <img src='/valorant.jpg' alt='gamePoster' title='valorant'/>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default App