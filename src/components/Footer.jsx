import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';
function Footer() {
    return ( 
        <section className='bg-background pt-10'>
            <div><hr /></div>
            <div className='flex justify-evenly items-center mt-10 xs:flex-col sm:flex-row pb-10'>
                <div>
                    <ul>
                        <li><a className='font-bold xs:text-5xl sm:text-2xl text-primary' href="#">&lt;<span className='text-black xs:text-5xl sm:text-2xl font-bold'>Qosay</span>/&gt;</a></li>
                    </ul>
                </div>
                <div>
                    <ul className='flex xs:flex-col sm:flex-row xs:items-center xs:pt-5 sm:pt-0 xs:text-xl'>
                        <li className='font-bold mr-3 nav-bar-hover xs:mt-10 sm:mt-0' ><a href="#Home">Home</a></li>
                        <li className='font-bold mr-3 nav-bar-hover xs:mt-10 sm:mt-0' ><a href="#About">About Me</a></li>
                        <li className='font-bold mr-3 nav-bar-hover xs:mt-10 sm:mt-0'><a href="#Skills">Skills</a></li>
                        <li className='font-bold mr-3 nav-bar-hover xs:my-10 sm:my-0'><a href="#Projects">Projects</a></li>
                    </ul>
                </div>
                <div className='text-xl '>
                    <a className='nav-bar-hover' href="https://github.com/Qosay-Abu-Alrob" target='_blank'><FontAwesomeIcon icon={faGithub}  /></a> 
                    <a className='nav-bar-hover' href="https://www.linkedin.com/in/qosay-abu-alrob-03071a238/" target='_blank'><FontAwesomeIcon icon={faLinkedin} className='mx-5'/></a>
                    <a className='nav-bar-hover' href="https://www.instagram.com/qosay.abu.alrob/" target='_blank'><FontAwesomeIcon icon={faInstagram} /></a>
                </div>
            </div>
        </section>
    );
}

export default Footer;