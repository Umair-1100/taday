import { Outlet } from "react-router-dom"
import Header from "../components/common/Header"
import Footer from "../components/common/Footer"


const MainLayout = () => {
  return (
       <>
        <Header/>
        <Outlet/>
        <Footer/>
       </>
  )
}

export default MainLayout
