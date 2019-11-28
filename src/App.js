import React from 'react';
import Homepage from "./pages/homepage/homepage.component";
import {Switch, Route} from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import './App.css';
import Header from "./component/header/header.component";


class  App extends React.Component {
  render() {

    return (
        <div >
            <Header/>
            <Switch>
                <Route exact path='/' component={Homepage} />
                <Route exact path='/shop' component={ShopPage} />
            </Switch>
        </div>
    );  }

}

export default App;
