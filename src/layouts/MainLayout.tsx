import { useCallback, useState } from "react";
import { useLocation, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import ScrollToTop from "../components/ScrollToTop";
import VisitorActionPopup from "../components/VisitorActionPopup";
import WhatsAppChat from "../components/WhatsAppChat";
import ictBackground from "../assets/Collaborative ICT Bootcamp Training.png";
import innovationBackground from "../assets/Collaborative Innovation Lab Training.png";
import agribusinessBackground from "../assets/GLOFORD Agribusiness Innovation in Action.png";
import loansBackground from "../assets/GLOFORD Enterprise Loan Approval.png";

const pageBackgrounds: Record<string, string> = {
  "/": innovationBackground,
  "/about": innovationBackground,
  "/services": loansBackground,
  "/agribusiness": agribusinessBackground,
  "/ict": ictBackground,
  "/resources": innovationBackground,
  "/contact": innovationBackground,
  "/privacy-policy": loansBackground,
  "/terms-and-conditions": loansBackground,
};

export default function MainLayout() {
  const { pathname } = useLocation();
  const [dismissedPath, setDismissedPath] = useState<string | null>(null);
  const isPopupOpen = dismissedPath !== pathname;
  const closePopup = useCallback(() => setDismissedPath(pathname), [pathname]);
  const background = pageBackgrounds[pathname] ??
    (pathname.startsWith("/resources/") ? pageBackgrounds["/resources"] : innovationBackground);

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main
        className="page-background flex-1"
        style={{
          backgroundImage: `linear-gradient(rgb(240 247 255 / 90%), rgb(240 247 255 / 90%)), url("${background}")`,
        }}
      >
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppChat />
      {isPopupOpen && <VisitorActionPopup key={pathname} onClose={closePopup} />}
    </div>
  );
}
