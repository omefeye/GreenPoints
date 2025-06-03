"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, Bike, Bus, Leaf, LineChart, Recycle, ShoppingBag, Trophy, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Dashboard() {
  const [greenPoints, setGreenPoints] = useState(1250)
  const [stakedPoints, setStakedPoints] = useState(500)
  const [level, setLevel] = useState(3)
  const [progress, setProgress] = useState(65)

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <div className="flex items-center space-x-2">
            <Button>Connect Wallet</Button>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total GreenPoints</CardTitle>
              <Leaf className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{greenPoints} GP</div>
              <p className="text-xs text-muted-foreground">+250 from last week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Staked Points</CardTitle>
              <LineChart className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stakedPoints} GP</div>
              <p className="text-xs text-muted-foreground">Earning 5% APY</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Level</CardTitle>
              <User className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Level {level}</div>
              <p className="text-xs text-muted-foreground">Eco Warrior</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Next Level</CardTitle>
              <Trophy className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{progress}%</div>
              <Progress value={progress} className="h-2" />
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="activities">Activities</TabsTrigger>
            <TabsTrigger value="staking">Staking</TabsTrigger>
            <TabsTrigger value="rewards">Rewards</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              {/* Recent Activity */}
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Your recent eco-friendly actions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="mr-4 rounded-full bg-green-100 p-2 dark:bg-green-800/20">
                        <Bike className="h-4 w-4 text-green-600" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">Cycling to Work</p>
                        <p className="text-sm text-muted-foreground">5.2 km - 20 minutes</p>
                      </div>
                      <div className="text-sm font-medium text-green-600">+25 GP</div>
                    </div>
                    <div className="flex items-center">
                      <div className="mr-4 rounded-full bg-green-100 p-2 dark:bg-green-800/20">
                        <ShoppingBag className="h-4 w-4 text-green-600" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">Eco-Friendly Purchase</p>
                        <p className="text-sm text-muted-foreground">Reusable Water Bottle</p>
                      </div>
                      <div className="text-sm font-medium text-green-600">+15 GP</div>
                    </div>
                    <div className="flex items-center">
                      <div className="mr-4 rounded-full bg-green-100 p-2 dark:bg-green-800/20">
                        <Bus className="h-4 w-4 text-green-600" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">Public Transport</p>
                        <p className="text-sm text-muted-foreground">Bus Ride - 8.5 km</p>
                      </div>
                      <div className="text-sm font-medium text-green-600">+10 GP</div>
                    </div>
                    <div className="flex items-center">
                      <div className="mr-4 rounded-full bg-green-100 p-2 dark:bg-green-800/20">
                        <Recycle className="h-4 w-4 text-green-600" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">Recycling</p>
                        <p className="text-sm text-muted-foreground">Plastic and Paper</p>
                      </div>
                      <div className="text-sm font-medium text-green-600">+5 GP</div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/activities">
                      View All Activities
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Quick Actions */}
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Record your eco-friendly activities</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <Button className="w-full justify-between" variant="outline">
                    Record Cycling
                    <Bike className="ml-2 h-4 w-4" />
                  </Button>
                  <Button className="w-full justify-between" variant="outline">
                    Record Walking
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button className="w-full justify-between" variant="outline">
                    Public Transport
                    <Bus className="ml-2 h-4 w-4" />
                  </Button>
                  <Button className="w-full justify-between" variant="outline">
                    Recycling
                    <Recycle className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/activities">Add New Activity</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>

            {/* Marketplace Preview */}
            <Card>
              <CardHeader>
                <CardTitle>Marketplace Highlights</CardTitle>
                <CardDescription>Eco-friendly products you can purchase with your GreenPoints</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {[
                    {
                      name: "Reusable Water Bottle",
                      price: 50,
                      image: "/bottle2.jpg?height=100&width=100",
                    },
                    {
                      name: "Bamboo Toothbrush",
                      price: 25,
                      image: "/toothbrush.jpeg?height=100&width=100",
                    },
                    {
                      name: "Organic Cotton Tote",
                      price: 35,
                      image: "/tote.jpg?height=100&width=100",
                    },
                    {
                      name: "Solar Power Bank",
                      price: 120,
                      image: "/powerbank2.jpg?height=100&width=100",
                    },
                  ].map((product, i) => (
                    <Card key={i} className="overflow-hidden">
                      <div className="aspect-square w-full bg-muted flex items-center justify-center">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="object-cover"
                          width={444}
                          height={444}
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-medium">{product.name}</h3>
                        <p className="text-sm text-green-600">{product.price} GP</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/marketplace">
                    Visit Marketplace
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="activities" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Activity History</CardTitle>
                <CardDescription>All your eco-friendly activities</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Detailed activity history will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="staking" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Staking Dashboard</CardTitle>
                <CardDescription>Stake your GreenPoints to earn passive rewards</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Staking information and controls will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="rewards" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Rewards Center</CardTitle>
                <CardDescription>Redeem your GreenPoints for rewards</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Available rewards will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
