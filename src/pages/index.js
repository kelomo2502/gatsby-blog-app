import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"


const Index = () => {
  return <Layout>
    <h1>The great gatsby bootcamp</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, dolor.</p>
    <p>Need a developer? <Link to='/contact'>Clike here</Link></p>
  </Layout>
}

export default Index