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
            <TableCell className={styles.tableCell}>Consumo de Combustível</TableCell>
            {cars.map((car, index) => (
              <TableCell key={index} className={styles.tableCell}>{car.fuelConsumption} km/l</TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell className={styles.tableCell}>Potência</TableCell>
            {cars.map((car, index) => (
              <TableCell key={index} className={styles.tableCell}>{car.horsepower} hp</TableCell>
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
