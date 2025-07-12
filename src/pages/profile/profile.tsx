import { Typography } from "antd";

const { Text } = Typography;
import { useTelegram } from "../../hooks/use-telegram";

export const ProfilePage = () => {
  const { user, isDarkMode } = useTelegram();

  // Fallback if user data is unavailable
  const displayName = user
    ? `${user.first_name || ""} ${user.last_name || ""}`.trim()
    : "Unknown User";
  const profilePhoto = user?.photo_url || "https://via.placeholder.com/100"; // Fallback image

  return (
    <div className="max-w-[500px] mx-auto p-4">
      <div className="w-1/2 mx-auto mb-4">
        <img
          className="w-full rounded-full"
          src={profilePhoto}
          alt={user?.first_name || "User profile"}
          onError={(e) =>
            ((e.target as HTMLImageElement).src =
              "https://via.placeholder.com/100")
          }
        />
      </div>
      <Text
        className={`text-center ${isDarkMode ? "text-white" : "text-black"}`}
      >
        {displayName}
      </Text>
    </div>
  );
};
