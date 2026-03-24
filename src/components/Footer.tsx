const Footer = () => {
  return (
    <footer className="py-8 px-6 sm:px-10 lg:px-20 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <span className="text-lg font-extrabold tracking-tight text-foreground">IM</span>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Ibrahim Mahmud. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
