import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about/tos')({
  component: () => <div>Hello /about/tos!</div>
})