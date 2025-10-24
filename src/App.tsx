import React from "react"
import { Header } from "./components/molecule/Header/Header"
import { ServicesSection } from "./components/organism/ServicesSection/ServicesSection"

export default function App() {
  return (
    <div className="font-sans">
      <Header />
      <ServicesSection />
    </div>
  )
}
