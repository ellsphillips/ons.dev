import styled from 'styled-components'

export const Container = styled.div`
  padding: 2rem;
  background-color: hsl(var(--clr-grey-700));
  border-radius: 1rem;

  @media (min-width: 1024px) {
    margin-left: 32rem;
  }
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Link = styled.div`
  margin-top: 2rem;
  font-size: 3rem;
  color: #ffd866;
  text-decoration: none;
`