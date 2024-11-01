import { NavLink, Outlet } from "react-router-dom";
import '../../index.css';
import './SideNavbar.css';

const tabButtonDesign = "flex flex-col flex-just-cont-center align-items-center text-deco-none trans-5s-ease";


const SideNavbar = () => {
    return(
        <>
            <nav className="nav-size flex flex-col flex-just-cont-center align-items-start">
                <ul className="bg-white border-r-right p-10">
                    <li className="p-10">
                        <NavLink to="../../Dashboard" className={({ isActive }) => isActive ? `${tabButtonDesign} active` : `${tabButtonDesign} inactive`}>
                            <svg className="icon-size" width="40" height="40" fill="#CBCBCB" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="dashboard" class="icon glyph" stroke="#CBCBCB"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CBCBCBCCCCC" stroke-width="1.44"></g><g id="SVGRepo_iconCarrier"><rect x="2" y="2" width="9" height="11" rx="2"></rect><rect x="13" y="2" width="9" height="7" rx="2"></rect><rect x="2" y="15" width="9" height="7" rx="2"></rect><rect x="13" y="11" width="9" height="11" rx="2"></rect></g></svg>
                            <h1 className="text-s">Dashboard</h1>
                        </NavLink>
                    </li>
                    <li className="p-10">
                        <NavLink to="../../Manage Task" className={({ isActive }) => isActive ? `${tabButtonDesign} active` : `${tabButtonDesign} inactive`}>
                            <svg className="icon-size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#CBCBCB" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22ZM12 8.25C12.4142 8.25 12.75 8.58579 12.75 9V11.25H15C15.4142 11.25 15.75 11.5858 15.75 12C15.75 12.4142 15.4142 12.75 15 12.75H12.75L12.75 15C12.75 15.4142 12.4142 15.75 12 15.75C11.5858 15.75 11.25 15.4142 11.25 15V12.75H9C8.58579 12.75 8.25 12.4142 8.25 12C8.25 11.5858 8.58579 11.25 9 11.25H11.25L11.25 9C11.25 8.58579 11.5858 8.25 12 8.25Z" fill="#CBCBCB"></path> </g></svg>
                            <h1 className="text-s">Manage Tasks</h1>
                        </NavLink>
                    </li>
                    <li className="p-10">
                        <NavLink to="../../Task Board" className={({ isActive }) => isActive ? `${tabButtonDesign} active` : `${tabButtonDesign} inactive`}>
                            <svg className="icon-size" width="45" height="35" viewBox="0 0 45 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 0H40.5C42.975 0 44.9775 1.96875 44.9775 4.375L45 30.625C45 33.0312 42.975 35 40.5 35H4.5C2.025 35 0 33.0312 0 30.625V4.375C0 1.96875 2.025 0 4.5 0ZM15.75 30.625H40.5V21.875H15.75V30.625ZM15.75 19.6875H40.5V10.9375H15.75V19.6875ZM4.5 30.625H13.5V10.9375H4.5V30.625Z" fill="#CBCBCB"/>
                            </svg>
                            <h1 className="text-s">Tasks Board</h1>
                        </NavLink>
                    </li>
                    <li className="p-10">
                        <NavLink to="../../Settings" className={({ isActive }) => isActive ? `${tabButtonDesign} active` : `${tabButtonDesign} inactive`}>
                            <svg className="icon-size" xmlns="http://www.w3.org/2000/svg" fill="#CBCBCB" viewBox="0 0 24 24" stroke="#CBCBCB"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path></g></svg>
                            <h1 className="text-s">Settings</h1>
                        </NavLink>
                    </li>
                </ul>
            </nav>    
            <Outlet />
        </>
    );
}

export default SideNavbar;