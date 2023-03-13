import React, {Component} from 'react'
import './about.css'
import about from '../../images/pics/logo.png'
// import text from '../../locales/'

class About extends Component
{
	render()
	{
		return (
			<section className = 'about py-5 my-5' id = 'about'>
				<div className = 'container'>
					<div className= "row align-items-center">
						<div className = "c col-md-6 col-12">
							<div className = 'left-side text-md-start text-center mb-lg-0 mb-5'>
								<h3 className = 'about-name'><span>B</span>uen<span>V</span>iaje</h3>
								<p className = 'about-description text-muted'>Lorem ipsum dolor sit amet</p>
								{/* <p className = 'about-text'>{texto}</p> */}
								<button className = 'btn btn-outline-primary text-capitalize btn-sm shadow-lg'>read more<i className="ms-2 fas fa-chevron-right"></i></button>
							</div>
						</div>
						<div className = "c col-md-6 col-12">
							<div className = 'right-side text-lg-end text-center'>
								<img className = 'img-fluid w-75 shadow-lg' src = {about} alt = 'about' />
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default About