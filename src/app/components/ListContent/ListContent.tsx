import { Book } from "../../../../types/books"

type Props = {
  book: Book
}
export default function ListContent({book}: Props) {
  return (
    <li>{book.title}</li>
  )
}