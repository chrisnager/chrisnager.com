import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import Projects from '../components/projects.mdx'

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" keywords={[`gatsby`, `application`, `react`]} />
    <Hero children="Hmm…" />
    <Projects />
  </Layout>
)

export default ProjectsPage
