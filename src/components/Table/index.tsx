import { PriceHighlight, TableContainer } from './styles'

export const Table = () => {
  return (
    <TableContainer>
      <tbody>
        <tr>
          <td width="60%">Desenvolvimento de Site</td>
          <td>
            <PriceHighlight variant="income">R$ 10.000,00</PriceHighlight>
          </td>
          <td>13/04/2023</td>
        </tr>
        <tr>
          <td>Aluguel</td>
          <td>
            <PriceHighlight variant="outcome">-R$ 5.000,00</PriceHighlight>
          </td>
          <td>15/04/2023</td>
        </tr>
      </tbody>
    </TableContainer>
  )
}
