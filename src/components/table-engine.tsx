import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { ReactNode } from 'react'

interface TableEngineProps<T extends string> {
  data: {
    label: string
    type: T
    data: T[]
  }[]
  cellRender: (type: T) => ReactNode
}

export function TableEngine<T extends string>(props: TableEngineProps<T>) {
  const { data, cellRender } = props
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {data.map(({ label, type }) => (
            <TableHead key={type}>{label}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data[0].data.map((_, rowIndex) => (
          <TableRow key={rowIndex}>
            {data.map(({ type }) => (
              <TableCell key={type}>{cellRender(type)}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
