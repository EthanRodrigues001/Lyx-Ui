export function SiteFooter() {
  return (
    <footer className="border-t border-dashed md:px-8">
      <div className="mx-auto max-w-screen-2xl border-x border-dashed px-4 py-3">
        <div className="text-muted-foreground text-center text-sm leading-loose text-balance md:text-left">
          Built by{" "}
          <a
            href="https://github.com/EthanRodrigues001"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Ethan Rodrigues
          </a>{" "}
          based on{" "}
          <a
            href="https://ui.shadcn.com"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            shadcn-ui
          </a>
          .
        </div>
      </div>
    </footer>
  );
}
