import { PropsWithChildren } from "react";
import Header from "./Header";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Luckynet · AI Career Counsellor
      </footer>
    </div>
  );
};

export default Layout;
