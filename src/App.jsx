import { Routes, Route, useLocation } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import BasicDetailsPage from "./pages/BasicDetailsPage";
import GeneralInfoPage from "./pages/GeneralInfoPage";
import SongPreferencePage from "./pages/SongPreferencePage";
import ExtraDetailsPage from "./pages/ExtraDetailsPage";
import LyricsPage from "./pages/LyricsPage";
import ShareSongPage from "./pages/ShareSongPage";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();

  useEffect(() => {
    let timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {isLoading && location.pathname === "/" ? (
        <SplashScreen />
      ) : (
        <Layout>
          <Routes>
            <Route path="/" element={<BasicDetailsPage />} />
            <Route path="/general-info" element={<GeneralInfoPage />} />
            <Route path="/song-preference" element={<SongPreferencePage />} />
            <Route path="/extra-details" element={<ExtraDetailsPage />} />
            <Route path="/lyrics-page" element={<LyricsPage />} />
            <Route path="/share-song" element={<ShareSongPage />} />
          </Routes>
        </Layout>
      )}
    </>
  );
}

export default App;
