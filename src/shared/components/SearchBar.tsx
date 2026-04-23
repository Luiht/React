<<<<<<< HEAD
import { useEffect, useState, type KeyboardEvent } from 'react';

interface Props {
  placeholder?: string;

  onQuery: (query: string) => void;
}

export const SearchBar = ({ placeholder = 'Buscar', onQuery }: Props) => {
  const [query, setQuery] = useState('');
=======
import { useState } from "react";
import { useEffect } from "react";

interface Props {
  placeholder?: string;
  onQuery: (query: string) => void;
}

export const SearchBar = ({ onQuery, placeholder = "Buscar gifs" }: Props) => {
  const [query, setQuery] = useState("");


  const handleSearch = () => {
    onQuery(query);
  };
>>>>>>> aad24c2c4b5038ca4c8274e7917728af343dcbb4

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onQuery(query);
    }, 700);
<<<<<<< HEAD

=======
>>>>>>> aad24c2c4b5038ca4c8274e7917728af343dcbb4
    return () => {
      clearTimeout(timeoutId);
    };
  }, [query, onQuery]);

<<<<<<< HEAD
  const handleSearch = () => {
    onQuery(query);
    // setQuery('');
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
=======
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
>>>>>>> aad24c2c4b5038ca4c8274e7917728af343dcbb4
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
<<<<<<< HEAD
        placeholder={placeholder}
=======
        placeholder={placeholder}  // Usar la prop
>>>>>>> aad24c2c4b5038ca4c8274e7917728af343dcbb4
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
<<<<<<< HEAD
};
=======
};
>>>>>>> aad24c2c4b5038ca4c8274e7917728af343dcbb4
