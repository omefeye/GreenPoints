import Link from "next/link"
import { ArrowRight, Bike, Leaf, LineChart, ShoppingBag, Trophy, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-white dark:from-green-900/20 dark:to-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Earn Rewards for Eco-Friendly Actions
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  GreenPoints is a tokenized eco rewards system that incentivizes sustainable choices and eco-friendly
                  behaviors.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/dashboard">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[350px] w-[350px] rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                <Leaf className="h-40 w-40 text-green-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700 dark:bg-green-800/30 dark:text-green-400">
                Features
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">How GreenPoints Works</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Earn tokens for making sustainable choices and eco-friendly actions in your daily life.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
            <Card className="relative overflow-hidden">
              <div className="absolute right-2 top-2 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center dark:bg-green-900/20">
                <ShoppingBag className="h-6 w-6 text-green-600" />
              </div>
              <CardHeader className="pb-2">
                <CardTitle>Eco-Friendly Marketplace</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Earn GreenPoints for choosing sustainable items in our simulated marketplace.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden">
              <div className="absolute right-2 top-2 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center dark:bg-green-900/20">
                <Bike className="h-6 w-6 text-green-600" />
              </div>
              <CardHeader className="pb-2">
                <CardTitle>Real-Life Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Report eco-friendly behaviors like cycling, walking, or using public transport to earn rewards.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden">
              <div className="absolute right-2 top-2 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center dark:bg-green-900/20">
                <LineChart className="h-6 w-6 text-green-600" />
              </div>
              <CardHeader className="pb-2">
                <CardTitle>Staking Mechanism</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Stake your GreenPoints to passively earn more, simulating rewards for consistent green behavior.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden">
              <div className="absolute right-2 top-2 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center dark:bg-green-900/20">
                <Trophy className="h-6 w-6 text-green-600" />
              </div>
              <CardHeader className="pb-2">
                <CardTitle>Leaderboard</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Track lifetime GP earnings and compete with others to make the biggest eco impact.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50 dark:bg-green-900/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Join the Green Movement</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Start earning rewards for your eco-friendly actions today.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="/dashboard">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-700 dark:bg-green-800/30 dark:text-green-400">
                  Community
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Join a Growing Community</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Connect with like-minded individuals who are passionate about sustainability and making a positive
                  impact on the environment.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild variant="outline">
                  <Link href="#">
                    <Users className="mr-2 h-4 w-4" />
                    Join Discord
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-4">
                  <div className="rounded-lg bg-green-100 p-8 dark:bg-green-800/20">
                    <div className="text-4xl font-bold text-green-700 dark:text-green-400">5K+</div>
                    <div className="text-sm text-green-700 dark:text-green-400">Active Users</div>
                  </div>
                  <div className="rounded-lg bg-green-100 p-8 dark:bg-green-800/20">
                    <div className="text-4xl font-bold text-green-700 dark:text-green-400">100K+</div>
                    <div className="text-sm text-green-700 dark:text-green-400">GP Staked</div>
                  </div>
                </div>
                <div className="grid gap-4">
                  <div className="rounded-lg bg-green-100 p-8 dark:bg-green-800/20">
                    <div className="text-4xl font-bold text-green-700 dark:text-green-400">10K+</div>
                    <div className="text-sm text-green-700 dark:text-green-400">Eco Actions</div>
                  </div>
                  <div className="rounded-lg bg-green-100 p-8 dark:bg-green-800/20">
                    <div className="text-4xl font-bold text-green-700 dark:text-green-400">50+</div>
                    <div className="text-sm text-green-700 dark:text-green-400">Partners</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
