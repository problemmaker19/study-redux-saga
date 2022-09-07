
const initialState = {
    customers: [],
}

const ADD_CUSTOMER = 'ADD_CUSTOMER'
const ADD_MANY_CUSTOMERS = 'ADD_MANY_CUSTOMERS'
const FETCH_USERS = 'FETCH_USERS'
const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER'
const REMOVE_ALL_CUSTOMERS = 'REMOVE_ALL_CUSTOMERS'

export const customerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CUSTOMER:
            return {...state, customers: [...state.customers, action.payload]}
        case ADD_MANY_CUSTOMERS:
            return {...state, customers: [...state.customers, ...action.payload]}
        case REMOVE_CUSTOMER:
            return {...state, customers: state.customers.filter(customer => customer.id !== action.payload)}
        case REMOVE_ALL_CUSTOMERS:
            return {...state, customers: []}
        default:
            return state
    }
}

export const addCustomerAction = (payload) => ({type: ADD_CUSTOMER, payload})
export const addManyCustomersAction = (payload) => ({type: ADD_MANY_CUSTOMERS, payload})
export const fetchUsersAction = (payload) => ({type: FETCH_USERS, payload})
export const removeCustomerAction = (payload) => ({type: REMOVE_CUSTOMER, payload})
export const removeAllCustomersAction = (payload) => ({type: REMOVE_ALL_CUSTOMERS, payload})