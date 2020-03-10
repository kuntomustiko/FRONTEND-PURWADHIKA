// ROOT COMPONENTS
import React from 'react' // utama di tulis

import axios from 'axios'

import SearchBar from './SearchBar'
import ImageList from './ImageList'

// membuat komponen berbasis class
class App extends React.Component { // utama di tulis

    state = {
        images: []
    }

    onSearch = (keyword) => {
        // Akses Unsplash API
        // Setelah melakukan request, akan running function 'then'
        // 'then' menerima function dengan satu parameter 'res'
        // 'res' akan berisi 'respon' dari API
        // Data yang kita mau akan berada di property 'data' dari object 'res'
        // Data akan ada di 'res.data'
        axios.get(
            'https://api.unsplash.com/search/photos',
            {
                headers: {
                    Authorization: 'Client-ID OrX7MqcBbfdod-OZByhrYxj97mOxZG8q4fufhya06S8'
                },
                params: {
                    query: keyword,
                    per_page: 15
                }
            }
            // respon dari request ('res') disimpan ke 'state'
        ).then((res) => {
            console.log(res.data);

            // setState digunakan untuk meng-update 'state'
            // Mengubah state dengan data dari res.data
            this.setState({ images: res.data.results })
        })
    }

    // Function yang wajib ada, apa yang ingin kita tampilkan, akan kita tulis di sini
    // Funtion render hanya boleh me-return satu buah tag html
    render() {
        return (
            // kode JSX
            <div className='container'>
                <h1 className="text-center my-3"> REACT 101 </h1>
                {/* asd -> property */}
                <SearchBar onSearch={this.onSearch} />
                <ImageList images={this.state.images} />
            </div>
        )
    }
}

// Karena akan di import di file lain
export default App // utama di tulis


















// React Hooks