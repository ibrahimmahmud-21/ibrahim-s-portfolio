const Footer = () => {
  return (
    <footer className="py-6 px-5 sm:px-8 border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <span className="text-sm font-bold tracking-tighter text-foreground">IRM</span>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Ibrahim Mahmud. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
