import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

export const query = graphql`
  query($slug:String){
  contentfulBlogPost(slug:{eq:$slug}){
    title
    publishedDate(formatString:"MMMM, Do, YYYY")
    body{
          raw
        }
    
  }
}
`

const Blog = (props) => {
  return (
    <Layout>
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      <p>{props.data.contentfulBlogPost.body.raw.scaler}</p>
    </Layout>
  )
}

export default Blog