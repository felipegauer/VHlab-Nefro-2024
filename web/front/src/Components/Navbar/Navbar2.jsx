import { Link } from 'react-router-dom';
import { Bars3BottomRightIcon, XMarkIcon} from '@heroicons/react/24/solid'
import vhlavb from '../../assets/vhlabLogo.png';
import { useState } from 'react';
// import Profile from '../Profile';



export default function Navbar2() {

    let links = [
        { name: 'Início', link: '/' },
        { name: 'Sobre', link: '/sobre',disable:true },
        { name: 'Contato', link: '/contato',disable:true  }
    ]

    let [isOpen, setIsOpen] = useState(false);

    return (
        <div className="shadow-md w-full color-bg text-white  top-0 left-0 z-50">
            <div className='md:container md:mx-lg '>
                <div className='py-4 px-4 md:px-0 md:flex justify-between items-center'>
                    {/*Logo*/}
                    <div className='flex text-xl cursor-pointer items-center gap-4 '>
                        <div className=' h-10'>
                            <a href='https://vhlab.com.br/' target='_blank'><img src={vhlavb} className='w-full transition-all transform hover:scale-110 ease-in-out delay-75 h-full ' /></a>
                        </div>
                        <h1 className='ms-1'>+</h1>
                        <a href='https://portal.pucrs.br/ensino/cursos/graduacao/medicina/' target='_blank'><h1 className='font-semibold transition-all transform hover:scale-110 ease-in-out delay-75  '>Med PUCRS</h1></a>
                    </div>

                    {/*Menu Icon*/}
                    <div onClick={() => setIsOpen(!isOpen)} className='w-10 h-20 absolute right-8 top-4 cursor-pointer md:hidden'>
                        {
                            isOpen ? <XMarkIcon />
                                : <Bars3BottomRightIcon />
                        }
                    </div>

                    {/*Links*/}
                    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static color-bg
                 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${isOpen ? 'top-18' : 'top-[-490px]'}`}>
                        {
                            links.map((link, index) => (
                                <li key={index} className='my-7 text-lg font-normal md:my-0 md:mr-8'>
                                    <Link to={link.link} className={link.disable?"pointer-events-none text-gray-400":""}>{link.name}</Link>
                                </li>))
                        }

                        {/* <button className='btn bg-black py-1 px-3 md:ml-8 rounded md:static '>Login</button> */}
                        {/* <Profile  /> */}
                    </ul>

                </div>

            </div>

        </div>)
}