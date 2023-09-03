/** @jsxImportSource @emotion/react */

import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./constants/theme";
import AppRoutes from "./routes";
import Layout from "./components/Layout/Layout";
import { RecoilRoot } from "recoil";
import { LoadingProvider } from "./context/LoadingContext";
import LoadingComponent from "./components/UI/LoadingComponent";
import { QueryClient, QueryClientProvider } from "react-query";
import { CropImageProvider } from "./context/CropImageContext";
import ToasterContext from "./context/ToasterContext";
import { CertifiedImageProvider } from "./context/CertifiedImageContext";
import AuthGuard from "./components/Auth/AuthGuard";
import { PostingDataProvider } from "./context/PostingDataContext";
import { ReviewContextProvider } from "./context/ReviewContext";
import MapContexProvider from "./context/MapContext";
import AxiosNavigation from "./api/axiosNavigate";

const queryClient = new QueryClient();

function App() {
  return (
    <Router>
      <AxiosNavigation />
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <LoadingProvider>
            <ThemeProvider theme={theme}>
              <ReviewContextProvider>
                <PostingDataProvider>
                  <CropImageProvider>
                    <CertifiedImageProvider>
                      <MapContexProvider>
                        <AuthGuard>
                          <Layout>
                            <ToasterContext />
                            <AppRoutes />
                            <LoadingComponent />
                          </Layout>
                        </AuthGuard>
                      </MapContexProvider>
                    </CertifiedImageProvider>
                  </CropImageProvider>
                </PostingDataProvider>
              </ReviewContextProvider>
            </ThemeProvider>
          </LoadingProvider>
        </RecoilRoot>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
