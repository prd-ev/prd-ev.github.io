import React from 'react'

import Layout from '../components/layout'
import TextLink from '../components/ui/TextLink'

const IndexPage = () => (
  <Layout>
    <h2 style={{ textAlign: 'center' }}>
      Let's build something great, together
    </h2>
    <h3 style={{ textAlign: 'center' }}>
      Napisz do nas:{' '}
      <TextLink href="mailto:biuro.tkgf@gmail.com" color="#47ad23">
        biuro.tkgf@gmail.com
      </TextLink>
    </h3>
  </Layout>
)

export default IndexPage
