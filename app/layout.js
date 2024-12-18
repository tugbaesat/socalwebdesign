import { Roboto, Raleway, Advent_Pro } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-raleway",
});

const adventPro = Advent_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Specify the weights you need
  variable: "--font-advent-pro",
});

export const metadata = {
  title: "Website Design and Development in Los Angeles, CA | SoCal Web Design",
  description:
    "Based in the heart of Los Angeles, we are dedicated to bringing your vision to life with cutting-edge web solutions tailored to your unique needs. Whether you’re a startup, small business, or established enterprise, we’re here to help you stand out in the digital landscape.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${raleway.variable} ${adventPro.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
