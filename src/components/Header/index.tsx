import { LogoMarca } from '../LogoMarca'
import { NewTransactionModal } from '../NewTransactionModal'
import { ButtonContainer, HeaderContainer, HeaderContent } from './styles'
import * as Dialog from '@radix-ui/react-dialog'

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoMarca />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <ButtonContainer>Nova Transação</ButtonContainer>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
