import React from 'react';
import { Container, Typography, TextField, Button, Grid, Alert } from '@mui/material';
import styles from '../styles/addCar.module.css';

const AddCar = () => {
  const [showAlert, setShowAlert] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
  };

  return (
    <Container className={styles.container}>
      <Typography variant="h2" color="#003366" gutterBottom>
        Adicionar Novo Carro
      </Typography>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Modelo"
              name="model"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Marca"
              name="make"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Preço"
              name="price"
              type="number"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Motor"
              name="engine"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Consumo de Combustível (km/l)"
              name="fuelConsumption"
              type="number"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Potência (hp)"
              name="horsepower"
              type="number"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Torque (Nm)"
              name="torque"
              type="number"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Aceleração (0-100 km/h) (s)"
              name="acceleration"
              type="number"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Transmissão"
              name="transmission"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={styles.button}
            >
              Adicionar Carro
            </Button>
          </Grid>
        </Grid>
        {showAlert && (
          <Alert severity="info" className={styles.alert}>
            Esta página é apenas para fins apresentativos. A lógica de adição de carros não está implementada.
          </Alert>
        )}
      </form>
    </Container>
  );
};

export default AddCar;
