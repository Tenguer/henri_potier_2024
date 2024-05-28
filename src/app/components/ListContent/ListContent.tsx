import React from 'react'

type Props = {
  title: string
}

export default function ListContent({title}: Readonly<Props>) {
  return (
    <li>{title}</li>
  )
}