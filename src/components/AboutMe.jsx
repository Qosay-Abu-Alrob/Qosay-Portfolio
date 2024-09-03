/* eslint-disable react/no-unescaped-entities */
import AboutMeImage from '../assets/AboutMeImage.jpg'
function AboutMe() {
    return (  
        <section id="About" className="bg-white xs:px-5 sm:px-20 xs:pt-10 sm:pt- md:pt-28"> 
        <p className='xs:text-[28px] text-darkblue md:text-[36px] text-center pb-5'>&quot;Later Equal <span className='text-primary'>Never</span> So Just Start&quot;</p>
            <div className='grid md:grid-cols-[repeat(2,1fr)] items-center '>
                
                <div className='xs:flex xs:items-center xs:justify-center md:justify-start '>
                    <img className='xs:w-[60%]  sm:w-[50%] md:w-[70%]  pb-5  ' src={AboutMeImage} alt="personal Image" />
                </div>
                <div className='xs:text-center md:text-left'>
                    <h1 className='xs:text-[28px] md:text-[56px]  xs:pt-5'>About Me</h1>
                    <p className='xs:text-[20px] text-darkblue md:text-[24px] ss:w-[100%] md:w-[90%]'>
                        I'm a <span className='text-primary'>Computer System Engineer</span> gratuated from Arab American University at 2024 specialize in creating a full responsive, 
                        and user-friendly web interfaces using modern technologies such as React.js, Tailwind CSS,
                        With a strong foundation in web development principles and best practices and clean code that deliver an exceptional user experience. 
                    </p>
                </div>
                
            </div>
        </section>
    );
}
export default AboutMe
