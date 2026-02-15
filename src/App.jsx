import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout";
import HomePage from "./pages/HomePage";
import AllProductPage from "./pages/AllProductPage";
import SingleProductPage from "./pages/SingleProductPage";
import CartPage from "./pages/CartPage";
import ContactPage from "./pages/ContactPage";
import AccountPage from "./pages/AccountPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignUpPage";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Layout>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/allproduct" element={<AllProductPage />}/>
                <Route path="/singleproduct" element={<SingleProductPage />}/>
                <Route path="/cart" element={<CartPage />}/>
                <Route path="/contact" element={<ContactPage />}/>
                <Route path="/account" element={<AccountPage />}/>
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/signup" element={<SignupPage />}/>
            </Routes>
          </Layout>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
