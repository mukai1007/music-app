import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';
import 'swiper/css';
import 'swiper/css/free-mode';
import TopChartCard from './TopChartCard';
import {AiOutlineRight} from 'react-icons/ai'


const TopPlay = () => {

  const { data } = useGetTopChartsQuery();

  const topPlays = data?.slice(0, 5);

  return (
    <div className="xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex flex-col">
      <div className="w-full flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-bold text-2xl">#Топ-5 Чарты</h2>
          <Link to="/top-charts">
            <p className="flex justify-center items-center text-gray-300 text-base cursor-pointer">Смотрет все<AiOutlineRight/></p>
          </Link>
        </div>

        <div className="mt-4 flex flex-col gap-1">
          {topPlays?.map((song, i) => (
            <TopChartCard
              key={song.key}
              song={song}
              i={i}
            />
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col mt-8">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-bold text-2xl">#Топ-5 Певцы</h2>
          <Link to="/top-artists">
          <p className="flex justify-center items-center text-gray-300 text-base cursor-pointer">Смотрет все<AiOutlineRight/></p>
          </Link>
        </div>

        <Swiper
          slidesPerView="auto"
          spaceBetween={15}
          freeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          className="mt-4"
        >
          {topPlays?.slice(0, 5).map((artist) => (
            <SwiperSlide
              key={artist?.key}
              style={{ width: '25%', height: 'auto' }}
              className="shadow-lg rounded-full animate-slideright"
            >
              <Link to={`/artists/${artist?.artists[0].adamid}`}>
                <img src={artist?.images?.background} alt="Name" className="rounded-full w-full object-cover" />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopPlay;