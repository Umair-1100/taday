import { createBrowserRouter, NavLink, RouterProvider } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Features from "./pages/Features"
import Error from "./pages/Error"

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/features",
          element: <Features />
        },
        {
          path: "/contact",
          element: <Contact />
        },
      ]
    }
  ])


  return (
    <RouterProvider router={router} />
  )
}

export default App
