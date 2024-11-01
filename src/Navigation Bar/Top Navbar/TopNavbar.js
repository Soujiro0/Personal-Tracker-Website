import logo from "../../Assets/Images/SENNEN logo s white 2.png";
import "../../index.css";
import "./TopNavbar.css";

const TopNavbar = () => {
    return(
        <>
            <nav className="bg-accent flex flex-align-center flex-just-cont-space-between p-10">
                <img className="icon-size" src={logo} alt="logo" />
                <div className="flex flex-item-center gap-10">
                    <div className="icon-size circle bg-white flex flex-item-center">
                        <svg className="icon-size-s" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z" fill="#2894FA"></path> <path d="M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z" fill="#2894FA"></path> </g></svg>
                    </div>
                    <svg className="icon-size-s" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7l6 6 6-6"></path> </g></svg>    
                </div>
            </nav>
        </>
    );
}

export default TopNavbar; 