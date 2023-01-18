import './header.css'
import HeaderImage from '../assets/background-header-1x1.png'


const Header = () => {
  return (
    <section id='header'>
      
      <div className="container">

        <div className="column">
          <h1>devsmike</h1>
          <h4>from plan > to build > to develop</h4>

          <div className="row">
            <button className='button-primary'><p>Darmowa wycena</p></button>
            <button className='button-primary'><p>Kontakt</p></button>
          </div>
          
        </div>

        <div className="column">
          <img src={HeaderImage} alt="" />
              
        </div>
      </div>


    


    </section>
  )
}
export default Header