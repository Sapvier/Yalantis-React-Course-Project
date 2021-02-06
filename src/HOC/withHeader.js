import React from 'react';
import NavBar from "../components/header/NavBar";



const withHeader = (WrappedComponent)  => props => {
    return (
        <>
            <NavBar/>
            <WrappedComponent {...props}/>
        </>
    );
};


export default withHeader;
