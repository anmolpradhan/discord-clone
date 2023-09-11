"use client";

import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogHeader,
} from "@/components/ui/dialog";

import { useModal } from "@/hooks/use-modal-store";
import { Label } from "@/components/ui/label";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Server name is required",
  }),
  imageUrl: z.string().min(1, {
    message: "Server image is required",
  }),
});

const DeleteServerModal = () => {
  const { onOpen, isOpen, onClose, type, data } = useModal();
  const isModalOpen = isOpen && type === "delete";
  const { server } = data;

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px=6">
          <DialogTitle className="text-2xl text-center">
            Delete Server {server?.name}
          </DialogTitle>
        </DialogHeader>
        <div className="p-6">
          <Label className="uppercase text-sx font-bold text-zinc-500 dar:text-secondary/70">
            Do you wanna delete this server?
          </Label>
          
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteServerModal;
