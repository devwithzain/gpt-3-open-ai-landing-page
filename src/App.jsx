import React from 'react';
import "./App.scss";
import { Article, Brand, CTA, Feature, Navbar } from "./Components";
import { Blog, Features, Footer, Header, Posibility, WhatGPT3 } from './Container';
const App = () => {
    return (
        <>
            <div className="App">
                <div className="gradient__bg">
                    <Navbar />
                    <Header />
                </div>
                <Brand />
                <WhatGPT3 />
                <Features />
                <Posibility />
                <CTA />
                <Blog />
                <Footer />
            </div>
        </>
    );
};

export default App;