import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();
const KEY = "messages";

const SEED = [
  { id: 1, name: "Rina", email: "rina@gmail.com", message: "Halo, salam kenal!" },
  { id: 2, name: "Budi", email: "budi@gmail.com", message: "Websitenya keren." },
  { id: 3, name: "Sari", email: "sari@gmail.com", message: "Terima kasih infonya." },
];

export async function getMessages() {
  const stored = await redis.get(KEY);
  if (stored === null) {
    await redis.set(KEY, SEED);
    return SEED;
  }
  return stored;
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