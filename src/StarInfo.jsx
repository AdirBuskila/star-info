import { useEffect, useState } from 'react';
import { StarList } from './StarList';
import { Loader } from './Loader';
import { starService } from './star.service';

export const StarInfo = () => {
  const [stars, setStars] = useState([]);

  const fetchData = async () => {
    try {
      const data = await starService.query();
      console.log('data :>> ', data);
      setStars(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='star-info'>
      {stars.length > 0 && <StarList stars={stars} />}
      {stars.length === 0 && <Loader />}
    </div>
  );
};
