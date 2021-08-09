import React from 'react'
import logo from '../../images/home/logo.svg'

//css
import './stylesFooter.css'
class Footer extends React.Component {

    constructor() {
        super()
        this.state = {
            init: true
        }
    }



    render() {
        return (
            <>
                <footer className='centerSections'>
                    <div className='pageContainer flexFooterContainer'>
                        <div>
                            <img src={logo} alt="" />
                        </div>
                        <div>
                            <h3>Product</h3>
                            <ul>
                                <li>Overview</li>
                                <li>Pricing</li>
                                <li>Marketplace</li>
                                <li>Features</li>
                                <li>Integrations</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Company</h3>
                            <ul>
                                <li>About</li>
                                <li>Team</li>
                                <li>Blog</li>
                                <li>Careers</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Connect</h3>
                            <ul>
                                <li>Contact</li>
                                <li>Newsletterr</li>
                                <li>LinkedIn</li>
                            </ul>
                        </div>
                    </div>
                    {/*
                    <h6>This is a frontendmentor.io Challenge Design, translated to HTML5, CSS3, JS through React.js by IOANNIS MENTESIDIS 2021</h6>
                    */}
                </footer>
            </>
        );
    }
}

export default Footer