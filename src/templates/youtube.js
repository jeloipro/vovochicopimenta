// https://getbootstrap.com/docs/5.0/layout/columns/
import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Icons from "../components/Icons"

export const pageQuery = graphql`
  query YoutubeQuery($id: String!){
		markdownRemark(id: { eq: $id }) {
      id
			html
			excerpt(pruneLength: 140)
      frontmatter {
        title
      }
    }
  }
`
const YoutubePage = ({ data }) => {
	const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark

	return (
		<Layout className="page">
			<SEO
				title={frontmatter.title}
				description={excerpt}
			/>
			<div className="wrapper">
				<h1>{frontmatter.title}</h1>
				<article dangerouslySetInnerHTML={{ __html: html }} />
			</div>

			<div className="col-6">
				<ul class="list-group">
					<li class="list-group-item"><Icons.Email className="w-25 text-danger" />Email</li>
					<li class="list-group-item"><Icons.Telegram className="w-25 text-danger" />Telegram</li>
					
					<li class="list-group-item">Youtube</li>
				</ul>
			</div>

		</Layout>
	)
}

export default YoutubePage