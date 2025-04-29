import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FileText, Users, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Real-Time Collaborative Document Editor
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Create, edit, and collaborate on documents in real-time with your team. Boost productivity and
                streamline your workflow.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/signup">
                <Button size="lg" className="w-full min-[400px]:w-auto">
                  Get Started
                </Button>
              </Link>
              <Link href="/features">
                <Button size="lg" variant="outline" className="w-full min-[400px]:w-auto">
                  Learn More
                </Button>
              </Link>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <Zap className="h-4 w-4 text-primary" />
                <span>Real-time editing</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4 text-primary" />
                <span>Team collaboration</span>
              </div>
              <div className="flex items-center space-x-1">
                <FileText className="h-4 w-4 text-primary" />
                <span>Version history</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[500px] aspect-video overflow-hidden rounded-xl border bg-background shadow-xl">
              <Image
                src="src\DocCollab.png"
                alt="Document editor interface"
                width={800}
                height={500}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
