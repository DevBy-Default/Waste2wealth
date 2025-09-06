"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Leaf,
  Recycle,
  Wheat,
  Home,
  ArrowRight,
  Zap,
  Droplets,
  Thermometer,
  Package,
  Factory,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function ProcessingPage() {
  const [activeFlow, setActiveFlow] = useState<string | null>(null)
  const [animationStep, setAnimationStep] = useState(0)

  // Animation cycle for the flows
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 4)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const processingUnits = [
    {
      id: "compost",
      title: "Compost Machine",
      icon: Leaf,
      inputType: "Organic Waste",
      outputType: "Nutrient-rich Compost",
      color: "bg-green-500",
      lightColor: "bg-green-50",
      borderColor: "border-green-200",
      textColor: "text-green-700",
      capacity: "500 kg/day",
      efficiency: "85%",
      process: [
        { step: "Collection", description: "Organic waste collected and sorted", icon: Package },
        { step: "Shredding", description: "Waste is shredded into smaller pieces", icon: Factory },
        { step: "Composting", description: "Aerobic decomposition with controlled temperature", icon: Thermometer },
        { step: "Curing", description: "Final maturation and quality testing", icon: Zap },
      ],
      products: ["Garden Compost", "Fertilizer Pellets", "Soil Conditioner"],
      revenue: "₹15,000/month",
    },
    {
      id: "briquette",
      title: "Briquette Maker",
      icon: Wheat,
      inputType: "Agricultural Residue",
      outputType: "Bio-fuel Briquettes",
      color: "bg-amber-500",
      lightColor: "bg-amber-50",
      borderColor: "border-amber-200",
      textColor: "text-amber-700",
      capacity: "300 kg/day",
      efficiency: "78%",
      process: [
        { step: "Drying", description: "Agricultural waste dried to optimal moisture", icon: Thermometer },
        { step: "Crushing", description: "Residue crushed into uniform size", icon: Factory },
        { step: "Compression", description: "High-pressure compression into briquettes", icon: Zap },
        { step: "Packaging", description: "Quality check and packaging for sale", icon: Package },
      ],
      products: ["Cooking Fuel Briquettes", "Industrial Fuel", "Heating Pellets"],
      revenue: "₹12,000/month",
    },
    {
      id: "plastic",
      title: "Plastic Recycling Unit",
      icon: Recycle,
      inputType: "Plastic Waste",
      outputType: "Recycled Plastic Products",
      color: "bg-blue-500",
      lightColor: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-700",
      capacity: "200 kg/day",
      efficiency: "72%",
      process: [
        { step: "Sorting", description: "Plastic sorted by type and color", icon: Package },
        { step: "Cleaning", description: "Thorough washing and contaminant removal", icon: Droplets },
        { step: "Shredding", description: "Plastic shredded into small flakes", icon: Factory },
        { step: "Melting", description: "Flakes melted and reformed into products", icon: Zap },
      ],
      products: ["Plastic Chairs", "Storage Containers", "Garden Planters"],
      revenue: "₹18,000/month",
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
              <Link href="/segregation">
                <Button variant="outline" size="sm" className="bg-transparent">
                  Segregation Guide
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-foreground mb-4">Waste Processing Flow</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch how our advanced processing units transform different types of waste into valuable products, creating
            wealth for the community.
          </p>
        </div>

        {/* Processing Overview */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {processingUnits.map((unit) => {
            const IconComponent = unit.icon
            const isActive = activeFlow === unit.id

            return (
              <Card
                key={unit.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  isActive ? `${unit.borderColor} border-2 shadow-lg` : "border-border hover:border-primary/30"
                }`}
                onClick={() => setActiveFlow(isActive ? null : unit.id)}
              >
                <CardHeader className="text-center">
                  <div
                    className={`w-16 h-16 ${unit.lightColor} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <div
                      className={`w-12 h-12 ${unit.color} rounded-full flex items-center justify-center ${
                        isActive ? "animate-pulse" : ""
                      }`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-lg text-foreground">{unit.title}</CardTitle>
                  <div className="space-y-2">
                    <Badge variant="outline" className={`${unit.textColor} border-current`}>
                      {unit.inputType}
                    </Badge>
                    <ArrowRight className="w-4 h-4 mx-auto text-muted-foreground" />
                    <Badge className={`${unit.color} text-white`}>{unit.outputType}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Capacity:</span>
                      <span className="font-medium text-foreground">{unit.capacity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Efficiency:</span>
                      <span className="font-medium text-foreground">{unit.efficiency}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Revenue:</span>
                      <span className="font-medium text-primary">{unit.revenue}</span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className={`w-full mt-4 ${unit.textColor} border-current hover:bg-current hover:text-white bg-transparent`}
                  >
                    {isActive ? "Hide Process" : "View Process"}
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Detailed Process Flow */}
        {activeFlow && (
          <Card className="mb-8 border-primary/20 bg-primary/5">
            <CardContent className="p-8">
              {(() => {
                const unit = processingUnits.find((u) => u.id === activeFlow)!
                const IconComponent = unit.icon

                return (
                  <div>
                    {/* Process Header */}
                    <div className="flex items-center gap-4 mb-8">
                      <div className={`w-12 h-12 ${unit.color} rounded-full flex items-center justify-center`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">{unit.title} Process</h3>
                        <p className="text-muted-foreground">Step-by-step transformation process</p>
                      </div>
                    </div>

                    {/* Animated Process Steps */}
                    <div className="grid md:grid-cols-4 gap-6 mb-8">
                      {unit.process.map((step, index) => {
                        const StepIcon = step.icon
                        const isCurrentStep = animationStep === index

                        return (
                          <div key={index} className="relative">
                            <div
                              className={`text-center transition-all duration-500 ${
                                isCurrentStep ? "scale-105" : "scale-100"
                              }`}
                            >
                              <div
                                className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-500 ${
                                  isCurrentStep ? `${unit.color} shadow-lg animate-pulse` : "bg-muted"
                                }`}
                              >
                                <StepIcon
                                  className={`w-8 h-8 transition-colors duration-500 ${
                                    isCurrentStep ? "text-white" : "text-muted-foreground"
                                  }`}
                                />
                              </div>
                              <h4
                                className={`font-semibold mb-2 transition-colors duration-500 ${
                                  isCurrentStep ? "text-foreground" : "text-muted-foreground"
                                }`}
                              >
                                {step.step}
                              </h4>
                              <p className="text-sm text-muted-foreground">{step.description}</p>
                            </div>

                            {/* Animated Arrow */}
                            {index < unit.process.length - 1 && (
                              <div className="hidden md:block absolute top-8 -right-3 z-10">
                                <ArrowRight
                                  className={`w-6 h-6 transition-all duration-500 ${
                                    animationStep >= index ? "text-primary animate-pulse" : "text-muted-foreground"
                                  }`}
                                />
                              </div>
                            )}
                          </div>
                        )
                      })}
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-8">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">Processing Progress</span>
                        <span className="text-sm text-muted-foreground">
                          {(((animationStep + 1) / 4) * 100).toFixed(0)}%
                        </span>
                      </div>
                      <Progress value={((animationStep + 1) / 4) * 100} className="h-3" />
                    </div>

                    {/* Output Products */}
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                          <Package className="w-5 h-5 text-primary" />
                          Output Products
                        </h4>
                        <div className="space-y-2">
                          {unit.products.map((product, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              <span className="text-sm text-muted-foreground">{product}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-primary" />
                          Economic Impact
                        </h4>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Monthly Revenue:</span>
                            <span className="text-sm font-medium text-primary">{unit.revenue}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Jobs Created:</span>
                            <span className="text-sm font-medium text-foreground">8-12 people</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Processing Efficiency:</span>
                            <span className="text-sm font-medium text-foreground">{unit.efficiency}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })()}
            </CardContent>
          </Card>
        )}

        {/* Overall Impact Stats */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-center">Combined Processing Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                <div className="text-sm text-muted-foreground">kg/day Processed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">₹45K</div>
                <div className="text-sm text-muted-foreground">Monthly Revenue</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">30+</div>
                <div className="text-sm text-muted-foreground">Jobs Created</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">78%</div>
                <div className="text-sm text-muted-foreground">Avg Efficiency</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/marketplace">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              View Products
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button
              size="lg"
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary/10 bg-transparent"
            >
              Community Impact
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
