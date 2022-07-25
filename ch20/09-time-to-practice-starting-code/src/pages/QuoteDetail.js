import React, { Fragment } from "react";
import { useParams, Route } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

const DUMMY_QUOTES = [
  {id: "q1", author: "messi", text: "barcelona1"},
  {id: "q2", author: "pedri", text: "barcelona2"},
  {id: "q3", author: "dejong", text: "barcelona3"},
]

const QuoteDetail = () => {

  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => (quote.id === params.quotesId));

  if (!quote) {
    return <NoQuotesFound></NoQuotesFound>
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author}></HighlightedQuote>
      <Route path={`/quotes/${params.quotesId}/comments`}>
        <Comments></Comments>
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
