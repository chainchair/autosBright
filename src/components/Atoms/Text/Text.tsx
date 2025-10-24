import React from "react"

interface TextProps {
  children: React.ReactNode
  variant?: "title" | "subtitle" | "body"
  color?: string
  className?: string
}

export const Text: React.FC<TextProps> = ({
  children,
  variant = "body",
  color = "text-gray-700",
  className = "",
}) => {
  const base =
    variant === "title"
      ? "text-3xl font-bold"
      : variant === "subtitle"
      ? "text-xl font-semibold"
      : "text-base"

  return <p className={`${base} ${color} ${className}`}>{children}</p>
}
