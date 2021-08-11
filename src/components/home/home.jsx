import React from 'react'
import logo from '../../images/home/logo.svg'
import arrowLight from '../../images/icon-arrow-light.svg'
import arrowDark from '../../images/icon-arrow-dark.svg'
import homePattern from '../../images/home/bg-pattern-intro.svg'

//css
import './homeStyles.css'


var styleFirstAnime = {
    position: 'relative',
    top: '-60px',
    opacity: '0',
    transition: '0.85s'
}
var styleFirstDefault = {
    position: 'relative',
    top: '0',
    opacity: '1',
    transition: '0.85s'
}
var styleThirdAnime = {
    position: 'relative',
    top: '-10px',
    opacity: '1',
    transition: '0.45s',
    transform: 'rotate(-405deg)'
}
var styleThirdDefault = {
    position: 'relative',
    top: '0',
    opacity: '1',
    transition: '0.85s',
    transform: 'rotate(180deg)'
}
var styleSecondAnime = {
    position: 'relative',
    top: '0',
    opacity: '1',
    transition: '0.75s',
    transform: 'rotate(225deg)'
}
var styleSecondDefault = {
    position: 'relative',
    top: '0',
    opacity: '1',
    transition: '0.95s',
    transform: 'rotate(180deg)'
}
class Home extends React.Component {

    constructor() {
        super()
        this.navRef = React.createRef();

        this.state = {
            isDropDownMenuClosed: false,
            isBurgerMenuClosed: true,
            desktopView: true
        }

    }
    componentDidMount() {
        var myObserver = new ResizeObserver( (entries) => {
            entries.forEach(entry => {
                //console.log('width', entry.contentRect.width)
                //console.log('height', entry.contentRect.height)

                var width = entry.contentRect.width

                if (width > 779) {
                    this.setState({desktopView: true})
                } else {
                    if (this.state.isBurgerMenuClosed != true) {
                        this.setState({desktopView: true})
                    } else {
                        this.setState({desktopView: false})
                    }
                }
              });

        })
        myObserver.observe(this.navRef.current)      
    }
    render() {
        var dropArrowStylesUp = {
            transform: 'rotate(-180deg)',
            transition: '0.4s'
        }
        var dropArrowStylesDown = {
            transform: 'rotate(0deg)',
            transition: '0.4s'
        }
        return (

            <>
                <header ref={this.navRef}>
                    <div className="pageContainer">
                        <nav >
                            <img src={logo} alt="" className="logo" />
                            <div className="boxLinks" 
                            style={{display: this.state.desktopView === true ? 'flex' : 'none'}}
                            >
                                <ul className='mainUl'>
                                    <li>
                                        <p>Product <span>
                                            <img className='whiteColor'  src={arrowLight} alt="" />
                                            <img className='redColor'  src={arrowDark} alt="" />
                                        </span></p>
                                    </li>
                                    <li>
                                        <p>Company</p>
                                        <div>
                                            <img className='whiteColor' src={arrowLight} alt="" />
                                            <img className='redColor' src={arrowDark} alt="" />
                                        </div>
                                    </li>
                                    <li className='dropDown' 
                                    onMouseOver={ () => {
                                        this.setState({isDropDownMenuClosed: false})
                                    }}
                                    onMouseOut={ () => {
                                        this.setState({isDropDownMenuClosed: true})
                                    }}
                                    >
                                        <p>Connect<span>
                                            <img className='whiteColor' style={this.state.isDropDownMenuClosed === true ?
                                            dropArrowStylesDown :
                                            dropArrowStylesUp
                                            }
                                            src={arrowLight} alt="" />
                                            <img className='redColor'  style={this.state.isDropDownMenuClosed === true ?
                                            dropArrowStylesDown :
                                            dropArrowStylesUp
                                            }
                                            src={arrowDark} alt="" />

                                        </span></p>
                                        

                                        <ul className='nested' style={{display: this.state.isDropDownMenuClosed === true ? 'none' : 'flex'}}>
                                            <li>Contact</li>
                                            <li>Newsletter</li>
                                            <li>LinkedIn</li>
                                        </ul>
                                    </li>
                                </ul>
                                <hr />
                                <div className="navBarButtons">
                                    <button>Login</button>
                                    <button>Sign Up</button>
                                </div>
                            </div>
                            <div className="burger" onClick={
                               () => {
                                   this.setState(
                                       {
                                        desktopView: this.state.desktopView === true ? false : true,
                                        isBurgerMenuClosed: this.state.isBurgerMenuClosed === true ? false : true
                                    }
                                    )
                               } 
                            }>
                                <div style={
                                    this.state.isBurgerMenuClosed === true ? styleFirstDefault : styleFirstAnime
                                }></div>

                                <div style={
                                    this.state.isBurgerMenuClosed === true ? styleSecondDefault : styleSecondAnime
                                }></div>

                                <div style={
                                    this.state.isBurgerMenuClosed === true ? styleThirdDefault : styleThirdAnime
                                }></div>
                            </div>
                        </nav>
                        <main>
                            <h1>A modern publishing platform</h1>
                            <h2>Grow your audience and build your online brand</h2>
                            <div className="homeButtons">
                                <button>Start For Free</button>
                                <button>Learn More</button>
                            </div>
                        </main>
                        <div className="hideThePattern centerSections">
                            <div className="pageContainer makeRelative">
                                <img className='homePattern' src={homePattern} alt="" />
                            </div>
                        </div>
                    </div>

                </header>
            </>
        )
    }
}

export default Home