import React from 'react'
import aboutImage from '../../images/about/illustration-editor-desktop.svg'

//css
import './aboutStyles.css'



class About extends React.Component {

    constructor() {
        super()
        this.state = {
            init: true
        }
    }



    render() {
        return (
            <>
                <section aria-label='info about the web site' className='about centerSections'>
                    <div className="pageContainer">
                        <h1 className='bigHeading' >Designed for the future</h1>
                        <div className="aboutInfo">
                            <div>
                                <h2 className='smallHeading'>Introducing an extensible editor</h2>
                                <p className='paragraph'>
                                    Blogr features an exceedingly intuitive interface which It you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.
                                </p>
                                <h2 className='smallHeading'>Robust contetn management</h2>
                                <p className='paragraph'>
                                    Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you're in full control. 
                                </p>
                            </div>
                            <div>
                                <img src={aboutImage} alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default About