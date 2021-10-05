import './App.css';
import Map from './components/map';
import Spinner from './components/spinner';
import Error from './components/error';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import React, { ReactElement } from 'react';

const render = (status) => {
  if (status === Status.LOADING) return <Spinner />;
  if (status === Status.FAILURE) return <Error />;
  return null;
};

function App() {
  
  return (
    <div className="App">
      <Wrapper apiKey={process.env.GOOGLEMAPS_API_KEY} render={ render }>
        <Map />
      </Wrapper>
    </div>
  );
}

export default App;
