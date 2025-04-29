import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "This collaborative editor has transformed how our team works on documents. The real-time editing is seamless.",
      author: "KRUSHNA MENGAL",
      role: "Product Manager",
      avatar: "https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg?height=40&width=40",
    },
    {
      quote:
        "We've cut our document review time in half since switching to this platform. The version history is a lifesaver.",
      author: "SUMIT DIGHE",
      role: "Content Strategist",
      avatar: "https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg?height=40&width=40",
    },
    {
      quote:
        "The interface is intuitive and the collaboration features are exactly what we needed for our remote team.",
      author: "KRUSHNA MENGAL",
      role: "Team Lead",
      avatar: "https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg?height=40&width=40",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Trusted by Teams Worldwide</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              See what our users have to say about their experience with our collaborative document editor.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 mt-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border bg-background">
              <CardContent className="p-6">
                <div className="flex flex-col space-y-4">
                  <p className="text-muted-foreground">"{testimonial.quote}"</p>
                  <div className="flex items-center space-x-4">
                    <Image
                      src={
                        testimonial.avatar ||
                        "https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-c404-61f7-8f95-80fa1e78ad19/raw?se=2025-04-29T08%3A18%3A25Z&sp=r&sv=2024-08-04&sr=b&scid=023c2704-4ccd-52a2-9064-05be8bef5538&skoid=ae70be19-8043-4428-a990-27c58b478304&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-29T03%3A08%3A22Z&ske=2025-04-30T03%3A08%3A22Z&sks=b&skv=2024-08-04&sig=1NGkiJYukSYRhv50LrN8TxVq%2Bo5POKHLhGLmhy/n0i8%3D"
                      }
                      alt={testimonial.author}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <h4 className="font-semibold">KRUSHNA MENGAL</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
