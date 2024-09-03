import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faTimes} from '@fortawesome/free-solid-svg-icons';
import { useState} from 'react';
function NavBar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="flex items-center justify-between bg-white xs:px-5 sm:px-20 py-4 uppercase">
            <ul>
                <li><a className='font-bold text-2xl text-primary' href="#">&lt;<span className='text-black text-2xl font-bold'>Qosay</span>/&gt;</a></li>
            </ul>
            <ul className={` md:flex md:items-center  ${isMenuOpen ? ' bg-white text-white overflow-hidden absolute right-0 top-[3.8rem] w-full text-center z-50':''} text-white`}>
                    <li className={` md:flex md:items-center  ${isMenuOpen ? 'p-3 hover:bg-primary' : 'hidden mr-10 nav-bar-hover '} md: text-black`}><a href="#Home">Home</a></li>
                    <li className={` md:flex md:items-center  ${isMenuOpen ? 'p-3 hover:bg-primary' : 'hidden mr-10 nav-bar-hover '} md: text-black`}><a href="#About">About Me</a></li>
                    <li className={` md:flex md:items-center  ${isMenuOpen ? 'p-3 hover:bg-primary' : 'hidden mr-10 nav-bar-hover '} md: text-black`}><a href="#Skills">Skills</a></li>
                    <li className={` md:flex md:items-center  ${isMenuOpen ? 'p-3 hover:bg-primary' : 'hidden mr-10 nav-bar-hover '} md: text-black`}><a href="#Projects">Projects</a></li>
            </ul>
            <ul className="xs:hidden md:flex items-center ">
                <li className="flex items-center">
                    <a className='text-primary border-primary border rounded-md py-[14px] px-[32px] contact-hover' href="#Contact">Contact Me</a>
                    
                </li>
            </ul>
            <ul className='md:hidden text-2xl'>
                <li>
                <FontAwesomeIcon 
                        className="cursor-pointer" 
                        icon={isMenuOpen ? faTimes : faBars} 
                        onClick={toggleMenu}
                />
                </li>
            </ul>
        </nav>
    );
}
export default NavBar;