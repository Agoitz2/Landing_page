import React, {Component} from 'react'
import Header from './componente/header/header'
import Navbar from './componente/navbar/navbar'
import About from './componente/about/about'
// import Subscription from './componente/subscription/Subscription'
// import Products from './componente/products/products'
// import Blogs from './componente/blogs/Blogs'
// import Faq from './componente/faq/Faq'
import Contact from './componente/contact/contact'
import Footer from './componente/footer/footer'
import Sb from './componente/sb/sb'

class App extends Component
{
    render()
    {
        return(
            <>
                <Sb />
                <div className = '_header'>
                    <Header />
                </div>

                <Navbar />

                <div className = '_body'>
                    <About />
                    {/* <Subscription /> */}
                    {/* <Products /> */}
                    {/* <Blogs /> */}
                    {/* <Faq /> */}
                    <Contact />
                </div>

                <div className = '_footer'>
                    <Footer />
                </div>
            </>
        )
    }
}

export default App;