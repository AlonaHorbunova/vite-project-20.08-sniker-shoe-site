import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import styles from "./styles.module.css";

const ProductCard = ({ name, image, price }) => {
  return (
    <Card
      sx={{
        width: "386px",
        height: "393px",
        border: "1px solid #00000026",
        borderRadius: "42px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        position: "relative",
        padding: "16px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#fff",
        margin: 0,
      }}
    >
      <CardMedia
        component="img"
        image={image}
        alt={name}
        sx={{
          width: "278px",
          height: "127px",
          objectFit: "contain",
          margin: "16px auto",
        }}
      />
      <CardContent
        sx={{
          textAlign: "center",
          padding: 0,
          width: "100%",
        }}
      >
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: 400,
            color: "#000000",
          }}
        >
          {name}
        </Typography>
        <div className={styles.priceContainer}>
          <Typography variant="body2" color="text.secondary">
            ЦЕНА:
          </Typography>
          <Typography variant="h6" component="div">
            {price} €
          </Typography>
        </div>
      </CardContent>
      <IconButton
        sx={{
          position: "absolute",
          bottom: "16px",
          right: "16px",
          backgroundColor: "#f5f5f5",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          "&:hover": {
            backgroundColor: "#e0e0e0",
          },
        }}
      >
        <AddIcon />
      </IconButton>
    </Card>
  );
};

export default ProductCard;
