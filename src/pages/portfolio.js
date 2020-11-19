import React from 'react'
import Card from '../components/card'
import Layout from '../components/layout'
import SEO from '../components/seo'
import './portfolio.css'

function portfolio() {
    return (
        <Layout>
            <SEO title="Portfolio" />
            {/* <h2>Personal Projects</h2> */}

            <div className="portfolio">
                <h3>
                    Some works and personal projects
            </h3>
                <Card />
            </div>





        </Layout>
    )
}

export default portfolio
