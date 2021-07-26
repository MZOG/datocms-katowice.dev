import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { HelmetDatoCms } from "gatsby-source-datocms";

export default function JAMstack({ data: { site, blog } }) {
  return (
    <Layout>
      <HelmetDatoCms seo={blog.seo} favicon={site.favicon} />
      <p>elo</p>
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
    blog: datoCmsJamstack {
      seo: seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`;
