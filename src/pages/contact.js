import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/Layout'

const Contact = () => {
  return (
    <Layout>
      
      <h1>Our Contact</h1>
      <address>
        8, Lucy Adeoti-Avenue,
        Awoyaya-Lagos
      </address>
      <Link to='/'>Back to Home</Link>
      <p><a href="https://twitter.com/kelomoJs" target='_blank'>my twitter page</a></p>
    </Layout>
  )
}

export default Contact