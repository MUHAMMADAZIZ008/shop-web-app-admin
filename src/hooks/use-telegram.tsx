import { useEffect, useState } from "react";
import type { TelegramUser, TelegramWebApp } from "../common/interface";

declare global {
  interface Window {
    Telegram: TelegramWebApp;
  }
}

export function useTelegram() {
  const [user, setUser] = useState<TelegramUser | null>(null);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [themeParams, setThemeParams] = useState<TelegramWebApp["themeParams"]>({});

  useEffect(() => {
    const tg = window.Telegram?.WebApp;

    if (!tg) {
      console.warn("Telegram WebApp is not available.");
      return;
    }

    tg.ready();
    tg.expand();

    const userData = tg.initDataUnsafe?.user;
    if (userData) {
      setUser(userData);
    } else {
      console.warn("initDataUnsafe.user is empty.");
    }

    // Dark mode aniqlash
    setIsDarkMode(tg.colorScheme === "dark");

    // Theme params saqlash
    setThemeParams(tg.themeParams || {});
  }, []);

  return {
    user,
    isDarkMode,
    themeParams,
  };
}
