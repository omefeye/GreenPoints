"use client"

import { useState } from "react"
import { Bike, Bus, Calendar, Clock, MapPin, Recycle, Save, Trash, User, FootprintsIcon as Walk } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"

export default function Activities() {
  const [activities, setActivities] = useState([
    {
      id: 1,
      type: "cycling",
      date: "2025-05-15",
      distance: 5.2,
      duration: 20,
      points: 25,
      location: "Downtown",
      description: "Cycling to work",
    },
    {
      id: 2,
      type: "walking",
      date: "2025-05-14",
      distance: 3.1,
      duration: 35,
      points: 15,
      location: "Park",
      description: "Evening walk",
    },
    {
      id: 3,
      type: "public_transport",
      date: "2025-05-13",
      distance: 8.5,
      duration: 25,
      points: 10,
      location: "City Center",
      description: "Bus ride to shopping mall",
    },
    {
      id: 4,
      type: "recycling",
      date: "2025-05-12",
      points: 5,
      location: "Home",
      description: "Recycled plastic and paper",
    },
  ])

  const [newActivity, setNewActivity] = useState({
    type: "cycling",
    date: new Date().toISOString().split("T")[0],
    distance: "",
    duration: "",
    location: "",
    description: "",
  })

  const activityIcons = {
    cycling: <Bike className="h-5 w-5" />,
    walking: <Walk className="h-5 w-5" />,
    public_transport: <Bus className="h-5 w-5" />,
    recycling: <Recycle className="h-5 w-5" />,
  }

  const activityColors = {
    cycling: "text-green-600 bg-green-100 dark:bg-green-900/20",
    walking: "text-green-600 bg-green-100 dark:bg-green-900/20",
    public_transport: "text-green-600 bg-green-100 dark:bg-green-900/20",
    recycling: "text-green-600 bg-green-100 dark:bg-green-900/20",
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewActivity({
      ...newActivity,
      [name]: value,
    })
  }

  const handleSelectChange = (name, value) => {
    setNewActivity({
      ...newActivity,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Calculate points based on activity type and metrics
    let points = 0
    switch (newActivity.type) {
      case "cycling":
        points = Math.round(Number.parseFloat(newActivity.distance) * 5)
        break
      case "walking":
        points = Math.round(Number.parseFloat(newActivity.distance) * 5)
        break
      case "public_transport":
        points = Math.round(Number.parseFloat(newActivity.distance))
        break
      case "recycling":
        points = 5
        break
      default:
        points = 0
    }

    const activity = {
      id: activities.length + 1,
      ...newActivity,
      distance: Number.parseFloat(newActivity.distance) || 0,
      duration: Number.parseFloat(newActivity.duration) || 0,
      points,
    }

    setActivities([activity, ...activities])

    // Reset form
    setNewActivity({
      type: "cycling",
      date: new Date().toISOString().split("T")[0],
      distance: "",
      duration: "",
      location: "",
      description: "",
    })
  }

  const deleteActivity = (id) => {
    setActivities(activities.filter((activity) => activity.id !== id))
  }

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Activities</h2>
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="text-green-600 border-green-600">
              Total: {activities.reduce((sum, activity) => sum + activity.points, 0)} GP
            </Badge>
          </div>
        </div>

        <Tabs defaultValue="log" className="space-y-4">
          <TabsList>
            <TabsTrigger value="log">Activity Log</TabsTrigger>
            <TabsTrigger value="add">Add Activity</TabsTrigger>
            <TabsTrigger value="stats">Statistics</TabsTrigger>
          </TabsList>

          <TabsContent value="log" className="space-y-4">
            <div className="grid gap-4">
              {activities.map((activity) => (
                <Card key={activity.id}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className={`rounded-full p-2 ${activityColors[activity.type]}`}>
                          {activityIcons[activity.type]}
                        </div>
                        <CardTitle className="text-lg capitalize">{activity.type.replace("_", " ")}</CardTitle>
                      </div>
                      <Badge variant="outline" className="text-green-600">
                        +{activity.points} GP
                      </Badge>
                    </div>
                    <CardDescription>{activity.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{activity.date}</span>
                      </div>
                      {activity.distance > 0 && (
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{activity.distance} km</span>
                        </div>
                      )}
                      {activity.duration > 0 && (
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{activity.duration} min</span>
                        </div>
                      )}
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{activity.location}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-red-500 hover:text-red-700 hover:bg-red-100 dark:hover:bg-red-900/20"
                      onClick={() => deleteActivity(activity.id)}
                    >
                      <Trash className="mr-2 h-4 w-4" />
                      Delete
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="add" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Record New Activity</CardTitle>
                <CardDescription>Log your eco-friendly activities to earn GreenPoints</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="activity-type">Activity Type</Label>
                      <Select value={newActivity.type} onValueChange={(value) => handleSelectChange("type", value)}>
                        <SelectTrigger id="activity-type">
                          <SelectValue placeholder="Select activity type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cycling">Cycling</SelectItem>
                          <SelectItem value="walking">Walking</SelectItem>
                          <SelectItem value="public_transport">Public Transport</SelectItem>
                          <SelectItem value="recycling">Recycling</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="activity-date">Date</Label>
                      <Input
                        id="activity-date"
                        type="date"
                        name="date"
                        value={newActivity.date}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  {(newActivity.type === "cycling" ||
                    newActivity.type === "walking" ||
                    newActivity.type === "public_transport") && (
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="activity-distance">Distance (km)</Label>
                        <Input
                          id="activity-distance"
                          type="number"
                          name="distance"
                          placeholder="Enter distance in km"
                          value={newActivity.distance}
                          onChange={handleInputChange}
                          step="0.1"
                          min="0"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="activity-duration">Duration (minutes)</Label>
                        <Input
                          id="activity-duration"
                          type="number"
                          name="duration"
                          placeholder="Enter duration in minutes"
                          value={newActivity.duration}
                          onChange={handleInputChange}
                          min="0"
                        />
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="activity-location">Location</Label>
                    <Input
                      id="activity-location"
                      name="location"
                      placeholder="Enter location"
                      value={newActivity.location}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="activity-description">Description</Label>
                    <Textarea
                      id="activity-description"
                      name="description"
                      placeholder="Enter a brief description"
                      value={newActivity.description}
                      onChange={handleInputChange}
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    <Save className="mr-2 h-4 w-4" />
                    Save Activity
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="stats" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Activity Statistics</CardTitle>
                <CardDescription>Your eco-friendly activity metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Total Activities</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{activities.length}</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Total Distance</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        {activities.reduce((sum, activity) => sum + (activity.distance || 0), 0).toFixed(1)} km
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Total Duration</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        {activities.reduce((sum, activity) => sum + (activity.duration || 0), 0)} min
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Total Points Earned</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-green-600">
                        {activities.reduce((sum, activity) => sum + activity.points, 0)} GP
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-medium mb-4">Activity Breakdown</h3>
                  <div className="space-y-4">
                    {Object.keys(activityIcons).map((type) => {
                      const typeActivities = activities.filter((a) => a.type === type)
                      const typePoints = typeActivities.reduce((sum, a) => sum + a.points, 0)
                      const typeCount = typeActivities.length

                      return (
                        <div key={type} className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className={`rounded-full p-2 ${activityColors[type]}`}>{activityIcons[type]}</div>
                            <span className="capitalize">{type.replace("_", " ")}</span>
                          </div>
                          <div className="flex items-center space-x-4">
                            <span>{typeCount} activities</span>
                            <Badge variant="outline" className="text-green-600">
                              {typePoints} GP
                            </Badge>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
