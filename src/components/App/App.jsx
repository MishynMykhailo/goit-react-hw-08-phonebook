import s from '../App/App.module.css';
import AppBar from '../AppBar/AppBar';
import { Routes, Route } from 'react-router-dom';
import ContactsPage from 'pages/ContactsPage';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import HomePage from 'pages/HomePage';
export const App = () => {
  return (
    <div className={s.div}>
      <AppBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<h1>not Found :C</h1>} />
      </Routes>
    </div>
  );
};
