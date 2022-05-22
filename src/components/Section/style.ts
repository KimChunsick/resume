import styled from 'styled-components'

export const Wrapper = styled.section`
  margin-top: 5rem;

  h3 {
    margin-bottom: 1.5rem;
  }

  @media print {
    margin-top: 3rem;
    break-before: avoid;
  }
`

export const HorizontalRule = styled.hr`
  width: 100%;
  height: 0;
  border-top: 2px solid white;
  margin-bottom: 2.5rem;

  @media print {
    border-color: black;
  }
`

export const Content = styled.div`
  & > :not(:last-child) {
    margin-bottom: 1.5rem;
  }
`
