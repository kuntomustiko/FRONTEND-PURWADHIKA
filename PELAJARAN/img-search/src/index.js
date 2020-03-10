// React, untuk memproses kode menjadi sebuah komponen
import React from 'react'
// Digunakan untuk memanipulasi komponen / menghubungkan App.js ke Index.html
import ReactDOM from 'react-dom'
// Extension .js  tidak wajib di tulis
import App from './components/App.jsx'

// ReactDOM.render(komponen, target)
ReactDOM.render(<App />, document.getElementById('root'))