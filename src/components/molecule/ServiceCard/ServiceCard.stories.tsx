import type { Meta, StoryObj } from "@storybook/react"
import { ServiceCard } from "./ServiceCard"

const meta: Meta<typeof ServiceCard> = {
  title: "Molecules/ServiceCard",
  component: ServiceCard,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof ServiceCard>

export const Default: Story = {
  args: ({
    services: [
      { id: 1, name: "Cambio de Aceite", price: "$80.000" },
      { id: 2, name: "Lavado Premium", price: "$50.000" },
    ],
  } as unknown as Story["args"]),
}
