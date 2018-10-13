import React from 'react';
import './App.css';
import Routing from './components/AppRoute'
import { Provider } from "react-redux";
import configureStore from './redux/config/configureStore'

const store = configureStore()
const App = () => {
    return(
<Provider store={store}>
<Routing />
</Provider>
    )
}

export default App;
