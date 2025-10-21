import Navbar from "@/components/Navbar";
import MobileHeader from "@/components/MobileHeader";
import BottomNav from "@/components/BottomNav";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDays, Package, Star, Settings, Clock } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle pb-20 md:pb-0">
      <Navbar />
      <MobileHeader />
      
      <div className="container px-4 py-6 md:py-8">
        <div className="mb-6 md:mb-8">
          <h1 className="text-2xl md:text-4xl font-bold mb-1 md:mb-2">My Dashboard</h1>
          <p className="text-muted-foreground text-sm md:text-lg">Manage your subscriptions and preferences</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
          {/* Active Subscription Card */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Active Subscription</CardTitle>
                  <CardDescription>Arabian Delights Mess - Weekly Plan</CardDescription>
                </div>
                <Badge variant="success">Active</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Remaining Meals</p>
                  <p className="text-2xl font-bold">8 of 14 meals</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Renewal Date</p>
                  <p className="font-semibold">Dec 28, 2025</p>
                </div>
              </div>
              
              <Progress value={57} className="h-2" />
              
              <div className="grid grid-cols-2 gap-3 md:gap-4 pt-4">
                <Button variant="hero" className="text-xs md:text-sm">Manage Subscription</Button>
                <Button variant="outline" className="text-xs md:text-sm">Pause Delivery</Button>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <div className="space-y-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium flex items-center">
                  <Package className="h-4 w-4 mr-2 text-primary" />
                  Total Orders
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">42</p>
                <p className="text-xs text-muted-foreground">Since joining</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium flex items-center">
                  <Star className="h-4 w-4 mr-2 text-accent" />
                  Your Rating
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">4.9</p>
                <p className="text-xs text-muted-foreground">As a customer</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Tabs defaultValue="upcoming" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="upcoming">Upcoming Meals</TabsTrigger>
            <TabsTrigger value="history">Order History</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
          </TabsList>
          
          <TabsContent value="upcoming" className="mt-6">
            <div className="space-y-4">
              {[
                { day: "Today", meal: "Lunch", dish: "Chicken Mandi with Saffron Rice", time: "12:30 PM" },
                { day: "Today", meal: "Dinner", dish: "Shawarma Plate with Garlic Sauce", time: "7:00 PM" },
                { day: "Tomorrow", meal: "Lunch", dish: "Lamb Kabsa with Fresh Salad", time: "12:30 PM" },
                { day: "Tomorrow", meal: "Dinner", dish: "Mixed Grill with Arabic Bread", time: "7:00 PM" }
              ].map((item, i) => (
                <Card key={i}>
                  <CardContent className="flex items-center justify-between p-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <CalendarDays className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">{item.dish}</p>
                        <p className="text-sm text-muted-foreground">{item.day} • {item.meal}</p>
                      </div>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{item.time}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="history" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>Your meal delivery history</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex items-center justify-between py-3 border-b last:border-0">
                      <div>
                        <p className="font-medium">Weekly Plan - Week {i}</p>
                        <p className="text-sm text-muted-foreground">Completed on Dec {20 - i}, 2024</p>
                      </div>
                      <Badge variant="secondary">Completed</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="preferences" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="h-5 w-5 mr-2" />
                  Dietary Preferences
                </CardTitle>
                <CardDescription>Customize your meal preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Food Preferences</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Halal</Badge>
                    <Badge>No Pork</Badge>
                    <Badge>Medium Spicy</Badge>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Allergies</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="destructive">Peanuts</Badge>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Delivery Address</h4>
                  <p className="text-muted-foreground">Business Bay, Dubai Marina Walk</p>
                </div>

                <Button variant="luxury" className="w-full">Update Preferences</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      
      <BottomNav />
    </div>
  );
};

export default Dashboard;
