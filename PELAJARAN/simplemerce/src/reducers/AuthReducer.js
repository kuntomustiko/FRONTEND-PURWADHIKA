// ini salah satu dari division reducers
// reducers adalah sebuah function


// Reducer / Divisi
// state = data dari brankas
// actuib = form dari user
/*  
action = {
    type: 'REGISTRATIONS',
    payload: {
        name: 'John',
        job: 'Doctor'
    }
}
action = {
    type: 'STOR',
    payload: {
        name: 'John',
        job: 3000
    }
}
*/

let init = {
    id: "",
    username: ""
}



export default (state = init, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return { ...state, id: action.payload.id, username: action.payload.username }
            break;
        case 'LOGOUT_SUCCESS':
            break;
        default: // pilihan terakhir
            return state;
    }
}


// let action = {
//     type: 'LOGIN_SUCCESS',
//     payload: {
//         id: "1",
//         username: rochafi
//     }
// }

// let mobil = { name: 'Avanza', seat: 4 }
// let car = { ...mobil, name: 'expander' }
// let car = { name: 'expander', seat: 4 }