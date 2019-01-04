import React from 'react'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h2 style={{ textAlign: 'center' }}>
      Let's build something great, together
    </h2>
    <h3 style={{ textAlign: 'center' }}>
      Napisz do nas:{' '}
      <a href="mailto:biuro.tkgf@gmail.com" className={'text-link'}>
        biuro.tkgf@gmail.com
      </a>
    </h3>
  </Layout>
)

export default IndexPage
