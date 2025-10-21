import { useState } from "react";
import Navbar from "@/components/Navbar";
import MessCard from "@/components/MessCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, SlidersHorizontal } from "lucide-react";

const BrowseMesses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const allMesses = [
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
    },
    {
      id: "4",
      name: "Healthy Bites Mess",
      location: "Jumeirah",
      rating: 4.6,
      hygieneRating: 4.7,
      priceFrom: 50,
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
      tags: ["Healthy", "Organic", "Keto-Friendly"],
      distance: "4.0 km away"
    },
    {
      id: "5",
      name: "North Spice Express",
      location: "Al Barsha",
      rating: 4.5,
      hygieneRating: 4.6,
      priceFrom: 38,
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80",
      tags: ["North Indian", "Spicy", "Value"],
      distance: "5.2 km away"
    },
    {
      id: "6",
      name: "Mediterranean Fresh",
      location: "Dubai Hills",
      rating: 4.8,
      hygieneRating: 4.9,
      priceFrom: 52,
      image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=800&q=80",
      tags: ["Mediterranean", "Fresh", "Premium"],
      distance: "6.1 km away"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />
      
      <div className="container py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Discover Messes</h1>
          <p className="text-muted-foreground text-lg">Find the perfect mess subscription for your daily meals</p>
        </div>

        {/* Search & Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name, cuisine, or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select defaultValue="distance">
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="distance">Nearest First</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
            
            <Button variant="outline" className="w-full md:w-auto">
              <SlidersHorizontal className="h-4 w-4" />
              <span className="hidden sm:inline">More Filters</span>
            </Button>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{allMesses.length}</span> messes near you
          </p>
        </div>

        {/* Mess Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allMesses.map((mess) => (
            <MessCard key={mess.id} {...mess} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseMesses;
