import Logo from './Logo.tsx';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import { useClickOutside } from '@mantine/hooks';

function AppHeader() {
  const [isActive, setIsActive] = useState(false);
  // const ref = useClickOutside(() => setIsActive(false));
  return (
    <div
      // ref={ref}
      className={
        'z-10 md:nav-gradient top-0 select-none fixed flex flex-col justify-between bg-primaryDark  md:border-b-2 md:border-b-secondaryDark'
      }
    >
      <header
        className={
          'flex w-screen transform items-center justify-between p-3 tracking-[2px] transition-transform duration-300 ease-linear bg-primaryDark'
        }
      >
        <Logo />
        <span
          className={
            'hidden md:flex md:h-fit md:w-[50vw] md:items-center md:justify-evenly'
          }
        >
          <NavLinks styleClass="md:nav-link" />
        </span>
        {isActive ? (
          <>
            <svg
              className={'z-20 text-3xl md:hidden'}
              onClick={() => setIsActive(false)}
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              width="20"
              viewBox="0 0 384 512"
            >
              <path
                fill="#ffffff"
                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
              />
            </svg>
          </>
        ) : (
          <svg
            className={'z-20 text-3xl md:hidden'}
            onClick={() => setIsActive(true)}
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            width="20"
            viewBox="0 0 448 512"
          >
            <path
              fill="#ffffff"
              d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
            />
          </svg>
        )}
      </header>
      {isActive ? (
        <div
          className={
            'flex h-[15rem] flex-col items-center justify-evenly bg-primaryDark tracking-[2px] md:hidden'
          }
        >
          <NavLinks styleClass="nav-small" />
        </div>
      ) : null}
    </div>
  );
}

function NavLinks(props: { styleClass: string }) {
  return (
    <>
      <NavLink
        className={
          props.styleClass +
          ' w-[30%] text-center text-sm font-normal text-linkPrimary hover:text-white md:w-fit'
        }
        to={'/movies'}
      >
        Movies
      </NavLink>
      <NavLink
        className={
          props.styleClass +
          ' w-[30%] text-center text-sm font-normal text-linkPrimary hover:text-white md:w-fit'
        }
        to={'/tvshows'}
      >
        Tv Shows
      </NavLink>
      <NavLink
        className={
          props.styleClass +
          ' w-[30%] text-center text-sm font-normal text-linkPrimary hover:text-white md:w-fit'
        }
        to={'/people'}
      >
        People
      </NavLink>
      <NavLink
        className={
          'transform rounded-[10px]  bg-primaryRed px-4 py-1.5 text-sm font-normal text-linkPrimary duration-300 hover:bg-redButtonHover hover:text-white active:scale-90'
        }
        to={'/login'}
      >
        Login
      </NavLink>
    </>
  );
}

export default AppHeader;
