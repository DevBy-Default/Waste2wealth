import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Recycle, Leaf, Users, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Recycle className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl text-foreground">Waste2Wealth</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <Link href="/collection" className="text-muted-foreground hover:text-foreground transition-colors">
                Collection
              </Link>
              <Link href="/segregation" className="text-muted-foreground hover:text-foreground transition-colors">
                Segregation
              </Link>
              <Link href="/marketplace" className="text-muted-foreground hover:text-foreground transition-colors">
                Marketplace
              </Link>
              <Link href="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
                Dashboard
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center animate-pulse">
                <Recycle className="w-8 h-8 text-primary-foreground animate-spin" style={{ animationDuration: "3s" }} />
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Turning Waste into <span className="text-primary">Local Wealth</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join your village community in creating a sustainable circular economy. Transform waste into valuable
            resources while generating local income and jobs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Start Collection
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 bg-transparent"
            >
              View Impact
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Complete Waste Management Ecosystem</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Recycle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Smart Collection</h3>
                <p className="text-sm text-muted-foreground">
                  Door-to-door waste collection with real-time tracking and scheduling
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Waste Processing</h3>
                <p className="text-sm text-muted-foreground">
                  Convert organic waste to compost, plastic to products, and more
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Community Jobs</h3>
                <p className="text-sm text-muted-foreground">
                  Create local employment opportunities, especially for women
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Local Marketplace</h3>
                <p className="text-sm text-muted-foreground">Buy and sell locally produced eco-friendly products</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-12">Making Real Impact</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">85%</div>
              <div className="text-muted-foreground">Waste Diverted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">150+</div>
              <div className="text-muted-foreground">Jobs Created</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">₹25K</div>
              <div className="text-muted-foreground">Avg. Monthly Income</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
              <Recycle className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-semibold text-foreground">Waste2Wealth Hubs</span>
          </div>
          <p className="text-sm text-muted-foreground">Building sustainable communities through circular economy</p>
        </div>
      </footer>
    </div>
  )
}
