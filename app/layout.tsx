import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider"
import logo from "@/assets/logo.jpg"

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

export const metadata: Metadata = {
    title: 'Trainco',
    description: 'Legends of Trains',
    keywords: ['Train, Trains, Railway, Railways, Locomotive, Locomotives, Legends'],
    applicationName: 'Trainco',
    authors: [
        {name: 'Simeon Sabev', url: ''},
    ],
    openGraph: {
        title: 'Trainco',
        description: 'Legends of Trains',
        url: 'https://yourwebsite.com',
        siteName: 'Your Website',
        locale: 'en_US',
        type: 'website',
    },
    icons: {
        icon: logo.src,
    },
    alternates: {
        canonical: 'https://yourwebsite.com',
        languages: {
            'en-US': 'https://yourwebsite.com/en-US',
            'es-ES': 'https://yourwebsite.com/es-ES',
        },
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
