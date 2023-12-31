import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link className={'customFont text-lg text-white md:text-2xl'} to={'/'}>
      TM
      <span
        className={
          'ms-1 items-center rounded-full bg-primaryRed px-2 py-0 pb-1 text-white text-opacity-80'
        }
      >
        DB
      </span>
    </Link>
  );
}
export default Logo;
