import React from 'react'

import QuoteList from '../components/quotes/QuoteList'

const DUMMY_QUOTES = [
  {id: "q1", author: "messi", text: "barcelona1"},
  {id: "q2", author: "pedri", text: "barcelona2"},
  {id: "q3", author: "dejong", text: "barcelona3"},
]

const AllQuotes = () => {
  return (
    <QuoteList quotes={DUMMY_QUOTES}></QuoteList>
  )
}

export default AllQuotes