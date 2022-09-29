import LandingPage from "./pages/LandingPage";
import EventPage from "./pages/EventPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateEventPage from "./pages/CreateEvent";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create" element={<CreateEventPage />} />
        <Route path="/event" element={<EventPage />} />
      </Routes>
    </BrowserRouter>
  );
}
