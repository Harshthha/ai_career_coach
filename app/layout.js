import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { Header } from "@radix-ui/react-accordion";

const inter = Inter({subsets:["latin"]});

export const metadata = {
  title: "AI-career-coach",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} `}
      >
             <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {/*header*/}
            <Header/>
            <main className="min-h-screen">{children}</main>
            {/*footer*/}
            <footer>
              <div>
                <p>
                  Made with Love
                </p>
              </div>
            </footer>
          </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
