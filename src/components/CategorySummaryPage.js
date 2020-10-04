import React from 'react'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

export default function CategorySummary(cookbook) {
  console.log('categorysummary', cookbook)

  const { category } = useParams();

  const history = useHistory();

  return (
    <div>{category}</div>
  )
}