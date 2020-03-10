import React from 'react'
import axios from 'axios'

class SearchBar extends React.Component {
    // setiap komponen memiliki penyimpanan data sendiri
    // Tempat penyimpanan data untuk komponen SearchBar
    state = { images: [] }

    onSubmitForm = (event) => {
        // Agar halaman tidak me-refresh / reload
        event.preventDefault()

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
                    query: 'cat',
                    per_page: 15
                }
            }
            //
        ).then((res) => {
            console.log(res.data);

            // setState digunakan untuk meng-update 'state'
            // Mengubah state dengan data dari res.data
            this.setState({ images: res.data.results })
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitForm} className="form-group">
                    <input className="form-control" type="text" />
                </form>

                <h1>Image berisi {this.state.images.length} data</h1>
            </div>
        )
    }
}

export default SearchBar