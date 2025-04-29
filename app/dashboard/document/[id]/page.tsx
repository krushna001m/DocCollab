import type { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard-header"
import { DocumentEditor } from "@/components/document-editor"

export const metadata: Metadata = {
  title: "Document Editor | Collaborative Document Editor",
  description: "Edit your document",
}

export default function DocumentPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <main className="flex-1">
        <DocumentEditor documentId={params.id} />
      </main>
    </div>
  )
}
