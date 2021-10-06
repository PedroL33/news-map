import React from 'react';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Spinner from './spinner';
import Error from './error';
import Map from './map';

const Dashboard = () => {
    
    const render = (status) => {
        if (status === Status.LOADING) return <Spinner />;
        if (status === Status.FAILURE) return <Error />;
        return null;
    };

    return (
        <Wrapper apiKey={process.env.GOOGLEMAPS_API_KEY} render={ render }>
            <Map />
        </Wrapper>
    )
}

export default Dashboard;