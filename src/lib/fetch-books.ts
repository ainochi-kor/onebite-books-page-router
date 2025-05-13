import { BookData } from "@/types";

export default async function fetchBooks(): Promise<BookData[]> {
  const url = `http://localhost:12345/book`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
}
