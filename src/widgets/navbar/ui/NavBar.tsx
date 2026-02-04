export const Navbar = () => {

  const appName = "Tutor";

  return (
    <nav className="border-b bg-background px-6 h-16 flex items-center justify-between">
      <div className="font-bold text-xl tracking-tight"> { appName } </div>
      <div className="flex gap-6 text-sm font-medium">
        <a href="/" className="hover:text-primary transition-colors">Home</a>
        <a href="/admin" className="hover:text-primary transition-colors">Admin</a>
      </div>
    </nav>
  )
}