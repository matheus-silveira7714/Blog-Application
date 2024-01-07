import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Provider as ThemeProvider } from "@/provider/ThemeProvider";
import AuthProvider from "@/provider/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Blog App",
  description: "The best blog app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <ThemeProvider>
            <div className="min-h-screen bgColor textColor ">
              <div className="mx-auto lg:max-w-6xl xl:max-w-7xl px-4 lg:px-10 pt-16 sm:pt-20">
                <Navbar />
                {children}
                <ToastContainer position="top-right" />
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
