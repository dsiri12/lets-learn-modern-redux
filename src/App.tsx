import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import Layout from "./components/layout/Layout"
import Counter from "./pages/Counter"
import Dogs from "./pages/Dogs"
import Users from "./pages/Users"
import UserDetail from "./pages/UserDetail"
import "./App.css"

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Redirect exact from='/' to='/dogs' />

          <Route exact path='/counter'>
            <Counter />
          </Route>

          <Route path='/dogs'>
            <Dogs />
          </Route>

          <Route exact path='/users'>
            <Users />
          </Route>

          <Route path='/users/:id'>
            <UserDetail />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App