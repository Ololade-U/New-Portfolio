import { Grid, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import BackgroundAnimation from "./app_components/BackgroundAnimation";
import SideBar from "./app_components/SideBar";
import NavBar from "./app_components/NavBar";
import MainPage from "./app_components/MainPage";
import TopNav from "./app_components/TopNav";
import Loader from "./app_components/Loader";
import { Toaster } from "./components/ui/toaster";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timeoutId: ReturnType<typeof window.setTimeout> | null = null;

    const handleLoad = () => {
      timeoutId = window.setTimeout(() => setLoading(false), 1200);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
      }
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <>
      <Loader visible={loading} />
      <Toaster />
      <section className="gen-cont">
        <BackgroundAnimation />
        <TopNav />
        <Grid
          h={"100vh"}
          templateColumns={{ mdTo2xl: "25vw 1fr 100px", mdDown: "1fr" }}
          gap="4"
          w={{ mdDown: "100vw" }}
        >
          <Box
            h={{ mdTo2xl: "100%" }}
            w={{ mdDown: "100vw" }}
            px={"1rem"}
            zIndex={"1000"}
            mb={{ mdDown: "7rem" }}
          >
            <SideBar />
          </Box>
          <Box
            zIndex={"1000"}
            pt={{ mdTo2xl: "4rem" }}
            px={"1rem"}
            overflowY={{ mdTo2xl: "auto" }}
            scrollbar={"hidden"}
            w={{ mdDown: "100vw" }}
          >
            <MainPage />
          </Box>
          <Box hideBelow={"md"} zIndex={"2500"} h="100%">
            <NavBar />
          </Box>
        </Grid>
      </section>
    </>
  );
};

export default App;
