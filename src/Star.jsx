export const Star = ({ star }) => {
  const timeString = (time) => {
    const { hours, minutes, seconds } = time;
    let str = '';
    str += hours > 0 ? `${hours} hours, ` : '';
    str += minutes > 0 ? `${minutes} minutes and ` : '';
    str += seconds > 0 ? `${seconds} seconds` : '';
    return str;
  };

  return (
    <div className='star'>
      <img src={require(`./assets/${star.starName.toLowerCase()}.gif`)} alt='' />
      <div className='star-info'>
        <p>Name: {star.starName}</p>
        <p>Distance KM: {star.distance}</p>
        <p>Distance AU: {star.au}</p>
        <p>Light Travel Time: {timeString(star.time)}</p>
      </div>
    </div>
  );
};
