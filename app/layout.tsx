import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "../components/SmoothScroll";

export const metadata: Metadata = {
  title: "Meyhomes — A New Perspective",
  description: "A cinematic digital experience concept for Meyhomes Capital Phú Quốc.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="vi"><body><SmoothScroll>{children}</SmoothScroll></body></html>;
}
