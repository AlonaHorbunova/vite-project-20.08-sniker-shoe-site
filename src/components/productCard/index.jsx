import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import styles from "./styles.module.css";

const ProductCard = ({ name, image, price }) => {
  return (
    <Card className={styles.card}>
      <CardMedia
        component="img"
        height="140"
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
        <Box className={styles.priceContainer}>
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
        </Box>
      </CardContent>
      <Box className={styles.addButtonContainer}>
        <IconButton className={styles.addButton}>
          <AddIcon />
        </IconButton>
      </Box>
    </Card>
  );
};

export default ProductCard;
