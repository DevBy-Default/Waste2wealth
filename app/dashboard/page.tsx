"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Users,
  TrendingUp,
  DollarSign,
  Briefcase,
  Home,
  Target,
  Award,
  UserCheck,
  Building,
  Leaf,
  ArrowUp,
  ArrowDown,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function DashboardPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("month")

  const periods = [
    { id: "week", name: "This Week" },
    { id: "month", name: "This Month" },
    { id: "quarter", name: "This Quarter" },
    { id: "year", name: "This Year" },
  ]

  // Mock data for different time periods
  const dashboardData = {
    week: {
      totalJobs: 28,
      newJobs: 3,
      totalIncome: 45000,
      incomeGrowth: 8.5,
      womenParticipation: 68,
      activeProducers: 15,
      wasteProcessed: 2400,
      productsCreated: 180,
    },
    month: {
      totalJobs: 142,
      newJobs: 18,
      totalIncome: 185000,
      incomeGrowth: 12.3,
      womenParticipation: 72,
      activeProducers: 45,
      wasteProcessed: 12500,
      productsCreated: 850,
    },
    quarter: {
      totalJobs: 398,
      newJobs: 89,
      totalIncome: 520000,
      incomeGrowth: 15.7,
      womenParticipation: 75,
      activeProducers: 120,
      wasteProcessed: 35000,
      productsCreated: 2400,
    },
    year: {
      totalJobs: 1250,
      newJobs: 320,
      totalIncome: 1850000,
      incomeGrowth: 22.4,
      womenParticipation: 78,
      activeProducers: 380,
      wasteProcessed: 125000,
      productsCreated: 8500,
    },
  }

  const currentData = dashboardData[selectedPeriod as keyof typeof dashboardData]

  const jobCategories = [
    { name: "Waste Collection", count: 45, percentage: 32, color: "bg-primary" },
    { name: "Processing Operations", count: 38, percentage: 27, color: "bg-secondary" },
    { name: "Product Manufacturing", count: 35, percentage: 25, color: "bg-accent" },
    { name: "Sales & Marketing", count: 24, percentage: 16, color: "bg-chart-4" },
  ]

  const incomeBreakdown = [
    { source: "Compost Sales", amount: 65000, percentage: 35, trend: "up" },
    { source: "Briquette Production", amount: 48000, percentage: 26, trend: "up" },
    { source: "Plastic Products", amount: 52000, percentage: 28, trend: "up" },
    { source: "Collection Services", amount: 20000, percentage: 11, trend: "down" },
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
              <Badge variant="outline" className="border-primary text-primary">
                <Building className="w-4 h-4 mr-1" />
                Community Hub
              </Badge>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Community Dashboard</h1>
            <p className="text-muted-foreground">
              Track the social and economic impact of our waste management program
            </p>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            {periods.map((period) => (
              <Button
                key={period.id}
                variant={selectedPeriod === period.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedPeriod(period.id)}
                className={
                  selectedPeriod === period.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-transparent hover:bg-primary/10"
                }
              >
                {period.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Jobs Created</p>
                  <p className="text-2xl font-bold text-foreground">{currentData.totalJobs.toLocaleString()}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <ArrowUp className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-green-500">+{currentData.newJobs} new</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-secondary/20 bg-secondary/5">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Income Generated</p>
                  <p className="text-2xl font-bold text-foreground">₹{currentData.totalIncome.toLocaleString()}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <ArrowUp className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-green-500">+{currentData.incomeGrowth}%</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-secondary-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-accent/20 bg-accent/5">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Women Participation</p>
                  <p className="text-2xl font-bold text-foreground">{currentData.womenParticipation}%</p>
                  <div className="w-full bg-muted rounded-full h-2 mt-2">
                    <div
                      className="bg-accent h-2 rounded-full transition-all duration-500"
                      style={{ width: `${currentData.womenParticipation}%` }}
                    ></div>
                  </div>
                </div>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <UserCheck className="w-6 h-6 text-accent-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-chart-4/20 bg-chart-4/5">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Active Producers</p>
                  <p className="text-2xl font-bold text-foreground">{currentData.activeProducers}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Community members</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-chart-4 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Job Distribution */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-primary" />
                Job Distribution by Category
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {jobCategories.map((category, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-foreground">{category.name}</span>
                    <span className="text-sm text-muted-foreground">{category.count} jobs</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className={`${category.color} h-2 rounded-full transition-all duration-500`}
                      style={{ width: `${category.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Income Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Income Sources Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {incomeBreakdown.map((source, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-foreground">{source.source}</span>
                      <div className="flex items-center gap-2">
                        {source.trend === "up" ? (
                          <ArrowUp className="w-4 h-4 text-green-500" />
                        ) : (
                          <ArrowDown className="w-4 h-4 text-red-500" />
                        )}
                        <span className="text-sm font-medium text-foreground">₹{source.amount.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="w-full bg-muted rounded-full h-1.5">
                      <div
                        className="bg-primary h-1.5 rounded-full transition-all duration-500"
                        style={{ width: `${source.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Environmental Impact */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Leaf className="w-5 h-5 text-primary" />
              Environmental & Production Impact
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {(currentData.wasteProcessed / 1000).toFixed(1)}T
                </div>
                <div className="text-sm text-muted-foreground">Waste Processed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">{currentData.productsCreated}</div>
                <div className="text-sm text-muted-foreground">Products Created</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">
                  {Math.round(currentData.wasteProcessed * 0.8)}
                </div>
                <div className="text-sm text-muted-foreground">CO₂ Saved (kg)</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-chart-4 mb-2">{Math.round(currentData.totalJobs * 4.2)}</div>
                <div className="text-sm text-muted-foreground">Families Benefited</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Women Empowerment Section */}
        <Card className="mb-8 border-accent/20 bg-accent/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5 text-accent" />
              Women Empowerment Initiative
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserCheck className="w-8 h-8 text-accent" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">
                  {Math.round(currentData.totalJobs * (currentData.womenParticipation / 100))}
                </div>
                <div className="text-sm text-muted-foreground">Women Employed</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-secondary" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">
                  ₹{Math.round(currentData.totalIncome * 0.6).toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">Women's Income</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">85%</div>
                <div className="text-sm text-muted-foreground">Target Achievement</div>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-foreground">Progress towards 80% women participation</span>
                <span className="text-sm text-muted-foreground">{currentData.womenParticipation}% / 80%</span>
              </div>
              <Progress value={(currentData.womenParticipation / 80) * 100} className="h-3" />
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
          <Link href="/impact">
            <Button
              size="lg"
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary/10 bg-transparent"
            >
              Detailed Impact Report
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
