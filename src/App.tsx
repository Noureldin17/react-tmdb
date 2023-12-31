import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        { path: "/", element: <div></div> },
        { path: "/movies", element: <div></div> },
        { path: "/tvshows", element: <div></div> },
        { path: "/people", element: <div></div> },
        { path: "/login", element: <div></div> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
