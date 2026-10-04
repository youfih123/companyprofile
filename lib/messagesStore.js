import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();
const KEY = "messages";

export async function getMessages() {
  return (await redis.get(KEY)) ?? [];
}

export async function addMessage({ name, email, message }) {
  const messages = await getMessages();
  const newMsg = { id: Date.now(), name, email, message };
  await redis.set(KEY, [...messages, newMsg]);
  return newMsg;
}

export async function deleteMessage(id) {
  const messages = await getMessages();
  await redis.set(KEY, messages.filter((m) => m.id !== Number(id)));
}