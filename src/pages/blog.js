import React from 'react';
import Layout from '../components/Layout';
import { useStaticQuery, graphql, Link } from 'gatsby';
import * as blogStyles from './blog.module.scss'

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(
        sort: {
      publishedDate: DESC,
    }
      ) {
        edges {
          node {
              title
              slug
              publishedDate(formatString: "MMMM,Do,YYYY")
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map((edge) => {
          return (
            <li className={blogStyles.post}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.publishedDate}</p>
              </Link>
            </li>

          )
        })}
      </ol>
    </Layout>
  );
};


export default Blog;
