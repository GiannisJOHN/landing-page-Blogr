import React from 'react'
import laptop from '../../images/product/illustration-laptop-desktop.svg'


//css
import './productStyles.css'

class Product extends React.Component {

    constructor() {
        super()
        this.state = {
            init: true
        }
    }

    render() {
        return (
            <>
              <section aria-label='product information' className="product centerSections">
                  <div className="pageContainer">
                      <div className="productInfo">
                          <div>
                              <img src={laptop} alt="" />
                          </div>
                          <div>
                              <h2 className='smallHeading'>Free, open, simple</h2>
                              <p className='paragraph'>Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting. RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>

                              <h2 className='smallHeading'>Powerful tooling</h2>
                              <p className='paragraph'>Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites. </p>
                          </div>
                      </div>
                  </div>
              </section>
            </>
        );
    }
}

export default Product