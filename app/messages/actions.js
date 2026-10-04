"use server";

import { revalidatePath } from "next/cache";
import { deleteMessage } from "@/lib/messagesStore";

export async function deleteMessageAction(formData) {
  const id = String(formData.get("id"));
  await deleteMessage(id);
  revalidatePath("/messages");
}