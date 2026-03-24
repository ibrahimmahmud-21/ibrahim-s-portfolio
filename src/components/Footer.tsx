const Footer = () => {
  return (
    <footer className="py-10 px-6 sm:px-10 lg:px-20 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
          <span className="text-xs font-bold text-primary-foreground tracking-tight">IM</span>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Ibrahim Mahmud. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
