"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  ListOrdered,
  LinkIcon,
  ImageIcon,
  Save,
  Share2,
  History,
  Users,
} from "lucide-react"

export function DocumentEditor({ documentId }: { documentId: string }) {
  const [title, setTitle] = useState("Untitled Document")
  const [content, setContent] = useState("")
  const [collaborators, setCollaborators] = useState([
    { id: "1", name: "KRUSHNA MENGAL", online: true },
    { id: "2", name: "SUMIT DIGHE", online: false },
  ])

  return (
    <div className="container py-6">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="text-xl font-bold h-auto py-1 px-2 max-w-md"
          />
          <span className="text-sm text-muted-foreground">Saved</span>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <History className="mr-2 h-4 w-4" />
            History
          </Button>
          <Button variant="outline" size="sm">
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
          <Button size="sm">
            <Save className="mr-2 h-4 w-4" />
            Save
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_250px] gap-6">
        <div className="space-y-4">
          <div className="border rounded-lg shadow-sm">
            <div className="flex items-center border-b p-2 gap-1">
              <Button variant="ghost" size="icon">
                <Bold className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Italic className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Underline className="h-4 w-4" />
              </Button>
              <div className="h-4 border-l mx-1"></div>
              <Button variant="ghost" size="icon">
                <AlignLeft className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <AlignCenter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <AlignRight className="h-4 w-4" />
              </Button>
              <div className="h-4 border-l mx-1"></div>
              <Button variant="ghost" size="icon">
                <List className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <ListOrdered className="h-4 w-4" />
              </Button>
              <div className="h-4 border-l mx-1"></div>
              <Button variant="ghost" size="icon">
                <LinkIcon className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <ImageIcon className="h-4 w-4" />
              </Button>
            </div>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full min-h-[500px] p-4 resize-none focus:outline-none"
              placeholder="Start typing your document..."
            />
          </div>
        </div>

        <div className="space-y-4">
          <Tabs defaultValue="collaborators">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="collaborators">Collaborators</TabsTrigger>
              <TabsTrigger value="comments">Comments</TabsTrigger>
            </TabsList>
            <TabsContent value="collaborators" className="space-y-4 pt-4">
              <div className="text-sm font-medium">People with access</div>
              <div className="space-y-2">
                {collaborators.map((user) => (
                  <div key={user.id} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="relative">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          {user.name.charAt(0)}
                        </div>
                        {user.online && (
                          <div className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-green-500"></div>
                        )}
                      </div>
                      <div>
                        <div className="text-sm font-medium">{user.name}</div>
                        <div className="text-xs text-muted-foreground">{user.online ? "Online" : "Offline"}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="sm" className="w-full">
                <Users className="mr-2 h-4 w-4" />
                Invite people
              </Button>
            </TabsContent>
            <TabsContent value="comments" className="pt-4">
              <div className="text-sm text-muted-foreground text-center py-4">No comments yet</div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
