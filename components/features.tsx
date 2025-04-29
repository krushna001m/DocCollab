import { FileText, Users, History, Lock, Zap, Cloud } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: <FileText className="h-10 w-10 text-primary" />,
      title: "Rich Text Editing",
      description:
        "Format your documents with a powerful rich text editor that supports all the formatting options you need.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Real-Time Collaboration",
      description: "Work together with your team in real-time. See changes as they happen and collaborate efficiently.",
    },
    {
      icon: <History className="h-10 w-10 text-primary" />,
      title: "Version History",
      description:
        "Access previous versions of your documents. Track changes and revert to earlier versions when needed.",
    },
    {
      icon: <Lock className="h-10 w-10 text-primary" />,
      title: "Secure Sharing",
      description: "Control who can view and edit your documents with granular permission settings.",
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Fast Performance",
      description: "Enjoy a smooth editing experience with optimized performance, even with large documents.",
    },
    {
      icon: <Cloud className="h-10 w-10 text-primary" />,
      title: "Cloud Storage",
      description: "Your documents are securely stored in the cloud and accessible from anywhere, on any device.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Powerful Features for Document Collaboration
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Everything you need to create, edit, and collaborate on documents with your team.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm"
            >
              {feature.icon}
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-center text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
