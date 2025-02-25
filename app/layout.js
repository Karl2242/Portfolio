import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio de Karl Chikhoun - Apprenti Developer",
  description:
    `🚀 Salut, moi c'est Karl Chikhoun !  
Développeur Web Junior passionné, je n'ai jamais cessé d'apprendre.  
Curieux de nature, j'ai une soif insatiable de connaissances et une envie constante de repousser mes limites.  

💡 Explorer, comprendre, créer. C'est ce qui me motive au quotidien.  

Prêt à relever de nouveaux défis et à bâtir des projets innovants ! 🔥`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" class="scroll-smooth">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
