import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {
    addCustomerAction,
    fetchUsersAction,
    removeAllCustomersAction,
    removeCustomerAction
} from "./store/customerReducer";
import {asyncAddCashAction, asyncGetCashAction} from "./store/cashReducer";

function App() {

    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash)
    const customers = useSelector(state => state.customers.customers)


    const addCash = () => {
        dispatch(asyncAddCashAction())
    }

    const getCash = () => {
        dispatch(asyncGetCashAction())
    }

    const addCustomer = (name) => {
        const customer = {
            name: name,
            id: Date.now()
        }
        dispatch(addCustomerAction(customer))
    }

    const removeCustomer = (id) => {
        dispatch(removeCustomerAction(id))
    }

    const removeAllCustomers = () => {
        dispatch(removeAllCustomersAction())
    }

    return (
        <div className="App">
            <div className="counter-group">
                <button className={'btn'} onClick={() => addCash()}>+5</button>
                <div style={{fontSize: "2rem"}}>{cash}</div>
                <button className={'btn'} onClick={() => getCash()}>-5</button>
            </div>
            <div>
                <button className={'btn'} onClick={() => addCustomer(prompt())}>Добавить клиента</button>
                <button className={'btn'} onClick={() => dispatch(fetchUsersAction())}>Получить клиентов из базы</button>
                <button className={'btn'} onClick={removeAllCustomers}>Очистить</button>
                {
                    customers.length > 0 ?
                        <div>
                            {customers.map(customer => <div key={customer.id} onClick={() => removeCustomer(customer.id)}>{customer.name}</div>)}
                        </div>
                        :
                        <div style={{fontSize: '1rem', marginTop: '20px'}}>
                            Клиенты отсутствуют
                        </div>
                }
            </div>
        </div>
      );
}

export default App;
