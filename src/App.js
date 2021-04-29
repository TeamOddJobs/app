import React from 'react';
import './App.css';
import ItemHeader from './components/itemheader';
import ItemList from './components/itemlist';
import Item from './components/item';
import Authentication from './components/authentication';
import buy from './components/buy';
import Reciept from './components/Reciept';
import {HashRouter, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './stores/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <HashRouter>
          <div>
            <ItemHeader />
            <Route exact path="/" render={()=><ItemList />}/>
            <Route exact path="/itemlist" render={()=><ItemList />}/>
            <Route exact path="/item/:itemId" render={()=><Item />}/>
            <Route path="/signin" render={()=><Authentication />}/>
            //<Route path="/buy" render={()=><buy />}/>
            //<Route path="/Reciept" render={()=><Reciept />}/>
          </div>
        </HashRouter>
      </Provider>
    </div>
  );
}

export default App;
