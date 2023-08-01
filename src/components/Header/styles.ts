import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 2.5rem 0 7.5rem;

  background-color: ${(props) => props.theme['gray-900']};
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 1100px;

  margin: 0 auto;
`

export const ButtonContainer = styled.button`
  padding: 0.75rem 1.25rem;

  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};

  font-weight: bold;
  border-radius: 4px;

  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['green-700']};
  }
`
