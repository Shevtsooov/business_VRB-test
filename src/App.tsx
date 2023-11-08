import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { PageNotFound } from './pages/NotFoundPage/NotFoundPage';
import { Articles } from './pages/Articles/Articles';

export const App: React.FC = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route 
          path="articles"
          element={
            <Articles />
          }
        />

        <Route
          path="/"
          element={
            <Navigate to="articles" />
          } 
        />

        <Route
          path="*"
          element={
            <PageNotFound />
          }
        />
      </Routes>
    </>
  );
};

