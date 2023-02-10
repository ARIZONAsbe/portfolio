import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'
import {BsFillMoonStarsFill} from 'react-icons/bs'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    const [darkMode, setDarkMode] = useState(false);
    

  return (
    <div className= '{darkMode ? "dark" : ""} fixed w-full h-[80px] flex justify-between items-center bg-[#18191a] text-gray-300'>

        <div className= 'pl-6 p-4'>
            <BsFillMoonStarsFill size={25}
            onClick={() => setDarkMode(!darkMode)}  
            className='cursor-pointer'
            />
        </div>

        {/*menu */}
        <ul className='hidden md:flex font-semibold'>
            <li> 
                <Link to='home' smooth={true} duration={500}>
                    Home
                </Link>
            </li>
            <li>
                <Link to='about' smooth={true} duration={500}>
                    About
                </Link>
            </li>
            <li>
                <Link to='skills' smooth={true} duration={500}>
                    Skills
                </Link>
            </li>
            <li>
                <Link to='work' smooth={true} duration={500}>
                    Projects
                </Link>
            </li>
            <li>
                <Link to='contact' smooth={true} duration={500}>
                    Contact
                </Link>
            </li>
        </ul>

         { /* hamburger */}
         <div onClick={handleClick} className='md:hidden z-10 p-3'>
            {!nav ? <FaBars size={25} /> : <FaTimes size={25} />}
         </div>

        {/* mobilne menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#18191a] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                    Home
                </Link></li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                    About
                </Link></li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
                    Skills
                </Link></li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='work' smooth={true} duration={500}>
                    Projects
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link to='contact' smooth={true} duration={500}>
                    Contact
                </Link></li>
        </ul>

        {/* media socialne */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300 ' 
                    href="https://www.linkedin.com/in/krystian-kami%C5%84ski-744a5516b/">
                        Linkedin <FaLinkedin size={30} />

                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#333]'>
                    <a className='flex justify-between items-center w-full text-gray-300 ' 
                    href="/">
                        Github <FaGithub size={30} />

                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#748d69]'>
                    <a className='flex justify-between items-center w-full text-gray-300 ' 
                    href="/">
                        eMail <HiOutlineMail size={30} />

                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#a10028]'>
                    <a className='flex justify-between items-center w-full text-gray-300 ' 
                    href="/">
                        CV <BsFillPersonLinesFill size={30} />

                    </a>
                </li>
            </ul>


        </div>

    </div>
  )
}

export default Navbar