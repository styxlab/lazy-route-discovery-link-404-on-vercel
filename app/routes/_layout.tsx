import { Outlet } from '@remix-run/react'

export const config = { runtime: 'edge' }

export default function Layout() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <Outlet />
    </div>
  )
}
