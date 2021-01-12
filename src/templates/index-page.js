/** @jsx jsx */
import { jsx } from 'theme-ui'
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { RiArrowRightSLine } from "react-icons/ri"

import Layout from "../components/layout"
import BlogListHome from "../components/blog-list-home"
import SEO from "../components/seo"

// import icons
import { FaInstagram } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
//import { FaBlogger } from "react-icons/fa"
import { FaTelegram } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"
import { FaCcPaypal } from "react-icons/fa"
// <span>    </span><a class="icon -center" href="" target="_blank"><FaCcPaypal /></a>


export const pageQuery = graphql`
  query HomeQuery($id: String!){
		markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        tagline
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 480, maxHeight: 380, quality: 80, srcSetBreakpoints: [960, 1440]) {
              ...GatsbyImageSharpFluid
            }
            sizes {
              src
            }
          }
        }
        cta {
          ctaText
          ctaLink
        }
      }
    }
  }
`

const HomePage = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const Image = frontmatter.featuredImage ? frontmatter.featuredImage.childImageSharp.fluid : ""
	return (
		<Layout>
      <SEO/>
      <div className="home-banner grids col-1 sm-2">
        <div>
          <h1 class="title">{frontmatter.title}</h1>
          <p 
            class="tagline"
            sx={{
              color: 'muted'
            }}
          >
            {frontmatter.tagline}
          </p>
          <div className="description" dangerouslySetInnerHTML={{__html: html}}/>
          <Link 
            to={frontmatter.cta.ctaLink} 
            className="button"
            sx={{
              variant: 'links.button'
            }}
          >
            {frontmatter.cta.ctaText}<span class="icon -right"><RiArrowRightSLine /></span>
          </Link>

          <ul id="navEloi" >
            <li><a  class="icon -center" href="https://www.vovochicopimenta.cyou/instagram" target="_blank" rel="noopener noreferrer"><FaInstagram size={25} style={{ fill: '#c40621' }} /></a>     </li>
            <li><a class="icon -center" href="https://www.vovochicopimenta.cyou/youtube" target="_blank" rel="noopener noreferrer"><FaYoutube size={30} style={{ fill: '#c40621' }}/></a>     </li>
            <li><a class="icon -center" href="https://www.vovochicopimenta.cyou/facebook" target="_blank" rel="noopener noreferrer"><FaFacebook size={30} style={{ fill: '#c40621' }}/></a>     </li>
            <li><a class="icon -center" href="https://www.vovochicopimenta.cyou/telegram" target="_blank" rel="noopener noreferrer"><FaTelegram size={30} style={{ fill: '#c40621' }}/></a>     </li>
            <li><a class="icon -center" href="https://www.vovochicopimenta.cyou/facasuadoacao" target="_blank" rel="noopener noreferrer"><FaCcPaypal size={30} style={{ fill: '#c40621' }}/></a>     </li>
          </ul> 
        </div>
        <div>
          {Image ? (
            <Img 
              fluid={Image} 
              alt={frontmatter.title + ' - Featured image'}
              className="featured-image"
            />
          ) : ""}
        </div>
      </div>
      <BlogListHome/>
    </Layout>
	)
}

export default HomePage
