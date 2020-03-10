// ROOT COMPONENTS
import React from 'react' // utama di tulis

import SearchBar from './SearchBar'

// membuat komponen berbasis class
class App extends React.Component { // utama di tulis

    // Function yang wajib ada, apa yang ingin kita tampilkan, akan kita tulis di sini
    // Funtion render hanya boleh me-return satu buah tag html
    render() {
        return (
            // kode JSX

            <div className='container'>
                <h1 className="text-center my-3"> REACT 101 </h1>
                <SearchBar />
            </div>
        )
    }
}

// Karena akan di import di file lain
export default App // utama di tulis


















// React Hooks