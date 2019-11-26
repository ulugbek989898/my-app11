import React from 'react';
import Homepage from "./pages/homepage/homepage.component";
import {Switch, Route} from "react-router-dom";


const HatsPage = () => (
    <div>
        <h1>Hats Page</h1>
    </div>
);

class  App extends React.Component {
  render() {

    return (
        <div >
            <Switch>
                <Route exact path='/' component={Homepage} />
                <Route exact path='/hats' component={HatsPage} />
            </Switch>
        </div>
    );  }

}

export default App;
