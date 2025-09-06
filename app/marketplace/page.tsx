"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Recycle, Wheat, Home, ShoppingCart, Star, MapPin, Truck, Shield, Search } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Input } from "@/components/ui/input"

export default function MarketplacePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState("")

  const products = [
    {
      id: 1,
      name: "Premium Organic Compost",
      category: "compost",
      price: 150,
      unit: "per 10kg bag",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.8,
      reviews: 24,
      producer: "Green Valley Collective",
      location: "Village Center",
      description: "Nutrient-rich compost made from local organic waste. Perfect for kitchen gardens and farming.",
      features: ["100% Organic", "Rich in NPK", "Pest Resistant", "pH Balanced"],
      inStock: true,
      sustainability: "Made from 50kg organic waste",
    },
    {
      id: 2,
      name: "Garden Soil Conditioner",
      category: "compost",
      price: 80,
      unit: "per 5kg bag",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.6,
      reviews: 18,
      producer: "EcoFarm Women's Group",
      location: "North Village",
      description: "Improves soil structure and water retention. Ideal for flower beds and vegetable gardens.",
      features: ["Water Retention", "Soil Aeration", "Organic Matter", "Easy Application"],
      inStock: true,
      sustainability: "Made from 25kg organic waste",
    },
    {
      id: 3,
      name: "Cooking Fuel Briquettes",
      category: "briquettes",
      price: 120,
      unit: "per 5kg pack",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.7,
      reviews: 31,
      producer: "Rural Energy Cooperative",
      location: "Agricultural Zone",
      description: "Clean-burning biomass briquettes made from agricultural residue. Smokeless and efficient.",
      features: ["Smokeless Burning", "High Heat Output", "Long Lasting", "Eco-Friendly"],
      inStock: true,
      sustainability: "Made from 15kg agricultural waste",
    },
    {
      id: 4,
      name: "Industrial Fuel Pellets",
      category: "briquettes",
      price: 200,
      unit: "per 10kg pack",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.5,
      reviews: 12,
      producer: "Village Industries Ltd",
      location: "Industrial Area",
      description: "High-density fuel pellets for industrial heating and power generation.",
      features: ["High Density", "Consistent Quality", "Low Ash Content", "Bulk Available"],
      inStock: true,
      sustainability: "Made from 30kg agricultural waste",
    },
    {
      id: 5,
      name: "Recycled Plastic Chairs",
      category: "plastic",
      price: 450,
      unit: "per chair",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.9,
      reviews: 42,
      producer: "Plastic Revival Workshop",
      location: "Craft Center",
      description: "Durable outdoor chairs made from recycled plastic waste. Weather-resistant and colorful.",
      features: ["Weather Resistant", "UV Protected", "Easy to Clean", "Stackable Design"],
      inStock: true,
      sustainability: "Made from 8kg plastic waste",
    },
    {
      id: 6,
      name: "Storage Containers Set",
      category: "plastic",
      price: 320,
      unit: "set of 3",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.4,
      reviews: 28,
      producer: "Eco Containers Co-op",
      location: "Village Center",
      description: "Airtight storage containers perfect for kitchen and household organization.",
      features: ["Airtight Seal", "Food Safe", "Multiple Sizes", "Stackable"],
      inStock: false,
      sustainability: "Made from 5kg plastic waste",
    },
    {
      id: 7,
      name: "Garden Planters",
      category: "plastic",
      price: 180,
      unit: "per planter",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.6,
      reviews: 35,
      producer: "Green Thumb Collective",
      location: "Garden District",
      description: "Beautiful planters for herbs and flowers. Made from colorful recycled plastic.",
      features: ["Drainage Holes", "UV Resistant", "Lightweight", "Various Colors"],
      inStock: true,
      sustainability: "Made from 3kg plastic waste",
    },
  ]

  const categories = [
    { id: "all", name: "All Products", icon: ShoppingCart },
    { id: "compost", name: "Compost & Fertilizers", icon: Leaf },
    { id: "briquettes", name: "Fuel Briquettes", icon: Wheat },
    { id: "plastic", name: "Plastic Products", icon: Recycle },
  ]

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Home className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl text-foreground">Waste2Wealth</span>
            </Link>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="border-primary text-primary">
                <ShoppingCart className="w-4 h-4 mr-1" />
                Marketplace
              </Badge>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">Local Product Marketplace</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Buy locally-made products created from waste in your community. Every purchase supports local jobs and
            environmental sustainability.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((category) => {
              const IconComponent = category.icon
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={`whitespace-nowrap ${
                    selectedCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-transparent hover:bg-primary/10"
                  }`}
                >
                  <IconComponent className="w-4 h-4 mr-2" />
                  {category.name}
                </Button>
              )
            })}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="border-border hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <div className="relative">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/50 rounded-t-lg flex items-center justify-center">
                      <Badge variant="destructive">Out of Stock</Badge>
                    </div>
                  )}
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-primary text-primary-foreground">
                      {product.category === "compost" && <Leaf className="w-3 h-3 mr-1" />}
                      {product.category === "briquettes" && <Wheat className="w-3 h-3 mr-1" />}
                      {product.category === "plastic" && <Recycle className="w-3 h-3 mr-1" />}
                      Local
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <div className="mb-3">
                  <h3 className="font-semibold text-foreground mb-1">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
                    <MapPin className="w-3 h-3" />
                    {product.producer} • {product.location}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{product.description}</p>

                <div className="flex flex-wrap gap-1 mb-3">
                  {product.features.slice(0, 2).map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-1 text-xs text-primary mb-3">
                  <Shield className="w-3 h-3" />
                  {product.sustainability}
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-foreground">₹{product.price}</span>
                    <span className="text-sm text-muted-foreground ml-1">{product.unit}</span>
                  </div>
                  <Button
                    size="sm"
                    disabled={!product.inStock}
                    className={`${
                      product.inStock
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                        : "bg-muted text-muted-foreground cursor-not-allowed"
                    }`}
                  >
                    <ShoppingCart className="w-4 h-4 mr-1" />
                    {product.inStock ? "Order" : "Sold Out"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Marketplace Benefits */}
        <Card className="mb-8 bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="text-center text-foreground">Why Shop Local?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Environmental Impact</h4>
                <p className="text-sm text-muted-foreground">
                  Every purchase diverts waste from landfills and reduces environmental pollution
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Community Support</h4>
                <p className="text-sm text-muted-foreground">
                  Support local producers and create sustainable employment in your village
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Truck className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Local Delivery</h4>
                <p className="text-sm text-muted-foreground">
                  Fast, affordable delivery within the village with minimal carbon footprint
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-foreground mb-4">Want to become a producer?</h3>
          <p className="text-muted-foreground mb-6">
            Join our network of local producers and turn waste into income for your family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Join as Producer
              </Button>
            </Link>
            <Link href="/processing">
              <Button
                size="lg"
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary/10 bg-transparent"
              >
                Learn Processing
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
