import React from 'react';
import './App.css';
import MainPage from "../MainPage/MainPage";
import ReportForm from "../ReportForm/ReportForm";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
    <MainPage />
    <ReportForm />
    </>
  );
}

export default App;