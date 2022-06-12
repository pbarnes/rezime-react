import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'uno.css'
import './index.css'

const root = document.getElementById('root')
if (!root) {
  throw new Error('#root node not found!')
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
