import React from 'react'
import circles from '../../images/middleSection/bg-pattern-circles.svg'
import phones from '../../images/middleSection/illustration-phones.svg'



//css
import './middleOneStyles.css'


class MiddleOne extends React.Component {

    constructor() {
        super()
        this.state = {
            init: true
        }
    }



    render() {
        return (
            <>
                <section className="middle centerSections">
                    <div className="pageContainer front">
                        <div className="middleInfo">
                            <div>
                                <img src={phones} alt="" />
                            </div>
                            <div>
                                <h1 className='bigHeading'>State of the Art Infrastructure</h1>
                                <p className='paragraph'>With reliability and speed in mind. worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly. no matter where your readers are. keeping your site competitive. </p>
                            </div>
                        </div>
                    </div>
                    <div className="maskForCircles">
                        <div className="pageContainer">
                            <img src={circles} alt="" />
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default MiddleOne