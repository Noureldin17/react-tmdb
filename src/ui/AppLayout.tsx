import {Outlet} from 'react-router-dom';
import AppHeader from "./AppHeader.tsx";

function AppLayout() {
  return (
    <>
      <AppHeader />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
