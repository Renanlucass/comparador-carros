import React, { useState } from 'react';
import CarCard from '../components/CarCard';
import ComparisonTable from '../components/ComparisonTable';
import { Container, Typography, Grid, Button } from '@mui/material';
import styles from '../styles/Home.module.css';

const carsData = [
  { model: 'Model X', make: 'Tesla', price: 79999, engine: 'Elétrico', fuelConsumption: 15, horsepower: 670, torque: 650, acceleration: 2.6, transmission: 'Automático' },
  { model: 'Civic', make: 'Honda', price: 21999, engine: 'Gasolina', fuelConsumption: 12, horsepower: 158, torque: 138, acceleration: 8.2, transmission: 'Automático CVT' },
  { model: 'Mustang', make: 'Ford', price: 55999, engine: 'V8', fuelConsumption: 8, horsepower: 450, torque: 410, acceleration: 4.3, transmission: 'Manual' },
  { model: 'Corolla', make: 'Toyota', price: 23999, engine: 'Gasolina', fuelConsumption: 14, horsepower: 139, torque: 126, acceleration: 9.0, transmission: 'Automático' },
  { model: 'A3', make: 'Audi', price: 35999, engine: 'Turbo', fuelConsumption: 10, horsepower: 184, torque: 221, acceleration: 6.6, transmission: 'Automático' },
  { model: 'X5', make: 'BMW', price: 65999, engine: 'Diesel', fuelConsumption: 11, horsepower: 335, torque: 330, acceleration: 5.3, transmission: 'Automático' },
  { model: '302 GT', make: 'Porsche', price: 99999, engine: 'Boxer', fuelConsumption: 9, horsepower: 502, torque: 346, acceleration: 3.8, transmission: 'Automático' },
  { model: '500L', make: 'Fiat', price: 17999, engine: 'Gasolina', fuelConsumption: 13, horsepower: 160, torque: 184, acceleration: 8.0, transmission: 'Automático' },
  { model: 'S-Class', make: 'Mercedes', price: 89999, engine: 'V6', fuelConsumption: 12, horsepower: 362, torque: 369, acceleration: 5.4, transmission: 'Automático' },
];

export default function Home() {
  const [selectedCars, setSelectedCars] = useState([]);

  const addCarToComparison = (car) => {
    if (selectedCars.length < 3 && !selectedCars.includes(car)) {
      setSelectedCars([...selectedCars, car]);
    }
  };

  const resetComparison = () => {
    setSelectedCars([]);
  };

  return (
    <Container className={styles.container}>
      <div className={styles.header}>
        <Typography variant="h2" color="#003366">Comparador de Carros</Typography>
        <Typography variant="h5" className={styles.subheader}>
          Escolha até 3 carros para comparar
        </Typography>
      </div>
      <Grid container spacing={2}>
        {carsData.map((car, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <CarCard car={car} onAdd={addCarToComparison} />
          </Grid>
        ))}
      </Grid>
      {selectedCars.length > 0 && (
        <div>
          <Typography variant="h5" align="center" gutterBottom color="#003366">
            Comparar Selecionados
          </Typography>
          <ComparisonTable cars={selectedCars} />
          <Button
            variant="contained"
            color="secondary"
            onClick={resetComparison}
            className={styles.resetButton}
          >
            Resetar Comparação
          </Button>
        </div>
      )}
    </Container>
  );
}
