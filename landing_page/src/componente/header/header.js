import React, {Component} from 'react'
import './header.css'

class Header extends Component
{
	render()
	{
		return (
			<div className = 'hero-page'>
				<div class="header-video">
					<div class="header-video__responsive-wrapper">
						<video src="https://d1puoz0n3annj1.cloudfront.net/TMLBE_Loop.mp4" autoplay muted disablepictureinpicture disableremoteplayback loop playsinline></video>
					</div>
				</div>
				<header className = 'header min-vh-100 position-relative'>
					<div className = 'img-overlay position-absolute w-100 h-100'></div>
					<div className = 'content position-absolute translate-middle top-50 start-50 text-center'>
						<h3 className = 'brand-name mb-5' >Ses<span>A</span>ch</h3>
						<p className = 'brand-description mb-3 text-muted'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
						<div className = 'empty-line mx-auto w-25 mb-5'></div>
						<a href = '#navbar' className = 'btn btn-outline-danger text-capitalize btn-sm'>click to scroll down <i className="fas fa-arrow-down ms-2"></i></a>
					</div>
				</header>
			</div>
		)
	}
}

export default Header