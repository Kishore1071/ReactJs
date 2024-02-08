import './App.css';
import { Routes, Route } from 'react-router-dom';
import { store } from './react-redux/store';
import { Provider } from 'react-redux';
import CustomerGet from './components/customers/CustomerGet';
import CustomerPost from './components/customers/CustomerPost';
import CustomerEdit from './components/customers/CustomerEdit';
import ProductGet from './components/products/ProductGet';
import ProductPost from './components/products/ProductPost';
import ProductEdit from './components/products/ProductEdit';
import OrdersGet from './components/orders/OrdersGet';
import OrdersPost from './components/orders/OrdersPost';
import OrdersEdit from './components/orders/OrdersEdit';
import OrdersView from './components/orders/OrdersView';
import EmployeeAdd from './components/employees/EmployeeAdd';
import EmployeeView from './components/employees/EmployeeView';

function App() {
    return (
        <Provider store={store}>
            <div>
                <Routes>
                    <Route path='/all/customers/' element={<CustomerGet />}/>
                    <Route path='/add/customers/' element={<CustomerPost />}/>
                    <Route path='/edit/customers/:id/' element={<CustomerEdit />}/>
                    <Route path='/all/products/' element={<ProductGet />}/>
                    <Route path='/add/products/' element={<ProductPost />}/>
                    <Route path='/edit/products/:id/' element={<ProductEdit />}/>
                    <Route path='/all/orders/' element={<OrdersGet />}/>
                    <Route path='/add/orders/' element={<OrdersPost />}/>
                    <Route path='/edit/orders/:id/' element={<OrdersEdit />}/>
                    <Route path='/view/orders/:id/' element={<OrdersView />}/>
                    <Route path='/add/employee/' element={<EmployeeAdd />}/>
                    <Route path='/all/employee/' element={<EmployeeView />}/>
                </Routes>
            </div>
        </Provider>
    );
}

export default App;
