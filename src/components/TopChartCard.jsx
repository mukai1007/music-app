import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';


const TopChartCard = ({ song, i }) => {

    const dispatch = useDispatch();
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const { data } = useGetTopChartsQuery();

    const handlePauseClick = () => {
        dispatch(playPause(false));
      };
    
      const handlePlayClick = (song, i) => {
        dispatch(setActiveSong({ song, data, i }));
        dispatch(playPause(true));
      };

    return (
        <div className={`w-full flex flex-row items-center hover:bg-[#4c426e] ${activeSong?.title === song?.title ? 'bg-[#4c426e]' : 'bg-transparent'} py-2 p-4 rounded-lg cursor-pointer mb-2`}>
            <h3 className="font-bold text-base text-white mr-3">{i + 1}.</h3>
            <div className="flex-1 flex flex-row justify-between items-center">
                <img className="w-20 h-20 rounded-lg" src={song?.images?.coverart} alt={song?.title} />
                <div className="flex-1 flex flex-col justify-center mx-3">
                    <Link to={`/songs/${song.key}`}>
                        <p className="text-xl font-bold text-white">
                            {song?.title}
                        </p>
                    </Link>
                    <Link to={`/artists/${song?.artists[0].adamid}`}>
                        <p className="text-base text-gray-300 mt-1">
                            {song?.subtitle}
                        </p>
                    </Link>
                </div>
            </div>
            <PlayPause
                isPlaying={isPlaying}
                activeSong={activeSong}
                song={song}
                handlePause={handlePauseClick}
                handlePlay={() => handlePlayClick(song, i)}
            />
        </div>
    )
};

export default TopChartCard