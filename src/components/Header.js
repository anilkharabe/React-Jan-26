import {LOGO_URL} from '../utils/constant';

const Header = ()=>{
    return(
      
    <div className="flex justify-between border-solid items-center">
      <div className='logo-container'>
          <img className="w-[170px] ml-3" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul className='flex '>
          <li className='list-none p-[15px] m-[15px]'>
              Home
          </li>
          <li className='list-none p-[15px] m-[15px]'>
              About
          </li>
          <li className='list-none p-[15px] m-[15px]'>
              Contact Us
          </li>
          <li className='list-none p-[15px] m-[15px]'>
              Cart
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header;