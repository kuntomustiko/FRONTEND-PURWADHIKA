//  Action Creator = Customers

// funtion login function logout

// res.data[0] = {id: 1, username: 'kunto', password: 'satuduatiga'}
export let onLoginUser = (user) => {
    return {
        type: 'LOGIN_SUCCESS',
        payload: {
            id: user.id,
            username: user.username
        }
    }
}