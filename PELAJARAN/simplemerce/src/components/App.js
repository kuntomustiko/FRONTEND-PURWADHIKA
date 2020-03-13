import React, {
    Component
} from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

// Components
import Header from './Header'
import Home from './Home'
import Register from './Register'
import Login from './Login'

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
                </div>
            </BrowserRouter>
        )
    }
}

export default App