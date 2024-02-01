
import { ScrollArea } from "@/components/ui/scroll-area"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function signUp() {
  return (
    <div className="flex min-h-screen">
      <div className="w-64 bg-gray-100 dark:bg-gray-900 border-r">
        <div className="p-4">
          <h2 className="text-lg font-bold text-gray-700 dark:text-gray-300">Conversations</h2>
        </div>
        <ScrollArea className="p-4 space-y-4">
          <div className="flex items-center gap-2 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer">
            <img
              className="w-10 h-10 rounded-full"
              height="40"
              src="/placeholder.svg"
              style={{
                aspectRatio: "40/40",
                objectFit: "cover",
              }}
              width="40"
            />
            <div className="text-sm text-gray-700 dark:text-gray-300">Olivia Davis</div>
          </div>
          <div className="flex items-center gap-2 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer">
            <img
              className="w-10 h-10 rounded-full"
              height="40"
              src="/placeholder.svg"
              style={{
                aspectRatio: "40/40",
                objectFit: "cover",
              }}
              width="40"
            />
            <div className="text-sm text-gray-700 dark:text-gray-300">John Doe</div>
          </div>
          <div className="flex items-center gap-2 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer">
            <img
              className="w-10 h-10 rounded-full"
              height="40"
              src="/placeholder.svg"
              style={{
                aspectRatio: "40/40",
                objectFit: "cover",
              }}
              width="40"
            />
            <div className="text-sm text-gray-700 dark:text-gray-300">Jane Smith</div>
          </div>
        </ScrollArea>
      </div>
      <div className="flex flex-col flex-1">
        <ScrollArea className="flex-1 p-4 space-y-4">
          <div className="flex flex-col gap-2">
            <div className="text-sm text-gray-500">Olivia Davis</div>
            <div className="inline-block max-w-xs px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-800">
              Hi, lets have a meeting tomorrow to discuss the project.
            </div>
            <div className="text-xs text-gray-400">Oct 08, 2023 9:15 AM</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-sm text-gray-500">You</div>
            <div className="inline-block max-w-xs px-4 py-2 rounded-lg bg-blue-500 text-white">
              Sure, that works for me. What time?
            </div>
            <div className="text-xs text-gray-400">Oct 08, 2023 9:20 AM</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-sm text-gray-500">Olivia Davis</div>
            <div className="inline-block max-w-xs px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-800">
              How about 10 AM?
            </div>
            <div className="text-xs text-gray-400">Oct 08, 2023 9:22 AM</div>
          </div>
        </ScrollArea>
        <div className="flex items-center gap-2 p-4 border-t">
          <Textarea className="flex-1 min-h-[20px] max-h-[100px] resize-none" placeholder="Type your message here..." />
          <Button>Send</Button>
        </div>
      </div>
    </div>
  )
}




