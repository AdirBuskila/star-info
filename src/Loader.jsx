import loadingGif from './assets/loading.gif';

export const Loader = () => {
  return (
    <div className='loader'>
      <img src={loadingGif} alt='loading' />
      <h1>Please wait while the data comes from beyond the stars</h1>
    </div>
  );
};
