import styled from 'styled-components'

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;

  /* @media print {
    page-break-inside: avoid;
    break-before: always;
    & > header {
      padding-top: 0;
    }
  } */
`

export const HorizontalRule = styled.hr`
  width: 100%;
  height: 0;
  border-top: 2px solid white;
  margin-bottom: 1rem;

  /* @media print {
    border-color: black;
  } */
`
