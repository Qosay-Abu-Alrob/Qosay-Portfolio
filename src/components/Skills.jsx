import HtmlIcon from '../assets/HtmlIcon.svg'
import GitIcon from '../assets/GitIcon.png'
import CssIcon from '../assets/CssIcon.png'
import GitHubIcon from '../assets/GitHubIcon.png'
import JavaScriptIcon from '../assets/JavaScriptIcon.png'
import CIcon from '../assets/C++Icon.png'
import TailwindIcon from '../assets/TailwindIcon.png'
import ReactIcon from '../assets/ReactIcon.png'
import TypeScriptIcon from '../assets/TypeScriptIcon.png'


function Skills() {
    return ( 
        <section id="Skills" className="xs:px-5 sm:px-20 pb-10">
            <h1 className='xs:text-[28px] md:text-[56px]  xs:py-5 text-center text-primary'>Skills</h1>
            <div className='grid xs:grid-cols-1  md:grid-cols-2 gap-5 place-items-center'>
                <div className='grid xs:grid-cols-3 xs:gap-5 sm:grid-cols-4 md:grid-cols-4 md:gap-4'>
                    <div className='w-[90px] h-[90px] rounded-[50%] bg-[#EDF2F8] flex flex-col items-center justify-center '>
                        <img className='w-[50%]' src={HtmlIcon} alt="Html" />
                        <p>HTML</p>
                    </div>
                    <div className='w-[90px]  h-[90px] rounded-[50%] bg-[#EDF2F8] flex flex-col items-center justify-center'>
                        <img className='w-[50%]' src={GitIcon} alt="Html" />
                        <p>Git</p>
                    </div>
                    <div className='w-[90px]  h-[90px] rounded-[50%] bg-[#EDF2F8] flex flex-col items-center justify-center'>
                        <img className='w-[50%]' src={CssIcon} alt="Html" />
                        <p>CSS</p>
                    </div>
                    <div className='w-[90px]  h-[90px] rounded-[50%] bg-[#EDF2F8] flex flex-col items-center justify-center'>
                        <img className='w-[50%]' src={GitHubIcon} alt="Html" />
                        <p>GitHub</p>
                    </div>
                    <div className='w-[90px]  h-[90px] rounded-[50%] bg-[#EDF2F8] flex flex-col items-center justify-center'>
                        <img className='w-[50%]' src={JavaScriptIcon} alt="Html" />
                        <p>JavaScript</p>
                    </div>
                    <div className='w-[90px]  h-[90px] rounded-[50%] bg-[#EDF2F8] flex flex-col items-center justify-center'>
                        <img className='w-[50%]' src={CIcon} alt="Html" />
                        <p>C++</p>
                    </div>
                    <div className='w-[90px]  h-[90px] rounded-[50%] bg-[#EDF2F8] flex flex-col items-center justify-center'>
                        <img className='w-[50%]' src={TailwindIcon} alt="Html" />
                        <p>TailwindCss</p>
                    </div>
                    <div className='w-[90px]  h-[90px] rounded-[50%] bg-[#EDF2F8] flex flex-col items-center justify-center'>
                        <img className='w-[50%]' src={ReactIcon} alt="Html" />
                        <p>React</p>
                    </div>
                    <div className='w-[90px]  h-[90px] rounded-[50%] bg-[#EDF2F8] flex flex-col items-center justify-center'>
                        <img className='w-[50%]' src={TypeScriptIcon} alt="Html" />
                        <p>TypeScript</p>
                    </div>
                </div>
                <div className='w-[100%] h-[100%] grid gap-5'>
                    <div className='flex xs:justify-center md:justify-start xs:mt-5'>
                        <p className='text-primary font-bold xs:mr-5 sm:mr-24'>2024</p>
                        <div>
                            <p className='text-darkblue font-bold'>Computer System Engineer </p>
                            <span className='text-[#6b7688]'>Graduate</span>
                        </div>
                        
                    </div>
                    <div className='flex xs:justify-center md:justify-start'>
                        <p className='text-primary font-bold xs:mr-5 sm:mr-24'>2023</p>
                        <div>
                            <p className='text-darkblue font-bold'>Front-End Engineer Trainee</p>
                            <span className='text-[#6b7688]'>Asal Technology</span>
                        </div>
                        
                    </div>
                    <div className='flex xs:justify-center md:justify-start'>
                        <p className='text-primary font-bold xs:mr-5 sm:mr-24'>2022</p>
                        <div>
                            <p className='text-darkblue font-bold'>IEEEXtreme 16.0 Participant</p>
                            <span className='text-[#6b7688]'>IEEEXtreme</span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;