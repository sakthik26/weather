import React from 'react';
import './App.css';
// React Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Imports for Redux
import { Provider } from 'react-redux';
import store from './store';
// Imported Components
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import Search from './components/layout/Search';
import WeatherHeader from './components/layout/WeatherHeader';
import FiveDayForecast from './components/weatherForecasts/FiveDayForecast';
import TemperatureMetrics from './components/layout/TemperatureMetrics';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <main className="main-container">
            <Alert />
            <TemperatureMetrics/>
            <Search />
            <WeatherHeader />
            
            <Switch>

              {/* Route for FiveDayForecast */}
              <Route
                exact
                path="/"
                render={(props) => (
                  <FiveDayForecast />
                )}
              />

            </Switch>
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
