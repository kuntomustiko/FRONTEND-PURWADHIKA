import React, {
    Component
} from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

// Components
// tanpa {} karena di export menggunakan kata default
import Header from './Header'
import Home from './Home'
import Register from './Register'
import Login from './Login'

import ManageProduct from './ManageProduct'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div >
                    <Header />
                    {/* exact = membuat agar tidak selalu muncul ketika page lain di klik */}
                    <Route path="/" exact component={Home} />
                    <Route path="/register" component={Register} />
                    <Route path="/login" component={Login} />
                    <Route path="/manageProduct" component={ManageProduct} />
                </div>
            </BrowserRouter>
        )
    }
}

export default App