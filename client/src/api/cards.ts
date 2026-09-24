import type { Card } from "../types/card";

export async function fetchCards(): Promise<Card[]> {
  const response = await fetch("/api/cards");
  if (!response.ok) throw new Error("Не удалось загрузить карточки");
  return response.json();
}

export async function createCard(data: { title: string; isDone: boolean }): Promise<Card> {
  const response = await fetch("/api/cards", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Не удалось создать карточку");
  return response.json();
}
