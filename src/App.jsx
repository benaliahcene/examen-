import React , {Component} from "react";
import Menu from './components/Menu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Summary from './components/Summary';
import Users from './components/Users';
import Countries from "./components/Countries";



class App extends Component {
  render() {
      return (
          <BrowserRouter>
              <div className="d-flex flex-column min-vh-100">
                  <Menu />
                  <div className="flex-grow-1">
                      <Routes>
                          <Route path="/summary" element={<Summary />} />
                          <Route path="/users" element={<Users />} />
                          <Route path="/Countries" element={<Countries />} />
                      </Routes>
                  </div>
              </div>
          </BrowserRouter>
      );
  }
}

export default App;