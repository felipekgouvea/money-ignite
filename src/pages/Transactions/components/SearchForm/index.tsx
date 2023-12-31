import { MagnifyingGlass } from 'phosphor-react'
import { SearchFormContainer } from './styles'

export const SearchForm = () => {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Busque uma transação" />

      <button type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}
