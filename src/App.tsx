import React from 'react';
import {Routes, Route, Link} from "react-router-dom";
import './App.css';
import {MainContent1} from "./mainpage/MainContent1";
import {MainContent} from "./addquestionmultiple/MainContent";
import {QuestionTypeMatching1} from "./addquestionmatching/QuestionTypeMatching1";



export default function App() {
    document.body.style.backgroundColor = '#f6f9fb';
    document.body.style.margin = '0';
    document.body.style.backgroundColor = '#e5e5e5';
    document.body.style.margin = '0';
    return (
        <>
        <Routes>
            <Route path='/' element={<MainContent1/>} />
            <Route path='/MainContent' element={<MainContent/>} />
            <Route path='/QuestionTypeMatching1' element={<QuestionTypeMatching1/>} />
        </Routes>
        </>
    )
}

