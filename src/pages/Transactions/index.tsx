import { Summary } from '../../components/Summary'
import { Table } from './components/Table'
import { SearchForm } from './components/SearchForm'
import { TransactionsContainer } from './styles'

export const Transactions = () => {
  return (
    <TransactionsContainer>
      <Summary />
      <SearchForm />
      <Table />
    </TransactionsContainer>
  )
}
