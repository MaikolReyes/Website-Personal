import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navbar, FormContact, Footer } from "./components"
import { Principal, Comunity, Services } from "./sections"

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="services" element={<Services />} />
          <Route path="comunity" element={<Comunity />} />
          <Route path="formContact" element={<FormContact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}
