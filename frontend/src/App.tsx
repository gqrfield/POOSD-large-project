//import React from 'react';
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import './App.css';

import LoginPage from './pages/LoginPage';
import CardPage from './pages/CardPage';

function App() {
    return (
        <Router >
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/cards" element={<CardPage />} />
                <Route path="/redirect" element={<Navigate to="/cards" replace />} />
            </Routes>
        </Router>
    );
}

export default App;