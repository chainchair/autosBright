type ServiceCardProps = {
  services?: { id: number; name: string; price: string }[]
}

export const ServiceCard = ({ services = [] }: ServiceCardProps) => {
  return (
    <div>
      {services.length > 0 ? (
        services.map((service) => (
          <div key={service.id}>
            <h3>{service.name}</h3>
            <p>{service.price}</p>
          </div>
        ))
      ) : (
        <p>No hay servicios disponibles</p>
      )}
    </div>
  )
}
