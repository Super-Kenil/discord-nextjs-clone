"use client"

import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog"

const InitialModal = () => {
  return (
    <Dialog open>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
<DialogHeader> 
Customize your server
</DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default InitialModal