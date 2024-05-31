import React from 'react'
import ListContent from '../ListContent/ListContent'
import { Book } from '../../../../types/books'

type Props = {
  books: Book[]
}

export default function ListItems({books}: Readonly<Props>) {
  return (
    <ul>
      {books.map((book) => (
        <ListContent book={book} key={book.title}/>
      ))}
    </ul>
  )
}