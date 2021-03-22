import React, { Component } from "react";
import NavbarComponent from "./component/NavbarComponent";
import { BrowserRouter, Route } from "react-router-dom";
import HomeContainer from "./container/HomeContainer";
import CreatePlayerContainer from "./container/CreatePlayerContainer";
import DetailPlayerContainer from "./container/DetailPlayerContainer";
import EditPlayerContainer from "./container/EditPlayerContainer";

export default class App extends Component {
  state = {
    players: [
      {
        username: "pevitapierce123",
        email: "samplepevita@gmail.com",
        experience: "111",
        lvl: "1",
      },

      {
        username: "nikitawilly123",
        email: "samplenikita@gmail.com",
        experience: "222",
        lvl: "2",
      },
      {
        username: "siti123",
        email: "samplesiti@gmail.com",
        experience: "333",
        lvl: "3",
      },

      {
        username: "edi123",
        email: "sample_edi@gmail.com",
        experience: "444",
        lvl: "4",
      },
      {
        username: "nanang123",
        email: "n123@gmail.com",
        experience: "555",
        lvl: "5",
      },
      {
        username: "vino123",
        email: "vinedi@gmail.com",
        experience: "666",
        lvl: "6",
      },
      {
        username: "jajang123",
        email: "jj@gmail.com",
        experience: "777",
        lvl: "7",
      },
      {
        username: "rizki123",
        email: "rzk@gmail.com",
        experience: "888",
        lvl: "8",
      },
      {
        username: "samsul123",
        email: "smsl@gmail.com",
        experience: "999",
        lvl: "9",
      },
      {
        username: "dian123",
        email: "di@gmail.com",
        experience: "1010",
        lvl: "10",
      },
      {
        username: "sule123",
        email: "sul@gmail.com",
        experience: "1111",
        lvl: "11",
      },
      {
        username: "binar23",
        email: "binar@gmail.com",
        experience: "1212",
        lvl: "12",
      },
    ],
  };
  render() {
    return (
      <div>
        <NavbarComponent />
        <BrowserRouter>
          <Route path="/" exact>
            <HomeContainer players={this.state.players} />
          </Route>

          <Route path="/create" exact>
            <CreatePlayerContainer />
          </Route>

          <Route path="/detail/:username" exact>
            <DetailPlayerContainer />
          </Route>

          <Route path="/edit/:id" exact>
            <EditPlayerContainer />
          </Route>
        </BrowserRouter>
      </div>
    );
  }
}
