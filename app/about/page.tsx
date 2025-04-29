import type { Metadata } from "next"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "About | Collaborative Document Editor",
  description: "Learn about our collaborative document editor",
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About DocCollab</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Our mission is to make document collaboration seamless and efficient for teams of all sizes.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">Our Story</h2>
                  <p className="text-muted-foreground">
                    Founded in 2025, DocCollab was born out of the frustration of trying to collaborate on documents
                    across different platforms and time zones. We set out to build a solution that would make real-time
                    document collaboration simple, efficient, and accessible to everyone.
                  </p>
                  <p className="text-muted-foreground">
                    Today, DocCollab is used by thousands of teams worldwide to streamline their document workflows and
                    boost productivity. Our platform continues to evolve based on user feedback and the latest
                    advancements in collaborative technology.
                  </p>
                </div>
              </div>
              <div className="mx-auto aspect-video overflow-hidden rounded-xl border object-cover object-center sm:w-full lg:order-last">
                <Image
                  src="src\DocCollab.png"
                  alt="DocCollab"
                  width={600}
                  height={400}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-center">Our Values</h2>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                  <h3 className="text-xl font-bold">Collaboration</h3>
                  <p className="text-center text-muted-foreground">
                    We believe in the power of teamwork and build tools that make collaboration effortless.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                  <h3 className="text-xl font-bold">Innovation</h3>
                  <p className="text-center text-muted-foreground">
                    We continuously push the boundaries of what's possible in document collaboration.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                  <h3 className="text-xl font-bold">User-Centric</h3>
                  <p className="text-center text-muted-foreground">
                    Our users' needs drive every decision we make and every feature we build.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
