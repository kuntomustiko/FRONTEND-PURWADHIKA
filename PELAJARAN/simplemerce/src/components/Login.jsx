import React, {
    Component
} from 'react'

import axios from 'axios'
import { onLoginUser } from '../actions/index'
import { connect } from 'react-redux'

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
        return (
            <div className="container-fluid">
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
            </div>
        )
    }
}

// export default connect(KIRI, KANAN)(Login)
export default connect(null, { onLoginUser })(Login)