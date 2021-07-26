import React from "react";
import Layout from "../components/layout";
import Intro from "../components/intro";
import IntroBoxes from "../components/intro-boxes";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql } from "gatsby";

export default function Index({ data: { allPosts, site, blog } }) {
  const heroPost = allPosts.nodes[0];
  const morePosts = allPosts.nodes.slice(1);

  return (
    <Layout>
      <HelmetDatoCms seo={blog.seo} favicon={site.favicon} />
      <Intro />
      <IntroBoxes />
    </Layout>
  );
}

export const query = graphql`
  {
    site: datoCmsSite {
      favicon: faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }
    blog: datoCmsBlog {
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    allPosts: allDatoCmsPost(sort: { fields: date, order: DESC }, limit: 20) {
      nodes {
        title
        slug
        excerpt
        date
        coverImage {
          large: fluid(
            imgixParams: { fm: "jpg" }
            sizes: "(max-width: 1500px) 100vw, 1500px"
          ) {
            ...GatsbyDatoCmsFluid
          }
          small: fluid(
            imgixParams: { fm: "jpg" }
            sizes: "(max-width: 760px) 100vw, (max-width: 1500px) 50vw, 700px"
          ) {
            ...GatsbyDatoCmsFluid
          }
        }
        author {
          name
          picture {
            fixed(
              width: 48
              height: 48
              imgixParams: { fm: "jpg", fit: "crop", sat: -100 }
            ) {
              ...GatsbyDatoCmsFixed
            }
          }
        }
      }
    }
  }
`;
