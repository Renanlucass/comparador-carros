import React, { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import CarCard from '../components/CarCard';
import ComparisonTable from '../components/ComparisonTable';
import carsData from '../data/CarsData';
import SearchBar from '../components/Search';
import { Container, Typography, Grid, Button, AppBar, Toolbar } from '@mui/material';
import AddIcon from '@mui/icons-material/Add'; 
import styles from '../styles/Home.module.css';

export default function Home() {
  const [selectedCars, setSelectedCars] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const comparisonRef = useRef(null);
  const router = useRouter();

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const addCarToComparison = (car) => {
    if (selectedCars.length < 3 && !selectedCars.includes(car)) {
      const updatedCars = [...selectedCars, car];
      setSelectedCars(updatedCars);

      setTimeout(() => {
        if (comparisonRef.current) {
          comparisonRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    }
  };

  const resetComparison = () => {
    setSelectedCars([]);
  };

  const navigateToAddCar = () => {
    router.push('/add-car');
  };

  const filteredCarsData = carsData.filter((car) =>
    car.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
    car.make.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <AppBar position="static" className={styles.header}>
        <Toolbar className={styles.toolbar}>
          <Typography variant="h2" color="inherit" className={styles.title}>
            Comparador de Carros
          </Typography>

          <SearchBar searchQuery={searchQuery} handleSearchChange={handleSearchChange} />

          <Button
            variant="contained"
            color="primary"
            onClick={navigateToAddCar}
            className={styles.addCarButton}
          >
            <AddIcon className={styles.addCarIcon} />
            Cadastrar Novo Carro
          </Button>
        </Toolbar>
      </AppBar>

      <Container className={styles.container}>
        <Typography variant="h5" className={styles.subheader}>
          Escolha até 3 carros para comparar
        </Typography>

        <Grid container spacing={2}>
          {filteredCarsData.map((car, index) => (
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
    </>
  );
}
