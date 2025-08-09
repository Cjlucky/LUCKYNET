import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const Header = () => {
  const linkBase = "px-4 py-2 rounded-full transition-colors";
  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    cn(linkBase, isActive ? "bg-accent text-accent-foreground" : "hover:bg-accent/20 text-foreground");

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border">
      <nav className="container flex items-center justify-between h-16">
        <a href="/" className="font-bold tracking-wide text-lg">LUCKYNET</a>
        <div className="flex items-center gap-2">
          <NavLink to="/" className={getLinkClass} end>Home</NavLink>
          <NavLink to="/about" className={getLinkClass}>About</NavLink>
          <a href="https://cjlucky.blogspot.com" className={cn(linkBase, "hover:bg-accent/20 text-foreground")} target="_blank" rel="noopener noreferrer">Blogs</a>
          <NavLink to="/study" className={getLinkClass}>Study Material</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
