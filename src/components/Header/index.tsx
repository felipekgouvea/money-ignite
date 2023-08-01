import { LogoMarca } from '../LogoMarca'
import { ButtonContainer, HeaderContainer, HeaderContent } from './styles'

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoMarca />
        <ButtonContainer>Nova Transação</ButtonContainer>
      </HeaderContent>
    </HeaderContainer>
  )
}
