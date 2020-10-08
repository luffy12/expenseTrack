import React from 'react';
import logo from './logo.svg';
import {Header} from './components/Header';
import {Balance} from './components/Balance';
import {AddTransaction} from './components/AddTransaction';
import {TransactionList} from './components/TransactionList';
import './App.css';
import  Todo  from './components/Todo';
import {GlobalProvider} from './context/GlobeState'
function App() {
  return (
    <GlobalProvider>
     <Header/>
     <div className="container">
<Balance/>
<TransactionList/>
<AddTransaction/>

      </div> 
     {/* <Todo/> */}
    </GlobalProvider>
  );
}

export default App;
