import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"),
  title: "Home - Rama",
  description: "Aplikasi untuk belajar Next JS",
  authors: [{ name: "Rama Novaris", url: "https://github.com/ramanovaris" }],
  icons: "/icon.png",
  openGraph: {
    title: "Home - Rama",
  },
};
export default function Home() {
  // throw new Error("Something went wrong");
  return <main className="flex min-h-screen flex-col items-center justify-between p-24">Hello World</main>;
}
