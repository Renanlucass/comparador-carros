import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import styles from '../styles/ComparisonTable.module.css';

const ComparisonTable = ({ cars }) => {
  return (
    <TableContainer component={Paper} className={styles.tableContainer}>

      <Table>

        <TableHead>

          <TableRow>
            <TableCell className={styles.tableHeader}>Recurso</TableCell>
            {cars.map((car, index) => (
              <TableCell key={index} className={styles.tableHeader}>{car.model}</TableCell>
            ))}
          </TableRow>
          
        </TableHead>

          <TableRow>
            <TableCell className={styles.tableCell}>Ano</TableCell>
            {cars.map((car, index) => (
              <TableCell key={index} className={styles.tableCell}>{car.year}</TableCell>
            ))}
          </TableRow>

        <TableBody>
          <TableRow>
            <TableCell className={styles.tableCell}>Preço</TableCell>
            {cars.map((car, index) => (
              <TableCell key={index} className={styles.tableCell}>R${car.price}</TableCell>
            ))}
          </TableRow>

          <TableRow>
            <TableCell className={styles.tableCell}>Motor</TableCell>
            {cars.map((car, index) => (
              <TableCell key={index} className={styles.tableCell}>{car.engine}</TableCell>
            ))}
          </TableRow>

          <TableRow>
            <TableCell className={styles.tableCell}>Combustível</TableCell>
            {cars.map((car, index) => (
              <TableCell key={index} className={styles.tableCell}>{car.typeFuel}</TableCell>
            ))}
          </TableRow>

          <TableRow>
            <TableCell className={styles.tableCell}>Consumo de Combustível</TableCell>
            {cars.map((car, index) => (
              <TableCell key={index} className={styles.tableCell}>{car.fuelConsumption} KM/L</TableCell>
            ))}
          </TableRow>

          <TableRow>
            <TableCell className={styles.tableCell}>Potência</TableCell>
            {cars.map((car, index) => (
              <TableCell key={index} className={styles.tableCell}>{car.horsepower} CV</TableCell>
            ))}
          </TableRow>

          <TableRow>
            <TableCell className={styles.tableCell}>Torque</TableCell>
            {cars.map((car, index) => (
              <TableCell key={index} className={styles.tableCell}>{car.torque} Nm</TableCell>
            ))}
          </TableRow>

          <TableRow>
            <TableCell className={styles.tableCell}>Aceleração (0-100 km/h)</TableCell>
            {cars.map((car, index) => (
              <TableCell key={index} className={styles.tableCell}>{car.acceleration} s</TableCell>
            ))}
          </TableRow>

          <TableRow>
            <TableCell className={styles.tableCell}>Aceleração Máxima</TableCell>
            {cars.map((car, index) => (
              <TableCell key={index} className={styles.tableCell}>{car.maxAcceleration} KM/H</TableCell>
            ))}
          </TableRow>

          <TableRow>
            <TableCell className={styles.tableCell}>Transmissão</TableCell>
            {cars.map((car, index) => (
              <TableCell key={index} className={styles.tableCell}>{car.transmission}</TableCell>
            ))}
          </TableRow>

        </TableBody>

      </Table>

    </TableContainer>
  );
};

export default ComparisonTable;
