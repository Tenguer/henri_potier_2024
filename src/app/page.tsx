import { getBooks } from "../../services/api";
import List from "./components/List/List";

export default async function Home() {
  const books = await getBooks()

  return (
    <div>
      <List books={books}/>
    </div>
  );
}
