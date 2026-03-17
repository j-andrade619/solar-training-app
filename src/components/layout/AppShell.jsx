import Header from './Header'

function AppShell({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div>{children}</div>
    </div>
  )
}

export default AppShell
