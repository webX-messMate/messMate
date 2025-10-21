import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { UtensilsCrossed, User, MapPin } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="hidden md:block sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-luxury">
            <UtensilsCrossed className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            MessMate
          </span>
        </Link>

        <div className="flex items-center space-x-1">
          <Button 
            variant={isActive("/") ? "secondary" : "ghost"} 
            size="sm" 
            asChild
          >
            <Link to="/">Home</Link>
          </Button>
          <Button 
            variant={isActive("/browse") ? "secondary" : "ghost"} 
            size="sm" 
            asChild
          >
            <Link to="/browse">Browse Messes</Link>
          </Button>
          <Button 
            variant={isActive("/dashboard") ? "secondary" : "ghost"} 
            size="sm" 
            asChild
          >
            <Link to="/dashboard">Dashboard</Link>
          </Button>
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm">
            <MapPin className="h-4 w-4" />
            <span className="hidden sm:inline">Dubai</span>
          </Button>
          <Button variant="luxury" size="sm" asChild>
            <Link to="/dashboard">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Profile</span>
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
