import { BookData } from "@/types";

export default async function fetchRandomBooks(): Promise<BookData[]> {
  const url = `https://onebite-books-server-pi-flame.vercel.app/book/random`;

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
