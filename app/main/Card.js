import React from 'react'
import styled from 'styled-components'

export const Card = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;

  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  transform: ${props => props.inmotion ?
        `rotate(${Math.floor(props.rotatePercentage * 30)}deg) translate3d(${props.xTranslation}px, ${props.yTranslation}px, 0)` : ""
  };

  background: ${props => props.inmotion ? props.background : "inherit"};
  opacity: ${props => props.rotatePercentage}
`
