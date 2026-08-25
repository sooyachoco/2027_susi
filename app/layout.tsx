import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "수시6 — 2027 수시 전략 플래너",
  description:
    "내신·모의고사·학생부를 바탕으로 수시 6장을 전략적으로 설계하는 프로토타입 (mock 데이터).",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
