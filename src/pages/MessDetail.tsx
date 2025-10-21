import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import MobileHeader from "@/components/MobileHeader";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, MapPin, ShieldCheck, Clock, Utensils, CheckCircle2 } from "lucide-react";

const MessDetail = () => {
  const { id } = useParams();

  const plans = [
    {
      id: "daily",
      name: "Daily Plan",
      price: 45,
      duration: "per day",
      features: ["2 Meals", "Fresh Daily", "No Commitment", "Cancel Anytime"],
      popular: false
    },
    {
      id: "weekly",
      name: "Weekly Plan",
      price: 280,
      duration: "per week",
      savings: "Save 11%",
      features: ["14 Meals", "Fixed Menu", "Weekly Rotation", "Flexible Pause"],
      popular: true
    },
    {
      id: "monthly",
      name: "Monthly Plan",
      price: 990,
      duration: "per month",
      savings: "Save 26%",
      features: ["60 Meals", "Premium Menu", "Priority Delivery", "Dietician Support"],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle pb-20 md:pb-0">
      <Navbar />
      <MobileHeader />
      
      <div className="container px-4 py-6 md:py-8">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden shadow-luxury">
              <img 
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&q=80"
                alt="Arabian Delights Mess"
                className="w-full h-[250px] md:h-[400px] object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-2 md:gap-4">
              <img 
                src="https://images.unsplash.com/photo-1567337710282-00832b415979?w=400&q=80"
                alt="Kitchen view"
                className="rounded-lg h-16 md:h-24 w-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
              />
              <img 
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80"
                alt="Meal prep"
                className="rounded-lg h-16 md:h-24 w-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
              />
              <img 
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&q=80"
                alt="Dining area"
                className="rounded-lg h-16 md:h-24 w-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
              />
            </div>
          </div>

          <div className="space-y-4 md:space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="success" className="text-[10px] md:text-xs">
                  <ShieldCheck className="h-3 w-3 mr-1" />
                  A+ Hygiene
                </Badge>
                <Badge variant="luxury" className="text-[10px] md:text-xs">Premium</Badge>
              </div>
              <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-3">Arabian Delights Mess</h1>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground mb-3 md:mb-4 text-sm md:text-base">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>Business Bay, Dubai</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 mr-1 fill-accent text-accent" />
                  <span className="font-semibold text-foreground">4.8</span>
                  <span className="ml-1">(245 reviews)</span>
                </div>
              </div>
              <p className="text-sm md:text-lg text-muted-foreground">
                Experience authentic Arabian cuisine with a modern twist. Our mess specializes in 
                traditional dishes prepared with premium ingredients.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 md:gap-4">
              <Card>
                <CardContent className="pt-6 text-center">
                  <Clock className="h-6 w-6 mx-auto mb-2 text-accent" />
                  <p className="font-semibold">1.2 km</p>
                  <p className="text-xs text-muted-foreground">Distance</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Utensils className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <p className="font-semibold">2-3 Meals</p>
                  <p className="text-xs text-muted-foreground">Per Day</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <ShieldCheck className="h-6 w-6 mx-auto mb-2 text-success" />
                  <p className="font-semibold">5.0/5.0</p>
                  <p className="text-xs text-muted-foreground">Hygiene</p>
                </CardContent>
              </Card>
            </div>

            <div className="flex gap-2 md:gap-3">
              <Button variant="hero" size="lg" className="flex-1 text-sm md:text-base">
                Subscribe Now
              </Button>
              <Button variant="outline" size="lg" className="text-sm md:text-base">
                Contact
              </Button>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="plans" className="mb-8 md:mb-12">
          <TabsList className="grid w-full grid-cols-3 text-xs md:text-sm">
            <TabsTrigger value="plans">Subscription Plans</TabsTrigger>
            <TabsTrigger value="menu">Sample Menu</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          
          <TabsContent value="plans" className="mt-4 md:mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {plans.map((plan) => (
                <Card 
                  key={plan.id} 
                  className={`relative ${plan.popular ? 'border-accent shadow-luxury' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge variant="luxury" className="shadow-sm">Most Popular</Badge>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription>
                      <span className="text-3xl font-bold text-foreground">AED {plan.price}</span>
                      <span className="text-muted-foreground"> {plan.duration}</span>
                    </CardDescription>
                    {plan.savings && (
                      <Badge variant="success" className="w-fit mt-2">{plan.savings}</Badge>
                    )}
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <CheckCircle2 className="h-4 w-4 mr-2 text-success" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      variant={plan.popular ? "hero" : "outline"} 
                      className="w-full"
                    >
                      Choose Plan
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="menu" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>This Week's Menu</CardTitle>
                <CardDescription>Sample dishes from our rotating weekly menu</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center">
                      <Utensils className="h-4 w-4 mr-2 text-accent" />
                      Lunch
                    </h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Chicken Mandi with Saffron Rice</li>
                      <li>• Lamb Kabsa with Fresh Salad</li>
                      <li>• Grilled Fish with Tahini Sauce</li>
                      <li>• Vegetable Biryani</li>
                      <li>• Mixed Grilled Platter</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center">
                      <Utensils className="h-4 w-4 mr-2 text-accent" />
                      Dinner
                    </h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Shawarma Plate with Garlic Sauce</li>
                      <li>• Hummus & Falafel Bowl</li>
                      <li>• Mixed Grill with Arabic Bread</li>
                      <li>• Lentil Soup with Fresh Herbs</li>
                      <li>• Fattoush Salad with Grilled Chicken</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <Card key={i}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg">Excellent Service!</CardTitle>
                        <CardDescription>by Customer {i}</CardDescription>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-accent text-accent" />
                        <span className="ml-1 font-semibold">4.8</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Great food quality and very hygienic. The delivery is always on time and the 
                      staff is professional. Highly recommended for daily workers!
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <BottomNav />
    </div>
  );
};

export default MessDetail;
