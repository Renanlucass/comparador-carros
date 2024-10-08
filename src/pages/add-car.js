import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Alert, CircularProgress, Box } from '@mui/material';
import styles from '../styles/addCar.module.css';
import Upload from '@/components/Upload';

const AddCar = () => {
  const [formData, setFormData] = useState({
    model: '',
    make: '',
    year: '',
    price: '',
    fuelConsumption: '',
  });

  const [imageLink, setImageLink] = useState("");
  const handleImageURLChange = imageUrl => {
    setImageLink(imageUrl);
  };

  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    let newValue = value;
    if (name === 'year' && value.length > 4) {
      newValue = value.slice(0, 4);
    } else if (name === 'price' && value.length > 10) {
      newValue = value.slice(0, 10);
    } else if (name === 'fuelConsumption' && value.length > 5) {
      newValue = value.slice(0, 5);
    }

    setFormData((prevData) => ({ ...prevData, [name]: newValue }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('http://localhost:5000/novo-veiculo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          marca: formData.make,
          modelo: formData.model,
          ano: parseInt(formData.year, 10),
          consumo: formData.fuelConsumption,
          preco: parseFloat(formData.price),
          imagem: imageLink
        }),
      });

      setFormData({
        model: '',
        make: '',
        year: '',
        price: '',
        fuelConsumption: '',
      });
      setShowAlert(true);
    } catch (error) {
      console.error('Erro ao adicionar o carro:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className={styles.container}>
      <Typography variant="h2" color="#003366" gutterBottom className={styles.header}>
        Adicionar Novo Carro
      </Typography>

      <form onSubmit={handleSubmit} className={styles.form}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Modelo"
              name="model"
              value={formData.model}
              onChange={handleChange}
              fullWidth
              required
              className={styles.textField}
              inputProps={{ maxLength: 50 }}  
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Marca"
              name="make"
              value={formData.make}
              onChange={handleChange}
              fullWidth
              required
              className={styles.textField}
              inputProps={{ maxLength: 50 }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Ano"
              name="year"
              type="number"
              value={formData.year}
              onChange={handleChange}
              fullWidth
              required
              className={styles.textField}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Preço"
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              fullWidth
              required
              className={styles.textField}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Consumo de Combustível (km/l)"
              name="fuelConsumption"
              type="number"
              value={formData.fuelConsumption}
              onChange={handleChange}
              fullWidth
              required
              className={styles.textField}
            />
          </Grid>

          <Grid item xs={12}>
            <Upload onURLChange={handleImageURLChange} />
          </Grid>

          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={`${styles.button} ${styles.addCarButton}`}
              disabled={loading}
            >
              Adicionar Carro
            </Button>
          </Grid>

        </Grid>

        {showAlert && (
          <Alert severity="info" className={styles.alert}>
            Carro adicionado com sucesso!
          </Alert>
        )}
      </form>

      {loading && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 9999,
          }}
        >
          <CircularProgress size={60} className={styles.spinner} />
        </Box>
      )}
    </Container>
  );
};

export default AddCar;
