import Link from "next/link"
import { Leaf } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Leaf className="h-6 w-6 text-green-600" />
              <span className="text-xl font-bold">GreenPoints</span>
            </Link>
            <p className="text-sm text-muted-foreground">Tokenized Eco Rewards System</p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="font-medium">Platform</div>
            <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="/dashboard" className="hover:text-primary">
                Dashboard
              </Link>
              <Link href="/marketplace" className="hover:text-primary">
                Marketplace
              </Link>
              <Link href="/activities" className="hover:text-primary">
                Activities
              </Link>
              <Link href="/leaderboard" className="hover:text-primary">
                Leaderboard
              </Link>
            </nav>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="font-medium">Resources</div>
            <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-primary">
                Documentation
              </Link>
              <Link href="#" className="hover:text-primary">
                API
              </Link>
              <Link href="#" className="hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-primary">
                Terms of Service
              </Link>
            </nav>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="font-medium">Community</div>
            <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-primary">
                Discord
              </Link>
              <Link href="#" className="hover:text-primary">
                Twitter
              </Link>
              <Link href="#" className="hover:text-primary">
                GitHub
              </Link>
            </nav>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} GreenPoints. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
