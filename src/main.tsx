import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { QueryClient, QueryClientProvider } from "react-query";
import { DataProvider } from "./context/DataContext.tsx";
import { LoaderProvider } from "./context/LoaderContext.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <DataProvider>
      <LoaderProvider>
        <App />
      </LoaderProvider>
    </DataProvider>
  </QueryClientProvider>
);
