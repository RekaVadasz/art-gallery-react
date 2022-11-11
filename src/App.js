import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './reset.css';
import './App.css';

import Home from './components/Home';
import AllExhibitions from './components/AllExhibitions';
import Artwork from './components/Artwork';
import ExhibitionCollection from './components/ExhibitionCollection';
import Login from './components/Login';
import NoPage from './components/NoPage';


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/home' element={<Home />}/>
                    <Route path='/exhibitions' element={<AllExhibitions />} />
                    <Route path='/exhibitions/:name' element={<ExhibitionCollection />} />
                    <Route path='/artwork/:name' element={<Artwork />} />
                    <Route path='/Login' element={<Login />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
