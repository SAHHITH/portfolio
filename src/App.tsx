import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "./App.css";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
const MyWorks = lazy(() => import("./pages/MyWorks"));
const Play = lazy(() => import("./pages/Play"));
import { LoadingProvider } from "./context/LoadingProvider";

const AppContent = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  // When returning to home, scroll to top smoothly
  if (isHome && window.scrollY > 0) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <div
        style={
          isHome
            ? { display: "block" }
            : {
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                visibility: "hidden",
                opacity: 0,
                pointerEvents: "none",
                zIndex: -9999,
                overflow: "hidden"
              }
        }
      >
        <LoadingProvider>
          <Suspense>
            <MainContainer>
              <Suspense>
                <CharacterModel />
              </Suspense>
            </MainContainer>
          </Suspense>
        </LoadingProvider>
      </div>

      <Routes>
        <Route
          path="/myworks"
          element={
            <Suspense fallback={<div style={{height: '100vh', background: '#111'}}></div>}>
              <MyWorks />
            </Suspense>
          }
        />
        <Route
          path="/play"
          element={
            <Suspense fallback={<div style={{height: '100vh', background: '#111'}}></div>}>
              <Play />
            </Suspense>
          }
        />
      </Routes>
      <Analytics />
      <SpeedInsights />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
