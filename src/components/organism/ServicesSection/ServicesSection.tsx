import React from "react"
import { Text } from "../../Atoms/Text/Text"
import { ServiceCard } from "../../molecule/ServiceCard/ServiceCard"

type Service = {
  icon: "car" | "bulb" | "shield";
  title: string;
  description: string;
  features: string[];
};

export const ServicesSection = () => {
  const services: Service[] = [
    {
      icon: "car",
      title: "Full Detailing",
      description: "Complete interior and exterior detailing service for ultimate vehicle care.",
      features: ["Interior deep cleaning", "Exterior wash & wax", "Tire & rim care", "Glass cleaning"],
    },
    {
      icon: "bulb",
      title: "Headlight Restoration",
      description: "Restore cloudy, yellowed headlights to like-new condition.",
      features: ["UV damage repair", "Clarity restoration", "Protective coating", "Improved visibility"],
    },
    {
      icon: "shield",
      title: "Ceramic Coating",
      description: "Premium ceramic coating for long-lasting protection and shine.",
      features: ["9H hardness coating", "Hydrophobic properties", "UV protection", "Easy maintenance"],
    },
  ]

  return (
    <section className="bg-gray-100 py-16 px-8 text-center">
      <Text variant="title" color="text-red-600" className="mb-2">
        Our <span className="text-black">Services</span>
      </Text>
      <Text className="text-gray-500 mb-10">
        Professional auto detailing services designed to protect, restore, and enhance your vehicle's appearance and value.
      </Text>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <ServiceCard key={i} {...service} />
        ))}
      </div>
    </section>
  )
}
