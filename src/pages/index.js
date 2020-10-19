import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import Jobs from "../components/Jobs";
import Projects from "../components/Projects";

export default ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
  } = data;
  return (
    <Layout>
      <SEO title="Home" description="Home Page" />
      <Hero />
      <Jobs />
      <Projects projects={projects} title="projects" showLink />
    </Layout>
  );
};

export const query = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
      nodes {
        github
        id
        description
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`;
