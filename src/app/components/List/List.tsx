import { Books } from "../../../../types/books"
import ListContent from "../ListContent/ListContent"

type Props = {
  books: Books[]
}

export default function List({books}: Readonly<Props>) {
  return (
  <ul>
    {
      books.map(({title}) => <ListContent title={title} key={title} />)
    }
  </ul>
  )
}