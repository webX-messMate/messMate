import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin, ShieldCheck, Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface MessCardProps {
  id: string;
  name: string;
  location: string;
  rating: number;
  hygieneRating: number;
  priceFrom: number;
  image: string;
  tags: string[];
  distance?: string;
}

const MessCard = ({ 
  id, 
  name, 
  location, 
  rating, 
  hygieneRating, 
  priceFrom, 
  image, 
  tags,
  distance 
}: MessCardProps) => {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3 flex gap-2">
          {hygieneRating >= 4.5 && (
            <Badge variant="success" className="backdrop-blur-sm bg-success/90">
              <ShieldCheck className="h-3 w-3 mr-1" />
              A+ Hygiene
            </Badge>
          )}
        </div>
        {distance && (
          <div className="absolute bottom-3 left-3">
            <Badge variant="secondary" className="backdrop-blur-sm bg-card/90">
              <Clock className="h-3 w-3 mr-1" />
              {distance}
            </Badge>
          </div>
        )}
      </div>
      
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg group-hover:text-primary transition-colors">
              {name}
            </CardTitle>
            <CardDescription className="flex items-center mt-1">
              <MapPin className="h-3 w-3 mr-1" />
              {location}
            </CardDescription>
          </div>
          <div className="flex items-center space-x-1 bg-accent/10 px-2 py-1 rounded-lg">
            <Star className="h-4 w-4 fill-accent text-accent" />
            <span className="font-semibold text-sm">{rating}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pb-3">
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between pt-3 border-t">
        <div>
          <p className="text-xs text-muted-foreground">Starting from</p>
          <p className="text-lg font-bold text-primary">
            AED {priceFrom}
            <span className="text-sm font-normal text-muted-foreground">/day</span>
          </p>
        </div>
        <Button variant="hero" size="sm" asChild>
          <Link to={`/mess/${id}`}>View Plans</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MessCard;
