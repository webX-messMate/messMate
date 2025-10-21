import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import MessCard from "@/components/MessCard";
import { ArrowRight, ShieldCheck, Clock, Star, Utensils } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-food.jpg";

const Index = () => {
  const featuredMesses = [
    {
      id: "1",
      name: "Arabian Delights Mess",
      location: "Business Bay",
      rating: 4.8,
      hygieneRating: 4.9,
      priceFrom: 45,
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
      tags: ["Arabian", "Halal", "Vegetarian Options"],
      distance: "1.2 km away"
    },
    {
      id: "2",
      name: "South Indian Kitchen",
      location: "Dubai Marina",
      rating: 4.7,
      hygieneRating: 4.8,
      priceFrom: 40,
      image: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=800&q=80",
      tags: ["South Indian", "Vegetarian", "Daily Fresh"],
      distance: "2.5 km away"
    },
    {
      id: "3",
      name: "Global Fusion Mess",
      location: "Downtown Dubai",
      rating: 4.9,
      hygieneRating: 5.0,
      priceFrom: 55,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
      tags: ["International", "Premium", "Organic"],
      distance: "3.1 km away"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-90" />
        <div className="relative container py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block">
                <span className="px-4 py-2 rounded-full bg-accent/20 text-accent-foreground text-sm font-semibold backdrop-blur-sm border border-accent/30">
                  Dubai's #1 Mess Subscription Service
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground leading-tight">
                Hygienic, Tasty Meals
                <span className="block text-accent">Delivered Daily</span>
              </h1>
              <p className="text-lg text-primary-foreground/90 max-w-xl">
                Subscribe to curated mess services designed for daily workers in Dubai. 
                Fresh, organized, and delicious meal plans that fit your lifestyle.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="luxury" size="lg" asChild className="shadow-luxury">
                  <Link to="/browse">
                    Explore Messes
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="secondary" size="lg" asChild>
                  <Link to="/dashboard">View My Dashboard</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="rounded-2xl overflow-hidden shadow-luxury">
                <img 
                  src={heroImage} 
                  alt="Premium food presentation" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container py-16">
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="text-center transition-all hover:shadow-card-hover">
            <CardContent className="pt-6">
              <div className="mx-auto w-12 h-12 rounded-full bg-success/10 flex items-center justify-center mb-4">
                <ShieldCheck className="h-6 w-6 text-success" />
              </div>
              <h3 className="font-semibold mb-2">A+ Hygiene</h3>
              <p className="text-sm text-muted-foreground">Certified clean kitchens</p>
            </CardContent>
          </Card>
          
          <Card className="text-center transition-all hover:shadow-card-hover">
            <CardContent className="pt-6">
              <div className="mx-auto w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">On-Time Delivery</h3>
              <p className="text-sm text-muted-foreground">Always fresh & punctual</p>
            </CardContent>
          </Card>
          
          <Card className="text-center transition-all hover:shadow-card-hover">
            <CardContent className="pt-6">
              <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Utensils className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Variety of Cuisines</h3>
              <p className="text-sm text-muted-foreground">Global & local flavors</p>
            </CardContent>
          </Card>
          
          <Card className="text-center transition-all hover:shadow-card-hover">
            <CardContent className="pt-6">
              <div className="mx-auto w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Star className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Top Rated</h3>
              <p className="text-sm text-muted-foreground">4.8+ avg. rating</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Messes */}
      <section className="container py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Messes Near You</h2>
            <p className="text-muted-foreground">Handpicked recommendations based on your location</p>
          </div>
          <Button variant="outline" asChild>
            <Link to="/browse">View All</Link>
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredMesses.map((mess) => (
            <MessCard key={mess.id} {...mess} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-16">
        <Card className="bg-gradient-primary text-primary-foreground overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
          <CardContent className="relative py-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start Your Subscription Today
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Join thousands of satisfied customers enjoying fresh, hygienic meals every day
            </p>
            <Button variant="luxury" size="lg" asChild className="shadow-luxury">
              <Link to="/browse">
                Browse All Messes
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Index;
