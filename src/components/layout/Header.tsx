import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { MessageSquare, BookOpen } from "lucide-react";

export default function Header() {
  const linkBase = "px-4 py-2 rounded-full transition-colors";
  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    cn(linkBase, isActive ? "bg-accent text-accent-foreground" : "hover:bg-accent/20 text-foreground");

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border">
      <nav className="container flex items-center justify-between h-16">
        <NavLink to="/" className="font-bold tracking-wide text-lg">LUCKYNET</NavLink>
        <div className="flex items-center gap-4">
          <NavLink to="/study" className={getLinkClass}>
            Study Material
          </NavLink>
          <NavLink to="/youtube" className={getLinkClass}>
            YouTube Channels
          </NavLink>
          <NavLink to="/scholarship" className={cn(linkBase, "hover:bg-accent/20 text-foreground flex items-center gap-2")}>
            <BookOpen size={16} />
            Scholarship
          </NavLink>
          <NavLink to="/about" className={getLinkClass}>
            About
          </NavLink>
          <a 
            href="https://cjlucky.blogspot.com" 
            className={cn(linkBase, "hover:bg-accent/20 text-foreground")} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Blogs
          </a>
          <NavLink 
            to="/chat" 
            className={cn(
              linkBase,
              "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 flex items-center gap-2"
            )}
          >
            <MessageSquare size={16} />
            AI Chatbot
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
