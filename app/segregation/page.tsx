"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Recycle, Wheat, Package, Home, CheckCircle, Info, ArrowRight, Lightbulb } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function SegregationPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const wasteCategories = [
    {
      id: "organic",
      title: "Organic Waste",
      icon: Leaf,
      color: "bg-green-500",
      lightColor: "bg-green-50",
      borderColor: "border-green-200",
      textColor: "text-green-700",
      description: "Biodegradable kitchen and garden waste",
      examples: [
        "Vegetable peels and scraps",
        "Fruit waste and peels",
        "Cooked food leftovers",
        "Garden trimmings",
        "Tea bags and coffee grounds",
      ],
      tips: ["Keep separate from other waste", "Can be composted at home", "Avoid adding oil or dairy"],
      processing: "Converted to nutrient-rich compost for farming",
    },
    {
      id: "plastic",
      title: "Plastic Waste",
      icon: Recycle,
      color: "bg-blue-500",
      lightColor: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-700",
      description: "Recyclable plastic containers and packaging",
      examples: [
        "Plastic bottles and containers",
        "Food packaging",
        "Shopping bags",
        "Plastic cups and plates",
        "Packaging materials",
      ],
      tips: ["Clean containers before disposal", "Remove labels when possible", "Separate by plastic type"],
      processing: "Recycled into new plastic products and materials",
    },
    {
      id: "agricultural",
      title: "Agricultural Residue",
      icon: Wheat,
      color: "bg-amber-500",
      lightColor: "bg-amber-50",
      borderColor: "border-amber-200",
      textColor: "text-amber-700",
      description: "Farm waste and crop residues",
      examples: ["Rice straw and husks", "Wheat stalks", "Corn cobs and husks", "Sugarcane bagasse", "Cotton stalks"],
      tips: ["Keep dry to prevent rotting", "Bundle for easy collection", "Separate from soil and stones"],
      processing: "Converted to biofuel briquettes and biomass energy",
    },
    {
      id: "other",
      title: "Other Waste",
      icon: Package,
      color: "bg-gray-500",
      lightColor: "bg-gray-50",
      borderColor: "border-gray-200",
      textColor: "text-gray-700",
      description: "Non-recyclable and mixed waste materials",
      examples: [
        "Paper and cardboard",
        "Glass bottles and jars",
        "Metal cans and containers",
        "Textiles and clothing",
        "Electronic waste",
      ],
      tips: ["Sort by material type", "Clean glass and metal items", "Handle e-waste separately"],
      processing: "Sorted for appropriate recycling or safe disposal",
    },
  ]

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
              <Link href="/collection">
                <Button variant="outline" size="sm" className="bg-transparent">
                  Collection Status
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-foreground mb-4">Waste Segregation Guide</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proper waste segregation is the first step towards creating wealth from waste. Learn how to sort your waste
            effectively for maximum value recovery.
          </p>
        </div>

        {/* Segregation Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {wasteCategories.map((category) => {
            const IconComponent = category.icon
            const isSelected = selectedCategory === category.id

            return (
              <Card
                key={category.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  isSelected ? `${category.borderColor} border-2 shadow-lg` : "border-border hover:border-primary/30"
                }`}
                onClick={() => setSelectedCategory(isSelected ? null : category.id)}
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 ${category.lightColor} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <div className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-lg text-foreground">{category.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-center">
                    <Button
                      variant="outline"
                      size="sm"
                      className={`${category.textColor} border-current hover:bg-current hover:text-white bg-transparent`}
                    >
                      {isSelected ? "Hide Details" : "View Details"}
                      <ArrowRight className={`w-4 h-4 ml-2 transition-transform ${isSelected ? "rotate-90" : ""}`} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Detailed Information */}
        {selectedCategory && (
          <Card className="mb-8 border-primary/20 bg-primary/5">
            <CardContent className="p-8">
              {(() => {
                const category = wasteCategories.find((cat) => cat.id === selectedCategory)!
                const IconComponent = category.icon

                return (
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Examples */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <div className={`w-8 h-8 ${category.color} rounded-full flex items-center justify-center`}>
                          <IconComponent className="w-4 h-4 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground">What Goes Here</h3>
                      </div>
                      <ul className="space-y-2">
                        {category.examples.map((example, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tips */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                          <Lightbulb className="w-4 h-4 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground">Best Practices</h3>
                      </div>
                      <ul className="space-y-2">
                        {category.tips.map((tip, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Info className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Processing */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                          <Recycle className="w-4 h-4 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground">Processing</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{category.processing}</p>
                      <div className="mt-4">
                        <Badge className={`${category.color} text-white`}>Wealth Generation Opportunity</Badge>
                      </div>
                    </div>
                  </div>
                )
              })()}
            </CardContent>
          </Card>
        )}

        {/* Quick Tips Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-primary" />
              Quick Segregation Tips
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Clean & Dry</h4>
                <p className="text-sm text-muted-foreground">
                  Rinse containers and keep waste dry for better processing
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Package className="w-6 h-6 text-secondary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Separate Storage</h4>
                <p className="text-sm text-muted-foreground">Use different containers for each waste category</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Recycle className="w-6 h-6 text-accent" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Regular Collection</h4>
                <p className="text-sm text-muted-foreground">Follow the collection schedule to prevent waste buildup</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Reduce First</h4>
                <p className="text-sm text-muted-foreground">Minimize waste generation before segregation</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/collection">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Schedule Collection
            </Button>
          </Link>
          <Link href="/processing">
            <Button
              size="lg"
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary/10 bg-transparent"
            >
              View Processing
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
