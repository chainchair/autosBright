import React from "react"
import { Button } from "../../Atoms/Button/Button"

export const Header = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white shadow">
      <h1 className="text-2xl font-bold text-red-600">Auto's Bright</h1>
      <nav className="flex gap-6 text-gray-700">
        <a href="#">Home</a>
        <a href="#">Certifications</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </nav>
      <Button>Get Quote</Button>
    </header>
  )
}
