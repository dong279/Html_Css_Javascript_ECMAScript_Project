import { AppHeader } from "./AppHeader.jsx";
import { AppRoutes } from "./routes.jsx";
import "@/shared/styles/global.css";

export default function App() {
  return (
    <>
      <AppHeader />
      <main>
        <AppRoutes />
      </main>
    </>
  );
}
