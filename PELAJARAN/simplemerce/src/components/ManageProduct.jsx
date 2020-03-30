import React, { Component } from 'react'
import axios from 'axios'

class ManageProduct extends Component {

    state = {
        products: []
    }


    // akan dirunning 1x dan di running setelah render
    componentDidMount() {

        axios.get(
            'http://localhost:2020/products'
        ).then((res) => {
            this.setState({ products: res.data })
        })

    }

    // Tugas hari sabtu : Render Map
    renderList = () => {
        return this.state.products.map(
            // Lanjutkan disni
        )
    }

    render() {
        return (
            <div className="container">
                <h1 className="text-center display-4">Manage Product</h1>
                <table class="table table-hover text-center mb-5">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderList()}
                    </tbody>
                </table>
                {/* Tugas hari minggu */}
                {/* Input Procduct */}
            </div>
        )
    }
}

export default ManageProduct