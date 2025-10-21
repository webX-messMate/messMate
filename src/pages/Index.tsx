import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import MobileHeader from "@/components/MobileHeader";
import BottomNav from "@/components/BottomNav";
import MessCard from "@/components/MessCard";
import { ArrowRight, ShieldCheck, Clock, Star, Utensils, Sparkles, TrendingUp } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-subtle pb-20 md:pb-0">
      <Navbar />
      <MobileHeader />
      
      {/* Hero Section - Mobile Optimized */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-90" />
        <div className="relative container px-4 py-12 md:py-32">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6 animate-fade-in">
              <div className="inline-block">
                <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-accent/20 text-accent-foreground text-xs md:text-sm font-semibold backdrop-blur-sm border border-accent/30">
                  Dubai's #1 Mess Subscription Service
                </span>
              </div>
              <h1 className="text-3xl md:text-6xl font-bold text-primary-foreground leading-tight">
                Hotel Quality Meals,
                <span className="block text-accent">Your Daily Convenience</span>
              </h1>
              <p className="text-sm md:text-lg text-primary-foreground/90">
                Trusted hotel meal plans designed for Dubai's daily workers. Fresh, hygienic, and delicious.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2">
                <Button variant="luxury" size="lg" asChild className="shadow-luxury w-full sm:w-auto">
                  <Link to="/browse">
                    Discover Your Perfect Plan
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="relative animate-scale-in hidden md:block">
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

      {/* Active Plan / CTA Section - Mobile First */}
      <section className="container px-4 -mt-6 md:-mt-12 relative z-10">
        <Card className="bg-gradient-to-br from-card via-card to-accent/5 border-accent/20 shadow-card-hover">
          <CardContent className="p-4 md:p-6">
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="h-4 w-4 text-accent" />
                  <h3 className="font-semibold text-sm md:text-base">New to MessMate?</h3>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Start with a plan that fits your lifestyle
                </p>
              </div>
              <TrendingUp className="h-5 w-5 text-success" />
            </div>
            <Button variant="hero" size="sm" asChild className="w-full md:w-auto">
              <Link to="/browse">
                Explore Hotel Messes
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Why Choose Us - Mobile Optimized */}
      <section className="container px-4 py-8 md:py-16">
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Why Choose MessMate?</h2>
          <p className="text-sm md:text-base text-muted-foreground">Hotel standards meet daily convenience</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          <Card className="text-center transition-all hover:shadow-card-hover active:scale-95">
            <CardContent className="pt-4 md:pt-6 pb-4 md:pb-6 px-2 md:px-6">
              <div className="mx-auto w-10 h-10 md:w-12 md:h-12 rounded-full bg-success/10 flex items-center justify-center mb-2 md:mb-4">
                <ShieldCheck className="h-5 w-5 md:h-6 md:w-6 text-success" />
              </div>
              <h3 className="font-semibold text-xs md:text-base mb-1 md:mb-2">Hotel Hygiene</h3>
              <p className="text-[10px] md:text-sm text-muted-foreground">5-star standards</p>
            </CardContent>
          </Card>
          
          <Card className="text-center transition-all hover:shadow-card-hover active:scale-95">
            <CardContent className="pt-4 md:pt-6 pb-4 md:pb-6 px-2 md:px-6">
              <div className="mx-auto w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent/10 flex items-center justify-center mb-2 md:mb-4">
                <Clock className="h-5 w-5 md:h-6 md:w-6 text-accent" />
              </div>
              <h3 className="font-semibold text-xs md:text-base mb-1 md:mb-2">On-Time</h3>
              <p className="text-[10px] md:text-sm text-muted-foreground">Always punctual</p>
            </CardContent>
          </Card>
          
          <Card className="text-center transition-all hover:shadow-card-hover active:scale-95">
            <CardContent className="pt-4 md:pt-6 pb-4 md:pb-6 px-2 md:px-6">
              <div className="mx-auto w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2 md:mb-4">
                <Utensils className="h-5 w-5 md:h-6 md:w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-xs md:text-base mb-1 md:mb-2">Variety</h3>
              <p className="text-[10px] md:text-sm text-muted-foreground">Global cuisines</p>
            </CardContent>
          </Card>
          
          <Card className="text-center transition-all hover:shadow-card-hover active:scale-95">
            <CardContent className="pt-4 md:pt-6 pb-4 md:pb-6 px-2 md:px-6">
              <div className="mx-auto w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent/10 flex items-center justify-center mb-2 md:mb-4">
                <Star className="h-5 w-5 md:h-6 md:w-6 text-accent" />
              </div>
              <h3 className="font-semibold text-xs md:text-base mb-1 md:mb-2">Top Rated</h3>
              <p className="text-[10px] md:text-sm text-muted-foreground">4.8+ average</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Messes - Mobile Optimized */}
      <section className="container px-4 py-8 md:py-16">
        <div className="flex items-center justify-between mb-4 md:mb-8">
          <div>
            <h2 className="text-xl md:text-3xl font-bold mb-1 md:mb-2">Top-Rated Near You</h2>
            <p className="text-xs md:text-base text-muted-foreground">Trusted hotel partners in Dubai</p>
          </div>
          <Button variant="outline" size="sm" asChild className="text-xs md:text-sm">
            <Link to="/browse">View All</Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {featuredMesses.map((mess) => (
            <MessCard key={mess.id} {...mess} />
          ))}
        </div>
      </section>

      {/* CTA Section - Mobile Optimized */}
      <section className="container px-4 py-8 md:py-16">
        <Card className="bg-gradient-primary text-primary-foreground overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
          <CardContent className="relative py-8 md:py-16 px-4 md:px-6 text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
              Start Your Subscription
            </h2>
            <p className="text-sm md:text-lg mb-6 md:mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Join thousands enjoying fresh, hygienic meals daily
            </p>
            <Button variant="luxury" size="lg" asChild className="shadow-luxury w-full md:w-auto">
              <Link to="/browse">
                Browse All Hotel Messes
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      <BottomNav />
    </div>
  );
};

export default Index;
