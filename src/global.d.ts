// export {};

// declare global {
//   interface TelegramUser {
//     id: number;
//     first_name: string;
//     last_name?: string;
//     username?: string;
//     language_code?: string;
//     is_premium?: boolean;
//     photo_url?: string;
//     allows_write_to_pm?: boolean;
//   }

//   interface InitDataUnsafe {
//     user?: TelegramUser;
//     chat_instance?: string;
//     auth_date?: number;
//     query_id?: string;
//     can_send_after?: number;
//     [key: string]: any;
//   }

//   interface TelegramWebApp {
//     initData: string;
//     initDataUnsafe: InitDataUnsafe;
//     version?: string;
//     platform?: string;
//     colorScheme?: "light" | "dark";
//     themeParams?: {
//       bg_color?: string;
//       text_color?: string;
//       hint_color?: string;
//       link_color?: string;
//       button_color?: string;
//       button_text_color?: string;
//     };
//     isExpanded?: boolean;
//     isClosingConfirmationEnabled?: boolean;
//     viewportHeight?: number;
//     viewportStableHeight?: number;
//     ready: () => void;
//     expand: () => void;
//     close: () => void;
//     MainButton: {
//       show: () => void;
//       hide: () => void;
//       setText: (text: string) => void;
//       onClick: (callback: () => void) => void;
//     };
//   }

//   interface Window {
//     Telegram?: {
//       WebApp: TelegramWebApp;
//     };
//   }
// }
