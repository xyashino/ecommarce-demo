import { TableBody, TableCell } from './ui/table'

import { Table, TableHead, TableHeader, TableRow } from './ui/table'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from './ui/card'

interface CardTableProps<TData extends { id: string }> {
  title: string
  description: string
  headers: {
    key: keyof TData
    label: string
    className?: string
  }[]
  rows: TData[]
  cellRenderer: (
    key: keyof TData,
    data: TData[keyof TData],
    row: TData
  ) => React.ReactNode
}

export function CardTable<TData extends { id: string }>({
  title,
  description,
  headers,
  rows,
  cellRenderer
}: CardTableProps<TData>) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              {headers.map(header => (
                <TableHead key={header.key.toString()}>
                  {header.label}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                {headers.map(({ key, className }) => (
                  <TableCell
                    key={`${row.id}-${key.toString()}`}
                    className={className}
                  >
                    {cellRenderer(key, row[key], row)}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
