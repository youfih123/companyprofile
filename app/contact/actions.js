"use server";

import { addMessage } from "@/lib/messagesStore";

export async function submitContactForm(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (!name || !email || !message) {
    return { success: false, error: "Semua field wajib diisi." };
  }

  await addMessage({ name, email, message });

  return { success: true };
}