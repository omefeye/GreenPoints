"use client"

import { useState } from "react"
import { Award, Calendar, Filter, Medal, Search, Trophy, User, Bike } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Leaderboard() {
  const [searchQuery, setSearchQuery] = useState("")
  const [timeframe, setTimeframe] = useState("all-time")

  const users = [
    {
      id: 1,
      name: "Alex Johnson",
      username: "ecorider",
      points: 3250,
      level: 8,
      activities: 42,
      avatar: "/placeholder.svg?height=40&width=40",
      badge: "Eco Champion",
    },
    {
      id: 2,
      name: "Sam Wilson",
      username: "greenwarrior",
      points: 2980,
      level: 7,
      activities: 38,
      avatar: "/placeholder.svg?height=40&width=40",
      badge: "Sustainability Expert",
    },
    {
      id: 3,
      name: "Jamie Smith",
      username: "cyclelife",
      points: 2750,
      level: 7,
      activities: 35,
      avatar: "/placeholder.svg?height=40&width=40",
      badge: "Bike Enthusiast",
    },
    {
      id: 4,
      name: "Taylor Brown",
      username: "ecowalker",
      points: 2500,
      level: 6,
      activities: 32,
      avatar: "/placeholder.svg?height=40&width=40",
      badge: "Green Traveler",
    },
    {
      id: 5,
      name: "Jordan Lee",
      username: "recycleking",
      points: 2350,
      level: 6,
      activities: 30,
      avatar: "/placeholder.svg?height=40&width=40",
      badge: "Waste Reducer",
    },
    {
      id: 6,
      name: "Casey Miller",
      username: "greenfuture",
      points: 2100,
      level: 5,
      activities: 28,
      avatar: "/placeholder.svg?height=40&width=40",
      badge: "Climate Advocate",
    },
    {
      id: 7,
      name: "Riley Davis",
      username: "sustainableliving",
      points: 1950,
      level: 5,
      activities: 25,
      avatar: "/placeholder.svg?height=40&width=40",
      badge: "Eco Lifestyle",
    },
    {
      id: 8,
      name: "Morgan White",
      username: "earthfriend",
      points: 1800,
      level: 4,
      activities: 23,
      avatar: "/placeholder.svg?height=40&width=40",
      badge: "Nature Lover",
    },
    {
      id: 9,
      name: "Avery Garcia",
      username: "greenpoints",
      points: 1650,
      level: 4,
      activities: 21,
      avatar: "/placeholder.svg?height=40&width=40",
      badge: "Token Collector",
    },
    {
      id: 10,
      name: "You",
      username: "yourname",
      points: 1250,
      level: 3,
      activities: 18,
      avatar: "/placeholder.svg?height=40&width=40",
      badge: "Eco Warrior",
      isCurrentUser: true,
    },
  ]

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.username.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const getRankBadge = (index) => {
    if (index === 0) return <Trophy className="h-5 w-5 text-yellow-500" />
    if (index === 1) return <Medal className="h-5 w-5 text-gray-400" />
    if (index === 2) return <Medal className="h-5 w-5 text-amber-700" />
    return <span className="font-medium">{index + 1}</span>
  }

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Leaderboard</h2>
          <div className="flex items-center space-x-2">
            <Select value={timeframe} onValueChange={setTimeframe}>
              <SelectTrigger className="w-[180px]">
                <Calendar className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Select timeframe" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-time">All Time</SelectItem>
                <SelectItem value="this-month">This Month</SelectItem>
                <SelectItem value="this-week">This Week</SelectItem>
                <SelectItem value="today">Today</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Search */}
        <div className="flex w-full items-center space-x-2">
          <Search className="h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1"
          />
        </div>

        <Tabs defaultValue="global" className="space-y-4">
          <TabsList>
            <TabsTrigger value="global">Global</TabsTrigger>
            <TabsTrigger value="friends">Friends</TabsTrigger>
            <TabsTrigger value="local">Local</TabsTrigger>
          </TabsList>

          <TabsContent value="global" className="space-y-4">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle>Global Rankings</CardTitle>
                  <Filter className="h-4 w-4 text-muted-foreground" />
                </div>
                <CardDescription>Top eco-friendly users worldwide</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredUsers.map((user, index) => (
                    <div
                      key={user.id}
                      className={`flex items-center justify-between p-3 rounded-lg ${
                        user.isCurrentUser
                          ? "bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800"
                          : "hover:bg-muted/50"
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center justify-center w-8">{getRankBadge(index)}</div>
                        <Avatar>
                          <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{user.name}</div>
                          <div className="text-sm text-muted-foreground">@{user.username}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="hidden md:flex flex-col items-end">
                          <div className="text-sm font-medium">Level {user.level}</div>
                          <div className="text-xs text-muted-foreground">{user.activities} activities</div>
                        </div>
                        <Badge
                          variant="outline"
                          className={`text-green-600 ${user.isCurrentUser ? "border-green-600" : ""}`}
                        >
                          {user.points} GP
                        </Badge>
                        {index < 3 && <Award className="h-5 w-5 text-green-600" />}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle>Top Achievements</CardTitle>
                <CardDescription>Special recognitions for eco-friendly actions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "Most Cycling Distance",
                      user: "Alex Johnson",
                      value: "325 km",
                      icon: <Bike className="h-5 w-5 text-green-600" />,
                    },
                    {
                      title: "Most Recycling Actions",
                      user: "Jordan Lee",
                      value: "42 actions",
                      icon: <Trophy className="h-5 w-5 text-green-600" />,
                    },
                    {
                      title: "Highest Level",
                      user: "Alex Johnson",
                      value: "Level 8",
                      icon: <User className="h-5 w-5 text-green-600" />,
                    },
                  ].map((achievement, i) => (
                    <Card key={i}>
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-sm font-medium">{achievement.title}</CardTitle>
                          {achievement.icon}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="font-bold">{achievement.user}</div>
                        <div className="text-sm text-muted-foreground">{achievement.value}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="friends" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Friends Leaderboard</CardTitle>
                <CardDescription>Compare your progress with friends</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Connect with friends to see their rankings here.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="local" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Local Leaderboard</CardTitle>
                <CardDescription>Top eco-friendly users in your area</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Enable location services to see local rankings.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
