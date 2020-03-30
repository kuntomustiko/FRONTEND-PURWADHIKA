//  Action Creator = Customers

// funtion login function logout

// res.data[0] = {id: 1, username: 'kunto', password: 'satuduatiga'}
export let onLoginUser = (user) => {
    return {
        type: 'LOGIN_SUCCESS',
        // data yang ingin disimpan ketika action ini digunakan
        payload: {
            id: user.id,
            username: user.username
        }
    }
}

export let onLogoutUser = () => {
    return {
        type: 'LOGOUT_SUCCESS'
    }
}