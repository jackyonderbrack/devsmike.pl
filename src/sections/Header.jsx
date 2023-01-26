import './header.css'
import HeaderImage from '../assets/background-header-1x1.png'
import { FaGithubSquare, FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa'


const Header = () => {
  return (
    <section id='header'>
      
      <div className="container columns">

        <div className="col">
          <h1>devsmike</h1>
          <h4>from plan > to build > to develop</h4>
          <div className="row">
            <button className='button-primary'><p>Darmowa wycena</p></button>
            <button className='button-secondary'><p>Kontakt</p></button>
          </div>
          
        </div>
        <div className="col">
          <img src={HeaderImage} alt="" />           
        </div>
        <div className="socials">
          <FaGithubSquare className='icon' size="6vmin" />
          <FaFacebookSquare className='icon' size="6vmin" />
          <FaInstagramSquare className='icon' size="6vmin" />
        </div>
      </div>
    </section>
  )
}
export default Header