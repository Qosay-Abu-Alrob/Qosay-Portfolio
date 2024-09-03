/* eslint-disable react/no-unescaped-entities */
import personalImage from '../assets/Qosay Abu Alrob.jpeg'
import CV from '../assets/Qosay Abu Alrob.pdf'
function Home() {
    return ( 
        <section id="Home" className="bg-background  px-20 xs:pt-10 md:pt-28">
            <div className='grid md:grid-cols-[repeat(2,1fr)] items-center '>
                <div className='xs:text-center md:text-left xs:order-3 md:-order-none'>
                    <h1 className='xs:text-[28px] md:text-[56px]  xs:pt-5'>Hi I'm <span className='text-primary'>Qosay</span></h1>
                    <p className='xs:text-[20px] text-darkblue md:text-[24px] ss:w-[100%] md:w-[90%]'>
                        I'm a <span className='text-primary'>Front-End Developer</span> specialize in creating a full responsive, 
                        and user-friendly web interfaces using modern technologies such as <span className='text-primary'>React.js,Tailwind CSS.</span>
                    </p>
                    <div className="mt-10 pb-10">
                        <a className='text-primary border-primary border rounded-md xs:py-[7px] xs:px-[16px] md:py-[14px] md:px-[32px] mr-4 contact-hover' href="#Contact">Get in Touch</a>
                        <a className='text-primary border-primary border rounded-md xs:py-[7px] xs:px-[16px] md:py-[14px] md:px-[32px] contact-hover' href={CV} download={CV}>Download CV</a>
                    </div>
                </div>
                <div className='xs:flex xs:justify-center xs:items-center'>
                    <img  className='xs:w-[70%] sm:w-[60%]  lg:w-[100%] h-[100%] xs:order-1 md:order-none' src={personalImage} alt="personal Image" />
                </div>
            </div>
        </section>
    );
}

export default Home;