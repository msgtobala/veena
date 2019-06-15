import React, { Component } from "react";

import "./App.css";
import "./scss/style.css";
import "./scss/normalize.css";
import "./scss/main.css";
import "./scss/custome_audio_video_player.css";
import "./scss/jplayer.blue.monday.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./component/Home";
import Videos from "./component/Videos";
import Shop from "./component/Shop";
import Profile from "./component/Profile";
import Address from "./component/Address";
import Music from "./component/Music";
import Checkout from "./pages/checkout/checkout";
import ProductHistory from "./pages/checkout/ProductHistory/ProductHistory";
import Subscription from "./pages/Subscription/Subscription";
import DetailsPage from './pages/DetailsPage/DetailsPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/videos" component={Videos} />
            <Route path="/shop" component={Shop} />
            <Route path="/profile" component={Profile} />
            <Route path="/address" component={Address} />
            <Route path="/music" component={Music} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/history" component={ProductHistory} />
            <Route path="/subscribe" component={Subscription} />
            <Route path="/details" component={DetailsPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
