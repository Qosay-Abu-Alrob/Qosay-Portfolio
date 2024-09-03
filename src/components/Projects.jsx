import MoovIcon from '../assets/MoovIcon.png'
import TicTacToeIcon from '../assets/TicTacToeIcon.png'
import Weather from '../assets/Weather.png'
import ToDoList from '../assets/ToDoList.png'
import Restaurant from '../assets/Restaurant.png'
function Projects() {
    return ( 
        <section id="Projects" className="px-20 bg-background pb-10">
            <div>
            <h1 className='xs:text-[28px] md:text-[56px]  xs:pt-5 text-center text-primary '>Projects</h1>
                <div className="flex flex-wrap justify-center  gap-5 xs:place-items-center">
                    <div className="xs:mt-5  md:mt-0 w-[300px] h-[380px] border rounded-lg  transition-transform duration-300 transform hover:scale-105">
                        <img  src={MoovIcon} alt={MoovIcon} className=''/>
                        <h2 className='text-primary text-center my-2 font-bold text-2xl'>Moov-Movie </h2>
                        <p className=' text-center text-darkblue px-2'>
                            A full Responsive movie web site bulid using react and tailwind css
                        </p>
                        <div className='mt-4 mb-5 text-center'>
                            <a className='text-white bg-primary border-primary border rounded-md px-8 py-2 contact-hover' href="https://qosay-abu-alrob.github.io/Moov-Movie/"target='_blank' >Demo</a>
                            <a className='text-white bg-primary border-primary border rounded-md px-8 py-2 contact-hover ml-4' href="https://github.com/Qosay-Abu-Alrob/Moov-Movie" target='_blank'>GitHub</a>
                        </div>
                    </div>
                    <div className="w-[300px] h-[380px] border rounded-lg  transition-transform duration-300 transform hover:scale-105">
                        <img  src={TicTacToeIcon} alt={TicTacToeIcon} className='h-[220px] w-[300px]' />
                        <h2 className='text-primary text-center my-2 font-bold text-2xl'>Tic-Tac-Toe</h2>
                        <p className=' text-center text-darkblue px-2'>
                            A a Tic-Tac-Toe App Game bulid using react
                        </p>
                        <div className='mt-4 text-center'>
                            <a className='text-white bg-primary border-primary border rounded-md px-8 py-2 contact-hover ' href="https://qosay-abu-alrob.github.io/Tic-Tac-Toe-Game/"target='_blank' >Demo</a>
                            <a className='text-white bg-primary border-primary border rounded-md px-8 py-2 contact-hover ml-4' href="https://github.com/Qosay-Abu-Alrob/Tic-Tac-Toe-Game" target='_blank'>GitHub</a>
                        </div>
                    </div>
                    <div className="w-[300px] h-[380px] border rounded-lg  transition-transform duration-300 transform hover:scale-105">
                        <img  src={Weather} alt={Weather} className='h-[220px]' />
                        <h2 className='text-primary text-center my-2 font-bold text-2xl'>Weather App</h2>
                        <p className=' text-center text-darkblue px-2'>
                            A Weather website  bulid using JS based on API
                        </p>
                        <div className='mt-4 text-center'>
                            <a className='text-white bg-primary border-primary border rounded-md px-8 py-2 contact-hover ' href="https://qosay-abu-alrob.github.io/Weather-App/"target='_blank' >Demo</a>
                            <a className='text-white bg-primary border-primary border rounded-md px-8 py-2 contact-hover ml-4' href="https://github.com/Qosay-Abu-Alrob/Weather-App" target='_blank'>GitHub</a>
                        </div>
                    </div>
                    <div className="w-[300px] h-[380px] border rounded-lg  transition-transform duration-300 transform hover:scale-105">
                        <img  src={ToDoList} alt={ToDoList} className='h-[220px] w-[300px]'/>
                        <h2 className='text-primary text-center my-2 font-bold text-2xl'>To-Do-List App</h2>
                        <p className=' text-center text-darkblue px-2'>
                        To-Do-List Tasks web application bulid using JS 
                        </p>
                        <div className='mt-4 text-center'>
                            <a className='text-white bg-primary border-primary border rounded-md px-8 py-2 contact-hover ' href="https://qosay-abu-alrob.github.io/To-Do-List-APP/"target='_blank' >Demo</a>
                            <a className='text-white bg-primary border-primary border rounded-md px-8 py-2 contact-hover ml-4' href="https://github.com/Qosay-Abu-Alrob/To-Do-List-APP" target='_blank'>GitHub</a>
                        </div>
                    </div>
                    <div className="w-[300px] h-[380px]  border rounded-lg  transition-transform duration-300 transform hover:scale-105">
                        <img  src={Restaurant} alt={Restaurant} className='w-[300px] h-[220px]'/>
                        <h2 className='text-primary text-center my-2 font-bold text-2xl'>Restaurant-Website</h2>
                        <p className=' text-center text-darkblue px-2'>
                        A full responsive Restaurant website bulid using JS 
                        </p>
                        <div className='mt-4 text-center'>
                            <a className='text-white bg-primary border-primary border rounded-md px-8 py-2 contact-hover ' href="https://qosay-abu-alrob.github.io/Restaurant-Website/"target='_blank' >Demo</a>
                            <a className='text-white bg-primary border-primary border rounded-md px-8 py-2 contact-hover ml-4' href="https://github.com/Qosay-Abu-Alrob/Restaurant-Website" target='_blank'>GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
}

export default Projects;