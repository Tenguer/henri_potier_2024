import React from 'react'
import ListItems from '../ListItems/ListItems';
import { getBooks } from '../../../../services/api';

export default async function List() {
  const books = await getBooks();

  return (
    <ListItems books={books}/>
  )
}