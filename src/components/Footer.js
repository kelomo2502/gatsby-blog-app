import React from 'react'
import {graphql,useStaticQuery} from 'gatsby'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query{
      site{
        siteMetadata{
          author
        }
      }
    }
  `)
  return (
    <div>
      <p> created by {data.site.siteMetadata.author} &copy; 2022 </p>
    </div>
  )
}

export default Footer