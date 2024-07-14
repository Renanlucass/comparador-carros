import React from 'react';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';
import styles from '../styles/CarCard.module.css';

const CarCard = ({ car, onAdd }) => {
    return (
        <Card className={styles.card}>
            <CardContent>

                <Typography variant="h5" component="div" className={styles.model}>
                    {car.model}
                </Typography>

                <Typography sx={{ mb: 1.5 }} color="text.secondary" className={styles.make}>
                    {car.make}
                </Typography>

                <Grid container spacing={1}>
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

                    <Grid item xs={12}>

                        <Typography variant="body2" className={styles.details}>
                            <strong>Consumo de Combustível:</strong> {car.fuelConsumption} km/l
                        </Typography>

                    </Grid>

                    <Grid item xs={12}>

                        <Typography variant="body2" className={styles.details}>
                            <strong>Potência:</strong> {car.horsepower} hp
                        </Typography>

                    </Grid>

                    <Grid item xs={12}>

                        <Typography variant="body2" className={styles.details}>
                            <strong>Torque:</strong> {car.torque} Nm
                        </Typography>

                    </Grid>

                    <Grid item xs={12}>

                        <Typography variant="body2" className={styles.details}>
                            <strong>Aceleração (0-100 km/h):</strong> {car.acceleration} s
                        </Typography>

                    </Grid>

                    <Grid item xs={12}>

                        <Typography variant="body2" className={styles.details}>
                            <strong>Transmissão:</strong> {car.transmission}
                        </Typography>

                    </Grid>

                </Grid>

            </CardContent>
            <Button className={styles.button} size="small" onClick={() => onAdd(car)}>Adicionar à Comparação</Button>

        </Card>
    );
};

export default CarCard;
