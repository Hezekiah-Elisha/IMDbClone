import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Providers from "@/app/Providers";
import Navbar from "@/components/Navabar";
import SearchBox from "@/components/SearchBox";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata = {
    title: "IMDb Clone",
    description: "This is an IMDb clone built with Next.js",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <Providers>
            <Header/>
            <Navbar/>
            <SearchBox/>
            {children}
        </Providers>
        </body>
        </html>
    );
}
