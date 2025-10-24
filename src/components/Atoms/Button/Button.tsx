import React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-all ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
