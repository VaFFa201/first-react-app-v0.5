import React from 'react';
import './Styles/App.css';
import Posts from './pages/Posts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    element={<Posts />}
                />
            </Routes>
        </BrowserRouter>

    );
}

export default App;
