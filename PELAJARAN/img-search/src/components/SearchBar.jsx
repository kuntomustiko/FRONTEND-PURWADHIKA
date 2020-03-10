import React from 'react'


class SearchBar extends React.Component {
    // setiap komponen memiliki penyimpanan data sendiri
    // Tempat penyimpanan data untuk komponen SearchBar
    // state = { images: [] }

    onSubmitForm = (event) => {
        // Agar halaman tidak me-refresh / reload
        event.preventDefault()

        this.props.onSearch(this.keyword.value)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitForm} className="form-group">
                    <input ref={(input) => { this.keyword = input }} className="form-control" type="text" />
                </form>


            </div>
        )
    }
}

export default SearchBar