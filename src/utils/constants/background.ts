import styled, { createGlobalStyle } from 'styled-components'

const BackgroundSwitcher = createGlobalStyle`
  body {
    background: ${({ background }) => background || '#ffffff'};
  }
`

export default BackgroundSwitcher
