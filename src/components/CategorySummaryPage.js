import React from 'react'
import { useParams } from 'react-router-dom'

export default function CategorySummaryPage() {

  let { category } = useParams();

  return (
    <div>It's working!</div>
  )
}