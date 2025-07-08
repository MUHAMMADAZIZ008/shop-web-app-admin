import React from "react";
import { ConfigProvider, theme } from "antd";
import { useTelegram } from "../hooks/use-telegram";

function AntProvider({ children }: { children: React.ReactNode }) {
  const { isDarkMode, themeParams } = useTelegram();

  const antdTheme = {
    algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
    token: {
      colorPrimary: themeParams.button_color || "#2eabff",
      colorTextBase:
        themeParams.text_color || (isDarkMode ? "#ffffff" : "#000000"),
      colorBgBase: themeParams.bg_color || (isDarkMode ? "#1c2526" : "#ffffff"),
      colorLink: themeParams.link_color || "#2eabff",
      colorTextSecondary:
        themeParams.hint_color || (isDarkMode ? "#b0b0b0" : "#666666"),
    },
  };

  return <ConfigProvider theme={antdTheme}>{children}</ConfigProvider>;
}

export default AntProvider;
