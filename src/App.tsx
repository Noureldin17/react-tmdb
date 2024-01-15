import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TvShows from "./pages/TvShows";
import People from "./pages/People";
import Login from "./pages/Login";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        { path: "/", element: <Home/> },
        { path: "/movies", element: <Movies/> },
        { path: "/tvshows", element: <TvShows/> },
        { path: "/people", element: <People/> },
        { path: "/login", element: <Login/>},
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
