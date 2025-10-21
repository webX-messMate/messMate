import { Link, useLocation } from "react-router-dom";
import { Home, Search, Calendar, User } from "lucide-react";

const BottomNav = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/browse", icon: Search, label: "Explore" },
    { path: "/dashboard", icon: Calendar, label: "My Plans" },
    { path: "/profile", icon: User, label: "Profile" },
  ];
  
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-lg border-t border-border/50 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="flex items-center justify-around h-16 px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center flex-1 h-full space-y-1 transition-all duration-300 ${
                active
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <div
                className={`p-2 rounded-xl transition-all duration-300 ${
                  active
                    ? "bg-primary/10 scale-110"
                    : "hover:bg-accent/50"
                }`}
              >
                <Icon
                  className={`h-5 w-5 transition-transform duration-300 ${
                    active ? "scale-110" : ""
                  }`}
                  strokeWidth={active ? 2.5 : 2}
                />
              </div>
              <span
                className={`text-[10px] font-medium transition-all duration-300 ${
                  active ? "opacity-100 font-semibold" : "opacity-70"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
