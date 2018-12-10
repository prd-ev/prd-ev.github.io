import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'

const A = styled.a`
  color: #47ad23;
`

const IndexPage = () => (
  <Layout>
    <h1 style={{ textAlign: 'center' }}>
      Let's build something great together
    </h1>
    <h3 style={{ textAlign: 'center' }}>
      Napisz do nas:{' '}
      <A href="mailto:biuro.tkgf@gmail.com">biuro.tkgf@gmail.com</A>
    </h3>
  </Layout>
)

export default IndexPage
