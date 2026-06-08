import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const SITE_URL = "https://samavesa.sk";
const TITLE = "Stránka nenájdená | Samaveša";
const DESCRIPTION =
  "Táto stránka neexistuje alebo bola presunutá. Vráťte sa na úvod a objavte jógové pobyty a blog Samaveša.";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}${location.pathname}`} />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="robots" content="noindex" />
      </Helmet>
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
