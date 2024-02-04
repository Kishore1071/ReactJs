import './App.css';
import { Routes, Route } from 'react-router-dom';
import CustomerGet from './components/customers/CustomerGet';
import CustomerPost from './components/customers/CustomerPost';
import CustomerEdit from './components/customers/CustomerEdit';
import ProductGet from './components/products/ProductGet';
import ProductPost from './components/products/ProductPost';
import ProductEdit from './components/products/ProductEdit';

function App() {
    return (
        <div>
            <Routes>
                <Route path='/all/customers/' element={<CustomerGet />}/>
                <Route path='/add/customers/' element={<CustomerPost />}/>
                <Route path='/edit/customers/:id/' element={<CustomerEdit />}/>
                <Route path='/all/products/' element={<ProductGet />}/>
                <Route path='/add/products/' element={<ProductPost />}/>
                <Route path='/edit/products/:id/' element={<ProductEdit />}/>
            </Routes>
        </div>
    );
}

export default App;
