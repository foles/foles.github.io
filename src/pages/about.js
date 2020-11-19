import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import './about.css'
function about() {
    return (
        <Layout>
            <SEO title="About" />
            <div className="about">
                <h2 className="portfolio__title">
                    Hi, I'm Horacio Flores.
            </h2>
                <h3>Who Am I?</h3>
                <p>I'm a web developer from Bolivia, I'm focused in Frontend Developer and you find me in my social networks as <span className="arroba">@foles4h</span></p>
                <h3>Interests</h3>
                <p>I'm in love with technology and software development but I'm focused on Web development. I enjoy learning new things on the internet, Platzi, Udemy, Documentation or YouTube. I have skills in Frontend and Backend, I am a very creative person
                so I really enjoy the Frontend development.

            </p>
                <h3>Skills</h3>

                <img src={require('../images/html.png')} alt="" />
                <img src={require('../images/css.png')} alt="" />
                <img src={require('../images/js.png')} alt="" />
                <img src={require('../images/react.png')} alt="" />
                <img src={require('../images/redux.png')} alt="" />
                <img src={require('../images/angular.png')} alt="" />
                <img src={require('../images/flutter.png')} alt="" />
                <img src={require('../images/github.png')} alt="" />



            </div>



        </Layout>
    )
}

export default about
