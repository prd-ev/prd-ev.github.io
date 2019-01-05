import React from 'react'
import styled from 'styled-components'

const A = styled.a`
  letter-spacing: 1px;
  color: ${props => props.color || 'black'};
  text-decoration: none;
  padding: 3px;
  padding-left: 5px;
  padding-right: 5px;
  margin-left: 2px;
  margin-right: 2px;
  background-image: linear-gradient(
    to bottom,
    ${props => props.color || 'black'} 50%,
    ${props => props.bgColor || 'white'} 50%
  );
  background-size: 100% 200%;
  background-position: 0 -95%;
  transition: color 0.5s, background-position 0.5s;

  &:hover {
    color: white;
    text-decoration: none;
    background-position: 0 0;
  }
`

const TextLink = props => {
  return (
    <A href={props.href} color={props.color} bgColor={props.bgColor}>
      {props.children}
    </A>
  )
}

export default TextLink
