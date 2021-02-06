import React from 'react';
import Footer from "../components/footer/Footer";


const withFooter = (WrappedComponent)  => props => {
    return (
        <>

            <WrappedComponent {...props}/>
            <Footer/>
        </>
    );
};


export default withFooter;