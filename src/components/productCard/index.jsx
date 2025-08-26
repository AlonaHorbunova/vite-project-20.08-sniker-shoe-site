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
    <Card className={styles.card}>
      <CardMedia
        component="img"
        image={image}
        alt={name}
        className={styles.cardMedia}
      />
      <CardContent className={styles.cardContent}>
        <Typography gutterBottom variant="subtitle1" component="div">
          Мужские Кроссовки
        </Typography>
        <Typography variant="h6" component="div">
          {name}
        </Typography>
        <div className={styles.priceContainer}>
          <Typography
            variant="body2"
            color="text.secondary"
            className={styles.priceLabel}
          >
            ЦЕНА:
          </Typography>
          <Typography
            variant="h6"
            component="div"
            className={styles.priceValue}
          >
            {price} €
          </Typography>
        </div>
      </CardContent>
      <IconButton className={styles.addButton}>
        <AddIcon />
      </IconButton>
    </Card>
  );
};

export default ProductCard;
