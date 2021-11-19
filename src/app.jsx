import { React, useContext } from "react";
import { BooksContext } from "./context/books-context";
import { Home } from "./pages/home"
import { Cart } from "./pages/cart"
import { BrowserRouter, Route, Switch } from 'react-router-dom'




function App() {

  const { error, loading } = useContext(BooksContext);

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>Server not found</h1>
  }

  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/deskription" component={Cart} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
