import React from 'react'
import Layout from '../components/layout'
import TextLink from '../components/TextLink/TextLink'
import { withPrefix } from 'gatsby'
import styled from 'styled-components'

const Resource = styled.li`
  font-size: 24px;
  color: #2fad1f;
  margin-top: 40px;
  & > a {
    color: #2fad1f;
  }
`

const Description = styled.p`
  font-size: 0.9em;
  text-align: center;
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
    <Description>
      (W.I.P.) Dataset of apple images from{' '}
      <TextLink href="https://isthisapple.me" color="#47ad23">
        isthisapple.me
      </TextLink>
    </Description>
    <Resource>
      <a href={withPrefix('/files/rap.tar.gz')} className={'text-link'}>
        rap.tar.gz
      </a>
    </Resource>
    <Description>Dataset of rap songs</Description>
    <Resource>
      <a href={withPrefix('/files/cpp.tar.gz')} className={'text-link'}>
        cpp.tar.gz
      </a>
    </Resource>
    <Description>Dataset of .cpp files</Description>
  </Layout>
)
