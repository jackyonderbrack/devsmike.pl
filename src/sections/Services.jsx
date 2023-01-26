import './services.css'
import { AiOutlineCheckCircle } from 'react-icons/ai'

const Services = () => {
  return (
    <section id='services'>
      <div className="container columns">
        <div className="row">
          <h4>Czym się zajmujemy:</h4>
          <h3>Aplikacje</h3>
          <h3>Grafika</h3>
          <h3>UX / UI Design</h3>
          <h3>Reklama</h3>
        </div>
      
        <div className="row list reveal-2">
              <h4><AiOutlineCheckCircle /> HTML5 and CSS3</h4>
              <h4><AiOutlineCheckCircle /> JavaScript + React</h4>
              <h4><AiOutlineCheckCircle /> Bootstrap / MUI</h4>
              <h4><AiOutlineCheckCircle /> Wordpress</h4>
        </div>
      </div>
      
          
      
      
    </section>
  )
}
export default Services