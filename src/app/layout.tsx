import "./global.scss";
import { Hammersmith_One, Montserrat, Poppins } from "next/font/google";

const hammersmith_one = Hammersmith_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-hammersmith-one",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${hammersmith_one.variable} ${montserrat.variable} ${poppins.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
