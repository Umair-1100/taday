import { Outlet } from "react-router-dom"
import Header from "../components/common/Header"
import Footer from "../components/common/Footer"
import Copyright from "../components/common/Copyright"


const MainLayout = () => {
  return (
       <>
        <Header/>
        <Outlet/>
        <Footer/>
        <Copyright/>
       </>
  )
}

export default MainLayout
