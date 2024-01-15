// import {Outlet} from 'react-router-dom';
import AppHeader from "./AppHeader.tsx";
import DiscoverMovies from "../features/movies/components/DiscoverMovies.tsx";

function AppLayout() {
  return (
    <>
      <AppHeader />
      <main>
        {/* <Outlet /> */}
        <DiscoverMovies />
      </main>
    </>
  );
}

export default AppLayout;
