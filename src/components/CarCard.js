import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import styles from '../styles/CarCard.module.css';

const CarCard = ({ car }) => {
  return (
    <Card className={styles.card}>
      <CardContent>
        <div className={styles.ImgContainer}>
          <img src={car.image} alt={`${car.marca} ${car.modelo}`} />
        </div>
        <Typography variant="h5" component="div" className={styles.model}>
          {car.modelo}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary" className={styles.make}>
          {car.marca}
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="body2" className={styles.details}>
              <strong>Ano:</strong> {car.ano}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" className={styles.details}>
              <strong>Preço:</strong> R${car.preco}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" className={styles.details}>
              <strong>Consumo:</strong> {car.consumo} km/l
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CarCard;
