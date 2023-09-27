import Layout from "@/components/global/Layout";
import "@/style/globals.css";
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Sweet John",
  description: "Generated by create next app",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
