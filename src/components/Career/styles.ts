import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }

  @media print {
    flex-direction: column;
  }
`

export const CompanyBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 3 1 30%;
  padding-right: 2rem;

  @media screen and (max-width: 1024px) {
    padding-bottom: 2rem;
    border-bottom: 1px solid white;
    margin-bottom: 2rem;
  }
`

export const Company = styled.div`
  position: sticky;
  top: 2.5rem;
  display: flex;
  flex-direction: column;

  & > :first-child {
    margin-bottom: 2rem;
  }
  & > :last-child {
    margin-top: 1.5rem;
  }
`

export const PerformanceBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 7 1 70%;
  gap: 3.5rem;
`

export const Performance = styled.div`
  display: flex;
  flex-direction: column;

  & > span:nth-child(2) {
    margin-top: 0.25rem;
  }

  p {
    margin-top: 1rem;
  }

  & ul {
    margin-top: 1rem;
  }
`
