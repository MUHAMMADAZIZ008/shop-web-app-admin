export interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  allows_write_to_pm?: boolean;
  photo_url?: string;
}

export interface InitDataUnsafe {
  user?: TelegramUser;
  chat_instance?: string;
  auth_date?: number;
  query_id?: string;
  can_send_after?: number;
}

export interface TelegramWebApp {
  WebApp: any;
  initData: string;
  initDataUnsafe: InitDataUnsafe;
  version: string;
  platform: string;
  colorScheme: "light" | "dark";
  themeParams: {
    bg_color?: string;
    text_color?: string;
    hint_color?: string;
    link_color?: string;
    button_color?: string;
    button_text_color?: string;
  };
  isExpanded: boolean;
  isClosingConfirmationEnabled: boolean;
  viewportHeight: number;
  viewportStableHeight: number;
  ready: () => void;
  expand: () => void;
  close: () => void;
}
