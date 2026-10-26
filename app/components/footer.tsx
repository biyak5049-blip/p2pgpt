export function Footer() {
  return (
    <footer className="border-t border-border px-4 py-8 sm:px-6">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Shazia Kareem</p>
        <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
          <a href="#about" className="hover:text-foreground">
            About
          </a>
          <a href="#services" className="hover:text-foreground">
            Services
          </a>
          <a href="#contact" className="hover:text-foreground">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}
