import React from 'react';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';
import styles from '../styles/CarCard.module.css';

const CarCard = ({ car, onAdd }) => {
    return (
        <Card className={styles.card}>
            <CardContent>
                
                <div className={styles.ImgContainer}>
                    <img src={car.image} alt={`${car.make} ${car.model}`} />
                </div>
                
                <Typography variant="h5" component="div" className={styles.model}>
                    {car.model}
                </Typography>

                <Typography sx={{ mb: 1.5 }} color="text.secondary" className={styles.make}>
                    {car.make}
                </Typography>

                <Grid container spacing={1}>

                    <Grid item xs={12}>
                        <Typography variant="body2" className={styles.details}>
                            <strong>Ano:</strong> {car.year}
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="body2" className={styles.details}>
                            <strong>Preço:</strong> R${car.price}
                        </Typography>
                    </Grid>


                    <Grid item xs={12}>
                        <Typography variant="body2" className={styles.details}>
                            <strong>Motor:</strong> {car.engine}
                        </Typography>
                    </Grid>

                </Grid>

            </CardContent>

            <Button className={styles.button} size="small" onClick={() => onAdd(car)}>Adicionar à Comparação</Button>

        </Card>
    );
};

export default CarCard;
