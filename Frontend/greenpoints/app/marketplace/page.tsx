"use client"

import { useState } from "react"
import { Filter, Search, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"

export default function Marketplace() {
  const [searchQuery, setSearchQuery] = useState("")
  const [priceRange, setPriceRange] = useState([0, 500])
  const [greenPoints, setGreenPoints] = useState(1250)

  const products = [
    {
      id: 1,
      name: "Reusable Water Bottle",
      description: "Eco-friendly stainless steel water bottle",
      price: 50,
      category: "home",
      image: "/bottle2.jpg?height=200&width=200",
      ecoImpact: "High",
    },
    {
      id: 2,
      name: "Bamboo Toothbrush",
      description: "Biodegradable bamboo toothbrush",
      price: 25,
      category: "personal",
      image: "/toothbrush.jpeg?height=200&width=200",
      ecoImpact: "Medium",
    },
    {
      id: 3,
      name: "Organic Cotton Tote",
      description: "Reusable shopping bag made from organic cotton",
      price: 35,
      category: "accessories",
      image: "/tote.jpg?height=200&width=200",
      ecoImpact: "Medium",
    },
    {
      id: 4,
      name: "Solar Power Bank",
      description: "Charge your devices with solar energy",
      price: 120,
      category: "electronics",
      image: "/powerbank2.jpg?height=200&width=200",
      ecoImpact: "High",
    },
    {
      id: 5,
      name: "Recycled Paper Notebook",
      description: "Notebook made from 100% recycled paper",
      price: 15,
      category: "stationery",
      image: "/defter.jpeg?height=200&width=200",
      ecoImpact: "Medium",
    },
    {
      id: 6,
      name: "Bamboo Cutlery Set",
      description: "Portable bamboo cutlery for on-the-go",
      price: 30,
      category: "home",
      image: "/cutlery2.jpg?height=200&width=200",
      ecoImpact: "High",
    },
    {
      id: 7,
      name: "Recycled Plastic Backpack",
      description: "Backpack made from recycled ocean plastic",
      price: 85,
      category: "accessories",
      image: "/Backpack.jpg?height=200&width=200",
      ecoImpact: "High",
    },
    {
      id: 8,
      name: "LED Light Bulbs (4-pack)",
      description: "Energy-efficient LED light bulbs",
      price: 40,
      category: "home",
      image: "/bulb.jpg?height=200&width=200",
      ecoImpact: "Medium",
    },
  ]

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      product.price >= priceRange[0] &&
      product.price <= priceRange[1],
  )

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Marketplace</h2>
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="text-green-600 border-green-600">
              {greenPoints} GP Available
            </Badge>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="grid gap-4 md:grid-cols-[1fr_250px]">
          <div className="flex w-full items-center space-x-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
            />
          </div>
          <Select defaultValue="all">
            <SelectTrigger>
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="home">Home</SelectItem>
              <SelectItem value="personal">Personal Care</SelectItem>
              <SelectItem value="accessories">Accessories</SelectItem>
              <SelectItem value="electronics">Electronics</SelectItem>
              <SelectItem value="stationery">Stationery</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Price Range Filter */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle>Filters</CardTitle>
              <Filter className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Price Range (GP)</span>
                  <span className="text-sm text-muted-foreground">
                    {priceRange[0]} - {priceRange[1]}
                  </span>
                </div>
                <Slider defaultValue={[0, 500]} max={500} step={5} value={priceRange} onValueChange={setPriceRange} />
              </div>
              <div className="space-y-2">
                <span className="text-sm font-medium">Eco Impact</span>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="cursor-pointer hover:bg-green-50 dark:hover:bg-green-900/20">
                    Low
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-green-50 dark:hover:bg-green-900/20">
                    Medium
                  </Badge>
                  <Badge
                    variant="outline"
                    className="cursor-pointer bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                  >
                    High
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Product Categories */}
        <Tabs defaultValue="all" className="space-y-4">
          <TabsList>
            <TabsTrigger value="all">All Products</TabsTrigger>
            <TabsTrigger value="home">Home</TabsTrigger>
            <TabsTrigger value="personal">Personal Care</TabsTrigger>
            <TabsTrigger value="accessories">Accessories</TabsTrigger>
            <TabsTrigger value="electronics">Electronics</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden">
                  <div className="aspect-square w-full bg-muted flex items-center justify-center">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="object-cover"
                      width={444}
                      height={444}
                    />
                  </div>
                  <CardHeader className="p-4 pb-2">
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-green-600">
                        {product.ecoImpact} Impact
                      </Badge>
                      <span className="font-bold text-green-600">{product.price} GP</span>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <CardDescription>{product.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="p-4">
                    <Button className="w-full">
                      <ShoppingBag className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Other category tabs would have similar content */}
          <TabsContent value="home" className="space-y-4">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProducts
                .filter((product) => product.category === "home")
                .map((product) => (
                  <Card key={product.id} className="overflow-hidden">
                    <div className="aspect-square w-full bg-muted flex items-center justify-center">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="object-cover"
                        width={200}
                        height={200}
                      />
                    </div>
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-lg">{product.name}</CardTitle>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-green-600">
                          {product.ecoImpact} Impact
                        </Badge>
                        <span className="font-bold text-green-600">{product.price} GP</span>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <CardDescription>{product.description}</CardDescription>
                    </CardContent>
                    <CardFooter className="p-4">
                      <Button className="w-full">
                        <ShoppingBag className="mr-2 h-4 w-4" />
                        Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>

          {/* Other category tabs would follow the same pattern */}
        </Tabs>
      </div>
    </div>
  )
}
