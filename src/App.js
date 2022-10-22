import React from 'react'
import styled from 'styled-components'
import Market from './components/Market'

const App = () => {
  return (
    <Wrapper>
      <Market />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width : 100%;
  height : 100%;
`

export default App;
