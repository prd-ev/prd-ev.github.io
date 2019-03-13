import React from 'react'
import Layout from '../components/layout'
import { withPrefix } from 'gatsby'
import styled from 'styled-components'

const Resource = styled.li`
  color: #2fad1f;

  & > a {
    color: #2fad1f;
  }
`

const Section = styled.h3`
  margin-bottom: 30px;
`

export default () => (
  <Layout siteName="Resources">
    <Section>Machine Learning</Section>
    <Resource>
      <a href={withPrefix('/files/apple.tar.gz')} className={'text-link'}>
        apple.tar.gz
      </a>
    </Resource>
    <Resource>
      <a href={withPrefix('/files/rap.tar.gz')} className={'text-link'}>
        rap.tar.gz
      </a>
    </Resource>
  </Layout>
)
