import { NavLink } from "react-router-dom"
import { navbar } from "../../contexts/Index"
import logo from "../../../public/images/logo/taday.png"

const Header = () => {
    return (
        <header className="bg-background">
            <div className="max-w-7xl mx-auto flex items-center justify-between py-6 px-4 xl:px-0">
                <div className="">
                    <NavLink to={"/"}>
                    <img className="w-20" src={logo} alt="logo" />
                    </NavLink>
                </div>
                <nav>
                    <ul className="flex gap-8">
                        {navbar.map((navItem, index) => {
                            return (
                                <li className="text-base  transition-all ease-in-out duration-200" key={index}>
                                    <NavLink
                                        to={navItem.path}
                                        className={({ isActive }) =>
                                            `px-2 transition-all duration-200 ease-in-out relative  after:content-[''] after:w-0 after:h-[2px] after:bg-text after:absolute after:-bottom-1 after:left-0 after:transition-all after:duration-200 after:ease-in-out hover:after:w-full hover:scale-105  ${isActive ? "text-text font-semibold after:w-full " : "text-text-subtle"
                                            }`
                                        }
                                    >
                                        {navItem.title}
                                    </NavLink></li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </header>
    )

}

export default Header
