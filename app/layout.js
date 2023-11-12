import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Provider from "@/provider/ThemeProvider";

export const metadata = {
  title: "Blog App",
  description: "The best blog app",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="min-h-screen bgColor textColor ">
            <div className="mx-auto lg:max-w-6xl xl:max-w-7xl px-4 lg:px-10 pt-16 sm:pt-20">
              <Navbar />
              {children}
              <Footer />
            </div>
          </div>
        </Provider>
      </body>
    </html>
  );
}
