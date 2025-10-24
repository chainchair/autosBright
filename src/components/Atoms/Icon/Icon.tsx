import React from "react"
import { Car, Lightbulb, Shield } from "lucide-react"

interface IconProps {
  name: "car" | "bulb" | "shield"
  size?: number
  className?: string
}

export const Icon: React.FC<IconProps> = ({ name, size = 24, className = "" }) => {
  const icons = {
    car: <Car size={size} className={className} />,
    bulb: <Lightbulb size={size} className={className} />,
    shield: <Shield size={size} className={className} />,
  }

  return icons[name] || null
}
