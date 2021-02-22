import React from 'react';
import NavBar from "../components/header/NavBar";
import Footer from "../components/footer/Footer";


const withHeaderAndFooter = (WrappedComponent) => props => {
    const {location} = props
    const withFooter = ['/myproducts', '/'].includes(location.pathname)
    const myProducts = ['/myproducts'].includes(location.pathname)
    const isEditable = true

    if (myProducts) return (
        <>
            <NavBar/>
            <WrappedComponent {...props}/>
            {withFooter && <Footer isEditable={isEditable}/>}
        </>
    );
    else return (
        <>
            <NavBar/>
            <WrappedComponent {...props}/>
            {withFooter && <Footer/>}
        </>
    )
};


export default withHeaderAndFooter;
