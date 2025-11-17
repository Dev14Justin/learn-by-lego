import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "../contexts/ThemeContext";
import "./globals.css";
import LayoutClientWrapper from "../components/LayoutClientWrapper";
import BackToTopButton from "../components/BackToTopButton";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Learn By Lego - Apprenez à développer des fonctionnalités pour vos projets comme on construit un château de Lego.",
	description:
		"Learn By Lego est une plateforme open source qui recense les meilleures fonctionnalités développées bloc par bloc.",
	keywords:
		"lego, open source, communauté, fonctionnalités lego",
	authors: [{ name: "Justin MONDJI" }],
	openGraph: {
		title: "Learn By Lego - Apprenez à développer des fonctionnalités pour vos projets comme on construit un château de Lego.",
		description:
			"Découvrez et partagez des astuces pour developper plus rapidement des solutions digitaux.",
		type: "website",
		url: "https://github.com/Dev14Justin/learn-by-lego",
		images: [
			{
				url: "/seo.png",
				width: 1200,
				height: 630,
				alt: "Learn By Lego Logo",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Learn By Lego",
		description: "Learn By Lego, une plateforme open source qui recense les meilleures fonctionnalités développées bloc par bloc.",
		images: ["/seo.png"],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fr" className="dark">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<ThemeProvider>
					<LayoutClientWrapper>{children}</LayoutClientWrapper>
					<BackToTopButton />
				</ThemeProvider>
			</body>
		</html>
	);
}