import { Navigation } from "@/components/shared/Navigation";
import "./globals.css";
import { IBM_Plex_Sans } from "next/font/google";
import { Provider as ThemeProvider } from "@/components/shared/Provider";
import ScrollToTop from "@/components/shared/ScrollToTop";
import { Footer } from "@/components/shared/Footer";
import { config } from "@/libs/config";

export const revalidate = 60;

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export async function generateMetadata() {
  return {
    metadataBase: new URL(config.siteUrl),
    title: {
      template: `%s | ${config.siteName}`,
      default: `${config.siteName}`,
    },
    description: config.siteDescription,
    url: config.siteUrl,
    alternates: {
      canonical: `/`,
      languages: "en-US",
    },
    themeColor: [
      { media: "(prefers-color-scheme: light)", color: "#F5F5F5" },
      { media: "(prefers-color-scheme: dark)", color: "#262626" },
    ],
    creator: config.siteName,
    openGraph: {
      title: {
        template: `%s | ${config.siteName}`,
        default: `${config.siteName}`,
      },
      description: config.siteDescription,
      url: config.siteUrl,
      siteName: config.siteName,
      images: [
        {
          url: config.siteImage,
          width: 1200,
          height: 630,
        },
      ],
      locale: "en-US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: {
        template: `%s | ${config.siteName}`,
        default: `${config.siteName}`,
      },
      description: config.siteDescription,
      site: "arynecabatan",
      siteId: "2614346772",
      creator: "arynecabatan",
      creatorId: "2614346772",
      images: {
        default: config.siteImage,
      },
    },

    icons: {
      icon: "/logo-minified-dark.svg",
      shortcut: "/logo-minified-dark.svg",
      apple: "/logo-minified-dark.svg",
      other: {
        rel: "apple-touch-icon-precomposed",
        url: "/logo-minified-dark.svg",
      },
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={ibmPlexSans.className}>
        <ScrollToTop />
        <ThemeProvider>
          <Navigation />
          <main className="min-h-screen w-full flex justify-center">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
