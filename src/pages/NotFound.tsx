import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "Stránka nenájdená | Samaveša";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Táto stránka neexistuje alebo bola presunutá. Vráťte sa na úvod a objavte jógové pobyty, wellness programy a blog Samaveša.");
    }
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Ups! Stránka nenájdená</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Späť na úvod
        </a>
      </div>
    </div>
  );
};

export default NotFound;
