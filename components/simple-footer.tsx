export function SimpleFooter() {
  return (
    <footer className="bg-card border-t py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground">© 2025 HUIX-2099. All rights reserved. | Designed & Built in Monrovia, Liberia</p>
        <p className="text-muted-foreground mt-1">Designed and Engineered by Victor E. Coleman</p>
        <p className="text-muted-foreground mt-1">
          <a href="mailto:huixtech2099@gmail.com" className="underline hover:text-foreground">huixtech2099@gmail.com</a>
          {" · "}
          <a href="tel:+231776800064" className="underline hover:text-foreground">+231776800064</a>
          {" · "}
          <a href="tel:+231770499140" className="underline hover:text-foreground">+231770499140</a>
        </p>
      </div>
    </footer>
  )
}
