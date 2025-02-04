'use client';

import { useEffect } from "react";

export default function LocalStorageCleaner() {
  useEffect(() => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('url');
  }, []);

  return null; // No UI needed
}
