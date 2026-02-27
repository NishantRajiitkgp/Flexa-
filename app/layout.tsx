import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
    subsets: ["latin"],
    variable: "--font-sans",
    weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "Flexa",
    description: "A beautiful, warm, and inclusive yoga studio landing page.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={manrope.variable}>
                {children}
            </body>
        </html>
    );
}
