import React, {
    Component
} from 'react'

import axios from 'axios'
// Import action creator
import { onLoginUser } from '../actions/index'
// Digunakan untuk menghubungkan komponen dengan redux
import { connect } from 'react-redux'
// akan me-redirect ke alamat tertentu
import { Redirect } from 'react-router-dom'

class Login extends Component {

    onButtonClick = () => {
        let _username = this.username.value
        let _password = this.password.value

        // Get data with parameters
        let link = 'http://localhost:2020/users'
        let data = { username: _username, password: _password }
        axios.get(link, { params: data }).then((res) => {
            if (res.data.length > 0) {
                // res.data[0] = {id: 1, username: 'kunto', password: 'satuduatiga'}
                // user ditemukan : simpan info user ke redux
                // ketika action creator maka gunakan this seperti ini
                this.props.onLoginUser(res.data[0])
            } else {
                // muncul notif jika data user tidak ditemukan : munculkan notif
                // username salah / password salah
                alert('username or password is incorrect')
            }
        })
    }

    render() {
        if (!this.props.uname) {
            return (
                // 'Halaman Login'
                < div className="container-fluid" >
                    <div className="row">
                        <div className=" col-5 mx-auto mt-5 card">
                            <div className="card-body">
                                <div className="border-bottom border-secondary card-title text-center">
                                    <h1>Login</h1>
                                </div>

                                <form className='form-group'>
                                    <div className="card-title ">
                                        <h4>Username</h4>
                                    </div>
                                    <input ref={(input) => { this.username = input }} type='text' className='form-control' />

                                    <div className="card-title ">
                                        <h4>Password</h4>
                                    </div>
                                    <input ref={(input) => { this.password = input }} type='password' className='form-control' />
                                </form>

                                <button className="btn btn-success btn-block" onClick={this.onButtonClick}>Login</button>
                            </div>
                        </div>
                    </div>
                </div >
            )
        } else {
            // return ('redirect ke halam home')
            return <Redirect to="/" />
        }
    }
}

let mapStateToProps = (state) => {
    // property apa yang di return dan dari mana datanya
    return {
        uname: state.auth.username
    }
}



// export default connect(KIRI, KANAN)(Login)
export default connect(mapStateToProps, { onLoginUser })(Login)