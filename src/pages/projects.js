import React from 'react'
import { withPrefix } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import TextLink from '../components/TextLink/TextLink'

import projects from '../../projects.json'

import link from '../images/link.svg'

const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 375px) {
    & {
      flex-direction: column;
    }
  }
`

const LinkImage = styled.img`
  width: 25px;
  height: 25px;
  vertical-align: middle;
`

const Link = styled.div`
  padding: 15px;
`

const Projects = () => {
  return (
    <Layout>
      {projects.map(p => {
        return (
          <section style={{ color: '#0e0e0e' }}>
            <h2 style={{ textAlign: 'center', fontSize: '48px' }}>
              <u>{p.title}</u>
            </h2>
            <p style={{ textAlign: 'center' }}>{p.description}</p>
            <Links>
              <Link>
                <TextLink color="#0e0e0e" href="#">
                  {p.github ? p.github : <s>{p.title.toLowerCase()}</s>}
                </TextLink>
                <LinkImage
                  src={withPrefix('/gh.png')}
                  alt="Github"
                  style={{ paddingLeft: '10px' }}
                />
              </Link>

              <Link>
                <LinkImage
                  src={link}
                  alt="Link"
                  style={{ paddingRight: '10px' }}
                />
                <TextLink color="#47ad23" href="#">
                  {p.link ? p.link : <s>{p.title.toLowerCase()}</s>}
                </TextLink>
              </Link>
            </Links>
          </section>
        )
      })}
    </Layout>
  )
}

export default Projects
