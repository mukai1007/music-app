import {loader} from '../assets'

const Loader = () => (
  <div className='w-full flex justify-center items-center'>
    <img src={loader} alt='loader' className='w-32 h-32 object-contain'/>
  </div>
);

export default Loader;
