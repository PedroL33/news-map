import React from 'react';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Spinner from './spinner';
import Error from './error';
import Map from './map';
import Searchbar from './searchbar';

const Dashboard = () => {

    return (
        <div>
            <Map />
            <Searchbar />
        </div>
    )
}

export default Dashboard;