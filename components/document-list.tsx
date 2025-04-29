import Link from "next/link"
import { FileText, Star, MoreHorizontal, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DocumentList() {
  const documents = [
    {
      id: "1",
      title: "Project Proposal",
      updatedAt: "2 hours ago",
      shared: true,
      favorite: true,
    },
    {
      id: "2",
      title: "Marketing Plan",
      updatedAt: "5 hours ago",
      shared: true,
      favorite: false,
    },
    {
      id: "3",
      title: "Q3 Report",
      updatedAt: "Yesterday",
      shared: false,
      favorite: true,
    },
    {
      id: "4",
      title: "Meeting Notes",
      updatedAt: "2 days ago",
      shared: false,
      favorite: false,
    },
    {
      id: "5",
      title: "Product Roadmap",
      updatedAt: "1 week ago",
      shared: true,
      favorite: true,
    },
  ]

  return (
    <div className="space-y-2">
      {documents.map((doc) => (
        <div key={doc.id} className="flex items-center justify-between rounded-lg border p-3 text-sm">
          <div className="flex items-center space-x-3">
            <FileText className="h-5 w-5 text-muted-foreground" />
            <div>
              <Link href={`/dashboard/document/${doc.id}`} className="font-medium hover:underline">
                {doc.title}
              </Link>
              <div className="text-xs text-muted-foreground">Updated {doc.updatedAt}</div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {doc.shared && <Users className="h-4 w-4 text-muted-foreground" />}
            {doc.favorite && <Star className="h-4 w-4 text-yellow-500" />}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">More options</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Share</DropdownMenuItem>
                <DropdownMenuItem>Duplicate</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      ))}
    </div>
  )
}
