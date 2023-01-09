import React, {Component} from 'react'
import './navbar.css'
import {navbar_items} from '../helpers/Data'
import {navbar_accounts} from '../helpers/Data'
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';


class Navbar extends Component
{
	display_navbar_items = _ =>
	{
		let items = navbar_items.map(item =>
		{
			return (
				<li className = "nav-item link" key = {Math.random()}>
			        <a className = "nav-link p-md-0 py-md-1 px-md-2 me-md-2" href = {`#${item.link}`}><i className = {`${item.icon} me-2`}></i>{item.name}</a>
			    </li>
			)
		})
		return items
	}

	display_navbar_accounts = _ =>
	{
		let accounts = navbar_accounts.map(item =>
		{
			return (
				// <li className="nav-item px-1 icon" key = {Math.random()}>
	        	// 	<a className="nav-link" target = '_blank' rel="noreferrer">
	        	// 		<Dropdown>
				// 			<DropdownToggle>
				// 				{/* <i className = {item.icon} onClick={}></i> */}
				// 			</DropdownToggle>
				// 		</Dropdown>
				// 		<DropdownMenu>
				// 			<DropdownItem>es</DropdownItem>
				// 			<DropdownItem>eu</DropdownItem>
				// 		</DropdownMenu>
				<li className = "nav-item link" key = {Math.random()}>
			        <a className = "nav-link p-md-0 py-md-1 px-md-2 me-md-2" href = {`#${item.link}`}>{item.name}</a>
			    </li>
						// <div class="navbar__languages">
                              
						// <ul class="lang-nav">
						// 		<li class="selected">
						// 	<a>EN</a>
						// 	</li>
						// 		<li>
						// 	<a href="/nl/festival/welkom">NL</a>
						// 	</li>
						// 		<li>
						// 	<a href="/fr/festival/bienvenue">FR</a>
						// 	</li>
						// 	</ul>
						// </div>
	        	// 	</a>
	      		// </li>
			)
		})
		return accounts
	}

	render()
	{
		return (
			<nav className="navbar navbar-expand-md sticky-top active py-1 mb-5" id = 'navbar'>
				<div className = 'container'>
			 		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			    		<span className="navbar-toggler-icon">Ξ</span>
			  		</button>
			  		<div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
			    		<ul className="navbar-nav mr-auto">
			    			{this.display_navbar_items()}
			    		</ul>
			    		<ul className = "navbar-nav ml-auto">
			    			{this.display_navbar_accounts()}
			    		</ul>
			    	</div>
			    </div>
			</nav>
		)
	}
}

export default Navbar