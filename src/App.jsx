import { useState } from 'react'

import './App.css'
import SearchForm from './components/SearchForm'
import Display from './components/Display'

function App() {


  return (
    <>
      <div>
        <h1 className='header1'> Movie Collection</h1>
        <SearchForm />
        <Display />
        </div>
    </>
  )
}

export default App
