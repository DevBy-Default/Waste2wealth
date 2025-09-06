"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Truck, CheckCircle, AlertCircle, Home } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function CollectionPage() {
  const [selectedDate, setSelectedDate] = useState(new Date())

  // Mock data for collection schedule
  const collectionSchedule = [
    { date: "2024-01-15", status: "completed", type: "Organic", time: "09:00 AM" },
    { date: "2024-01-16", status: "completed", type: "Plastic", time: "10:30 AM" },
    { date: "2024-01-17", status: "in-progress", type: "Mixed", time: "09:00 AM" },
    { date: "2024-01-18", status: "scheduled", type: "Organic", time: "09:00 AM" },
    { date: "2024-01-19", status: "scheduled", type: "Agricultural", time: "11:00 AM" },
  ]

  const todayCollection = collectionSchedule.find((item) => item.status === "in-progress")
  const upcomingCollections = collectionSchedule.filter((item) => item.status === "scheduled")

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
                Collection Zone A
              </Badge>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Waste Collection Tracking</h1>
          <p className="text-muted-foreground">Monitor your door-to-door collection schedule and progress</p>
        </div>

        {/* Today's Collection Status */}
        {todayCollection && (
          <Card className="mb-8 border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Truck className="w-5 h-5" />
                Today's Collection - In Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-secondary text-secondary-foreground">{todayCollection.type} Waste</Badge>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {todayCollection.time}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    Collection Route: Main Street → Village Center → Residential Area
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center animate-pulse">
                      <Truck className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                  <span className="text-sm font-medium text-primary">65% Complete</span>
                </div>
              </div>
              <div className="mt-4">
                <Progress value={65} className="h-2" />
              </div>
            </CardContent>
          </Card>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Collection Calendar */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Collection Schedule
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Simple Calendar View */}
                <div className="space-y-4">
                  {collectionSchedule.map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between p-4 rounded-lg border transition-colors ${
                        item.status === "completed"
                          ? "bg-primary/5 border-primary/20"
                          : item.status === "in-progress"
                            ? "bg-secondary/5 border-secondary/20"
                            : "bg-muted/30 border-border"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex flex-col items-center">
                          <span className="text-sm text-muted-foreground">
                            {new Date(item.date).toLocaleDateString("en-US", { weekday: "short" })}
                          </span>
                          <span className="text-lg font-semibold text-foreground">{new Date(item.date).getDate()}</span>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Badge
                              variant={item.status === "completed" ? "default" : "outline"}
                              className={
                                item.status === "completed"
                                  ? "bg-primary text-primary-foreground"
                                  : item.status === "in-progress"
                                    ? "border-secondary text-secondary"
                                    : "border-muted-foreground text-muted-foreground"
                              }
                            >
                              {item.type} Waste
                            </Badge>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            {item.time}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        {item.status === "completed" && <CheckCircle className="w-6 h-6 text-primary" />}
                        {item.status === "in-progress" && (
                          <div className="w-6 h-6 bg-secondary rounded-full animate-pulse" />
                        )}
                        {item.status === "scheduled" && <AlertCircle className="w-6 h-6 text-muted-foreground" />}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Collection Progress & Stats */}
          <div className="space-y-6">
            {/* Weekly Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">This Week's Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">Organic Waste</span>
                    <span className="text-sm font-medium">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">Plastic Waste</span>
                    <span className="text-sm font-medium">70%</span>
                  </div>
                  <Progress value={70} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">Agricultural Residue</span>
                    <span className="text-sm font-medium">60%</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Collection Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Houses Covered</span>
                  <span className="font-semibold text-foreground">142/180</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Total Weight</span>
                  <span className="font-semibold text-foreground">245 kg</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Collection Rate</span>
                  <span className="font-semibold text-primary">89%</span>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Report Issue</Button>
                <Button
                  variant="outline"
                  className="w-full border-secondary text-secondary hover:bg-secondary/10 bg-transparent"
                >
                  Request Special Collection
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  View Collection History
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Upcoming Collections */}
        {upcomingCollections.length > 0 && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Upcoming Collections</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {upcomingCollections.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-foreground">
                        {new Date(item.date).toLocaleDateString("en-US", {
                          weekday: "long",
                          month: "short",
                          day: "numeric",
                        })}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {item.type} Waste • {item.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
