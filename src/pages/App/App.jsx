import React from 'react'
import Footer from '../../components/Footer'
import AddTodo from '../../containers/AddTodo'
import VisibleTodoList from '../../containers/VisibleTodoList'
import Count from '../../containers/Count'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Count />
    <Footer />
  </div>
)

export default App