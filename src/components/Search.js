import React from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import styles from '../styles/Search.module.css';

export default function SearchBar({ searchQuery, handleSearchChange }) {
  return (
    <TextField
      variant="outlined"
      placeholder="Buscar carros"
      value={searchQuery}
      onChange={handleSearchChange}
      className={styles.searchBar}
      InputProps={{
        className: styles.searchInput,
        startAdornment: (
          <InputAdornment position="start">
            <IconButton className={styles.searchButton}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}
