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
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="We specialize in providing comprehensive design and detailing solutions for structural steel, catering to projects of all sizes and complexities."/>
        <meta name="robots" content="all" />
        <title>Bluedraft</title>
        <link rel="icon" href="/bd_symbol_logo_blue.png" type="image/png" />

      </head>
      <body
        className={`${hammersmith_one.variable} ${montserrat.variable} ${poppins.variable}`}
      >
        {children}
      </body>
    </html>
  );
}