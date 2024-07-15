import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import CarCard from '../components/CarCard';
import ComparisonTable from '../components/ComparisonTable';
import carsData from '../data/CarsData';
import { Container, Typography, Grid, Button } from '@mui/material';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [selectedCars, setSelectedCars] = useState([]);
  const comparisonRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (selectedCars.length > 0 && comparisonRef.current) {
      comparisonRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedCars]);

  const addCarToComparison = (car) => {
    if (selectedCars.length < 3 && !selectedCars.includes(car)) {
      const updatedCars = [...selectedCars, car];
      setSelectedCars(updatedCars);
    }
  };

  const resetComparison = () => {
    setSelectedCars([]);
  };

  const navigateToAddCar = () => {
    router.push('/add-car');
  };

  return (
    <Container className={styles.container}>
      <div className={styles.header}>
        <Typography variant="h2" color="#003366">Comparador de Carros</Typography>
        <Typography variant="h5" className={styles.subheader}>
          Escolha até 3 carros para comparar
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={navigateToAddCar}
          className={styles.addCarButton}
        >
          Cadastrar Novo Carro
        </Button>
      </div>
      <Grid container spacing={2}>
        {carsData.map((car, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <CarCard car={car} onAdd={addCarToComparison} />
          </Grid>
        ))}
      </Grid>
      {selectedCars.length > 0 && (
        <div ref={comparisonRef}>
          <Typography variant="h5" align="center" gutterBottom color="#003366">
            Comparar Carros Selecionados
          </Typography>
          <ComparisonTable cars={selectedCars} />
          <Button
            variant="contained"
            color="error"
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
