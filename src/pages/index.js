import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import './index.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <main className='main'>
      <div className="home">
        <div className="home--banner">
          <h1>FOLES</h1>
          <picture>
            <img src="https://scontent.flpb2-2.fna.fbcdn.net/v/t1.0-9/s960x960/34319686_1851395388257085_7724713189702631424_o.jpg?_nc_cat=106&ccb=2&_nc_sid=85a577&_nc_ohc=0PMtQtvKKGsAX9hQ9BV&_nc_ht=scontent.flpb2-2.fna&tp=7&oh=8ca89977c03388c96700b20de9b6b989&oe=5FC00923"
              alt="" />
          </picture>
        </div>
        <div className="home--about">
          <p>Hi, I'm HORACIO FLORES or @foles4h <br /><br /> Web Developer <br /><br />Computer Science's student
                </p>
        </div>
      </div>

    </main>


  </Layout>
)

export default IndexPage
