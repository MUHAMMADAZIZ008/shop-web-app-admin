import { Button, Card, Typography } from "antd";
const { Text } = Typography;

export const HomePage = () => {
  return (
    <Card style={{ textAlign: "center" }}>
      <img
        src="https://via.placeholder.com/200x200.png?text=Shopping+Cart"
        alt="Shopping Cart"
        style={{ maxWidth: "100%", height: "auto", marginBottom: "20px" }}
      />
      <Text style={{ display: "block" }}>
        Магазины еще не созданы<br />
        Для создания нового магазина нажмите кнопку<br />
        «Создать магазин» и заполните данные
      </Text>
      <Button type="primary" style={{ marginTop: "20px", width: "100%", maxWidth: "300px" }}>
        Do'kon yaratish
      </Button>
    </Card>
  );
};
