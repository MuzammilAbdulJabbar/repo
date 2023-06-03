import React from 'react'
import './Portfolio.css'
import PortfolioImage from '../../assets/istockphoto-1151140471-612x612.jpg'
import data from './data'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2 className='portfolio_heading'>Recent Projects</h2>
      <p className='portfolio'>checkout some of the projects i recently worked on.Use the button to toggle the different categories</p>
      <div className='card_container'>
      {
        data.map(({id,image,title,details,link})=>{
          return(
            <div className="card" key={id}>
      <img className="card-img-top" src={PortfolioImage} alt="Project" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {details}
        </p>
        <div >
          <a href={link} target='_blank' className="btn btn-primary" >GitHub</a>
          
        </div>
      </div>
    </div>
          )
        })
      }
    </div>
      </section>
  )
}

export default Portfolio
