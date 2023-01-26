import './about.css'
import Portfolio1 from '../assets/mdev-portfolio-1.png'
import Portfolio2 from '../assets/mdev-portfolio-2.png'
import Portfolio3 from '../assets/mdev-portfolio-3.png'
import Portfolio4 from '../assets/mdev-portfolio-4.png'

const portfolio = [
  {
    img: Portfolio1,
    name: "Men's World",
    link: "https://www.mensworldrybnik.pl",
  },
  {
    img: Portfolio2,
    name: "Venging4all",
    link: "https://www.vending4all.eu",
  },
  {
    img: Portfolio3,
    name: "Na Tarasie",
    link: "http://www.natarasie.eu",
  },
  {
    img: Portfolio4,
    name: "Artmageddon",
    link: "https://www.artmageddon.pl",
  }
]



const About = () => {
  return (
    <section id="about">
      
      <div className='title'>
        <h3>Portfolio</h3>
        <h4>Dotychczas zaufali nam:</h4>
      </div>
     
      <div className="portfolio">
       

        {
        portfolio.map(({ img, name, link }, index) =>{
          return (
            <div className="col" key={index}>
              <img src={img} alt="" />
              <h4>{name}</h4>
              <a href={link} className='button-primary' target='blank'>Odwiedź</a>
            </div>   
            
          )
        })
        }
        
        
      

       
      
       </div>
      
    

    </section>
  )
}
export default About