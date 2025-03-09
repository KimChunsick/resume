import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > span {
    margin-bottom: 1.5rem;
  }

  @media print {
    display: block;
  }
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  & > span:first-child {
    margin-right: 1rem;
  }
`

export const UL = styled.ul`
  list-style: disc;
  padding-left: 1.5rem;

  li {
    margin-bottom: 1rem;

    ::marker {
      color: white;
    }
  }
`
