import { Link } from "react-router-dom";
import { UtensilsCrossed, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const MobileHeader = () => {
  return (
    <header className="md:hidden sticky top-0 z-40 w-full bg-background/95 backdrop-blur-lg border-b border-border/50">
      <div className="flex items-center justify-between h-14 px-4">
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-luxury">
            <UtensilsCrossed className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent">
            MessMate
          </span>
        </Link>

        <Button variant="ghost" size="sm" className="h-9 text-xs">
          <MapPin className="h-3.5 w-3.5 mr-1" />
          <span>Dubai</span>
        </Button>
      </div>
    </header>
  );
};

export default MobileHeader;
