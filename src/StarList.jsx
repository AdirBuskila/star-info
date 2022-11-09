import { Star } from './Star';

export const StarList = ({ stars }) => {
  return (
    <div className='star-list'>
      <h3>1 AU in KM = 149,598,000 kilometers</h3>
      {stars.map((star) => (
        <Star key={star.starName} star={star} />
      ))}
      <h3>All the Background were made by DALL E 2</h3>
      <h3>
        More can be found{' '}
        <a target={'_blank'} href='https://labs.openai.com/'>
          here
        </a>
      </h3>
    </div>
  );
};
