"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartLegend } from "@/components/ui/chart"
import { Home, TrendingUp, PieChartIcon, BarChart3, Calendar, Download, Share } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"

export default function ImpactPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("year")
  const [selectedChart, setSelectedChart] = useState("waste")

  const periods = [
    { id: "month", name: "This Month" },
    { id: "quarter", name: "This Quarter" },
    { id: "year", name: "This Year" },
    { id: "all", name: "All Time" },
  ]

  // Waste Diversion Data
  const wasteData = {
    month: [
      { name: "Organic Waste", value: 45, color: "#059669" },
      { name: "Plastic Waste", value: 25, color: "#10b981" },
      { name: "Agricultural Residue", value: 20, color: "#4ade80" },
      { name: "Other Waste", value: 10, color: "#4b5563" },
    ],
    quarter: [
      { name: "Organic Waste", value: 48, color: "#059669" },
      { name: "Plastic Waste", value: 28, color: "#10b981" },
      { name: "Agricultural Residue", value: 18, color: "#4ade80" },
      { name: "Other Waste", value: 6, color: "#4b5563" },
    ],
    year: [
      { name: "Organic Waste", value: 52, color: "#059669" },
      { name: "Plastic Waste", value: 30, color: "#10b981" },
      { name: "Agricultural Residue", value: 15, color: "#4ade80" },
      { name: "Other Waste", value: 3, color: "#4b5563" },
    ],
    all: [
      { name: "Organic Waste", value: 55, color: "#059669" },
      { name: "Plastic Waste", value: 32, color: "#10b981" },
      { name: "Agricultural Residue", value: 12, color: "#4ade80" },
      { name: "Other Waste", value: 1, color: "#4b5563" },
    ],
  }

  // Household Income Growth Data
  const incomeData = {
    month: [
      { period: "Week 1", income: 8500, growth: 5 },
      { period: "Week 2", income: 9200, growth: 8 },
      { period: "Week 3", income: 9800, growth: 12 },
      { period: "Week 4", income: 10500, growth: 15 },
    ],
    quarter: [
      { period: "Month 1", income: 35000, growth: 8 },
      { period: "Month 2", income: 42000, growth: 15 },
      { period: "Month 3", income: 48000, growth: 22 },
    ],
    year: [
      { period: "Q1", income: 125000, growth: 12 },
      { period: "Q2", income: 148000, growth: 18 },
      { period: "Q3", income: 165000, growth: 25 },
      { period: "Q4", income: 185000, growth: 32 },
    ],
    all: [
      { period: "2022", income: 320000, growth: 8 },
      { period: "2023", income: 485000, growth: 18 },
      { period: "2024", income: 623000, growth: 28 },
      { period: "2025", income: 750000, growth: 35 },
    ],
  }

  const currentWasteData = wasteData[selectedPeriod as keyof typeof wasteData]
  const currentIncomeData = incomeData[selectedPeriod as keyof typeof incomeData]

  const totalWasteDiverted = currentWasteData.reduce((sum, item) => sum + item.value, 0)

  const chartConfig = {
    organic: {
      label: "Organic Waste",
      color: "#059669",
    },
    plastic: {
      label: "Plastic Waste",
      color: "#10b981",
    },
    agricultural: {
      label: "Agricultural Residue",
      color: "#4ade80",
    },
    other: {
      label: "Other Waste",
      color: "#4b5563",
    },
  } satisfies ChartConfig

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
              <Link href="/dashboard">
                <Button variant="outline" size="sm" className="bg-transparent">
                  Dashboard
                </Button>
              </Link>
              <Badge variant="outline" className="border-primary text-primary">
                <BarChart3 className="w-4 h-4 mr-1" />
                Impact Analytics
              </Badge>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Impact Visualization</h1>
            <p className="text-muted-foreground">
              Comprehensive charts showing waste diversion and household income growth
            </p>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <Button variant="outline" size="sm" className="bg-transparent">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
            <Button variant="outline" size="sm" className="bg-transparent">
              <Share className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </div>

        {/* Period Selection */}
        <div className="flex flex-wrap gap-2 mb-8">
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
              <Calendar className="w-4 h-4 mr-2" />
              {period.name}
            </Button>
          ))}
        </div>

        {/* Chart Selection */}
        <div className="flex gap-2 mb-8">
          <Button
            variant={selectedChart === "waste" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedChart("waste")}
            className={
              selectedChart === "waste" ? "bg-primary text-primary-foreground" : "bg-transparent hover:bg-primary/10"
            }
          >
            <PieChartIcon className="w-4 h-4 mr-2" />
            Waste Diversion
          </Button>
          <Button
            variant={selectedChart === "income" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedChart("income")}
            className={
              selectedChart === "income" ? "bg-primary text-primary-foreground" : "bg-transparent hover:bg-primary/10"
            }
          >
            <BarChart3 className="w-4 h-4 mr-2" />
            Income Growth
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Main Chart */}
          <div className="lg:col-span-2">
            {selectedChart === "waste" ? (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PieChartIcon className="w-5 h-5 text-primary" />
                    Waste Diversion by Category
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig} className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <Pie
                        data={currentWasteData}
                        cx="50%"
                        cy="50%"
                        outerRadius={120}
                        innerRadius={60}
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {currentWasteData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <ChartTooltip
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            const data = payload[0].payload
                            return (
                              <div className="bg-background border border-border rounded-lg p-3 shadow-lg">
                                <p className="font-medium text-foreground">{data.name}</p>
                                <p className="text-sm text-muted-foreground">{data.value}% of total waste</p>
                              </div>
                            )
                          }
                          return null
                        }}
                      />
                      <ChartLegend
                        content={({ payload }) => (
                          <div className="flex flex-wrap justify-center gap-4 mt-4">
                            {payload?.map((entry, index) => (
                              <div key={index} className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }} />
                                <span className="text-sm text-muted-foreground">{entry.value}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      />
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-primary" />
                    Household Income Growth
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig} className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={currentIncomeData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                        <XAxis dataKey="period" stroke="#64748b" />
                        <YAxis stroke="#64748b" />
                        <ChartTooltip
                          content={({ active, payload, label }) => {
                            if (active && payload && payload.length) {
                              return (
                                <div className="bg-background border border-border rounded-lg p-3 shadow-lg">
                                  <p className="font-medium text-foreground">{label}</p>
                                  <p className="text-sm text-primary">Income: ₹{payload[0].value?.toLocaleString()}</p>
                                  <p className="text-sm text-secondary">Growth: {payload[1].value}%</p>
                                </div>
                              )
                            }
                            return null
                          }}
                        />
                        <Bar dataKey="income" fill="#059669" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="growth" fill="#10b981" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Stats Sidebar */}
          <div className="space-y-6">
            {selectedChart === "waste" ? (
              <>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Waste Diversion Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-1">{totalWasteDiverted}%</div>
                      <div className="text-sm text-muted-foreground">Total Waste Diverted</div>
                    </div>
                    {currentWasteData.map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                          <span className="text-sm text-foreground">{item.name}</span>
                        </div>
                        <span className="text-sm font-medium text-foreground">{item.value}%</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Environmental Impact</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">CO₂ Reduced:</span>
                      <span className="text-sm font-medium text-foreground">2.4 tons</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Landfill Avoided:</span>
                      <span className="text-sm font-medium text-foreground">15.2 tons</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Water Saved:</span>
                      <span className="text-sm font-medium text-foreground">8,500 L</span>
                    </div>
                  </CardContent>
                </Card>
              </>
            ) : (
              <>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Income Growth Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-1">
                        {currentIncomeData[currentIncomeData.length - 1]?.growth}%
                      </div>
                      <div className="text-sm text-muted-foreground">Latest Growth Rate</div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Average Income:</span>
                        <span className="text-sm font-medium text-foreground">
                          ₹
                          {Math.round(
                            currentIncomeData.reduce((sum, item) => sum + item.income, 0) / currentIncomeData.length,
                          ).toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Peak Income:</span>
                        <span className="text-sm font-medium text-foreground">
                          ₹{Math.max(...currentIncomeData.map((item) => item.income)).toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Total Growth:</span>
                        <span className="text-sm font-medium text-primary">
                          {currentIncomeData[currentIncomeData.length - 1]?.growth - currentIncomeData[0]?.growth}%
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Economic Impact</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Families Benefited:</span>
                      <span className="text-sm font-medium text-foreground">320</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Avg. Monthly Increase:</span>
                      <span className="text-sm font-medium text-foreground">₹2,500</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Economic Multiplier:</span>
                      <span className="text-sm font-medium text-foreground">3.2x</span>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        </div>

        {/* Key Insights */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Key Insights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Waste Management Success</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Organic waste processing shows highest diversion rates at 55%</li>
                  <li>• Plastic recycling has improved by 15% over the past year</li>
                  <li>• Agricultural residue utilization creates significant fuel alternatives</li>
                  <li>• Overall waste diversion rate exceeds 85% target</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3">Economic Growth Impact</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Household incomes have grown by 35% since program launch</li>
                  <li>• Women's participation in workforce increased to 78%</li>
                  <li>• Local product sales generate ₹45K monthly revenue</li>
                  <li>• Economic benefits reach 320+ families directly</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/dashboard">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              View Full Dashboard
            </Button>
          </Link>
          <Link href="/marketplace">
            <Button
              size="lg"
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary/10 bg-transparent"
            >
              Shop Local Products
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
