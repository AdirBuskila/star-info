import { useEffect, useState } from 'react';
import { StarList } from './StarList';
import { Loader } from './Loader';
import { httpService } from './http.service';

export const StarInfo = () => {
  const [stars, setStars] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('api/star-info');
      const data = await response.json();
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
