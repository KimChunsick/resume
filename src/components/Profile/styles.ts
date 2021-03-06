import styled from 'styled-components'

export const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;

  & > p:not(:last-child) {
    margin-bottom: 1.25rem;
  }

  @media print {
    img {
      display: none;
    }
  }
`

export const DefaultInfo = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 3rem;

  @media print {
    margin-bottom: 0;
  }
`

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-right: 16px;

  & > h1 {
    margin-bottom: 6px;
  }
  & > h2 {
    margin-bottom: 30px;
  }
`

export const HorizontalRule = styled.hr`
  width: 5rem;
  height: 0;
  border-top: 1px solid white;
  margin-bottom: 1.875;
`

export const ContactBox = styled.div`
  display: inline-flex;
  width: 100%;
  margin-top: 1rem;
  overflow-x: auto;

  & > :not(:last-child) {
    margin-right: 1rem;
  }

  @media print {
    display: none;
  }
`

export const MyCharacter = styled.img`
  width: 100%;
  max-width: 11rem;
  margin-left: auto;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`

export const ContactMethod = styled.a`
  color: white;
  text-decoration: none;
`
