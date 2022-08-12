import PlantsList from '../PlantsList';
import plants from '../../mock/plants';

const Home = () => {
  return (
    <div className='relative'>
      <PlantsList plants={plants} />
    </div>
  );
};

export default Home;
