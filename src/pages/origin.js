import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import pic11 from '../assets/images/pic11.jpg'

const Generic = (props) => (
    <div>
        <Helmet>
            <title>Origin - Cloudpeak Studios</title>
            <meta name="description" content="Origin page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Origin</h1>
                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>
                    <p>What is digital services?</p>
                </div>
            </section>
        </div>

    </div>
)

export default Generic
