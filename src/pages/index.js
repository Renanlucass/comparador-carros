import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import CarCard from '../components/CarCard';
import { Container, Typography, Grid, Button, AppBar, Toolbar } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [carsData, setCarsData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchCarsData = async () => {
      try {
        const response = await fetch('http://localhost:5000/veiculos');
        const data = await response.json();
        console.log('Dados dos carros recebidos:', data);
        setCarsData(data);
      } catch (error) {
        console.error('Erro ao buscar os dados dos carros:', error);
      }
    };

    fetchCarsData();
  }, []);

  const navigateToAddCar = () => {
    router.push('/add-car');
  };

  return (
    <>
      <AppBar position="static" className={styles.header}>
        <Toolbar className={styles.toolbar}>
          <Typography variant="h2" color="inherit" className={styles.title}>
            Comparador de Carros
          </Typography>

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
          Lista de Carros
        </Typography>

        <Grid container spacing={2}>
          {carsData.map((car, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <CarCard car={car} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
