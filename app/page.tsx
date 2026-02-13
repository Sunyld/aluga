"use client";

import { Suspense } from "react";
import App from "../App";

export default function HomePage() {
  return (
    <Suspense fallback={null}>
      <App />
    </Suspense>
  );
}
