"use server";

import { revalidatePath } from "next/cache";
import { messages } from "@/lib/db";

export async function deleteMessageAction(formData) {
  const id = String(formData.get("id"));

  const index = messages.findIndex((m) => String(m.id) === id);

  if (index !== -1) {
    messages.splice(index, 1);
  }

  revalidatePath("/messages");
}