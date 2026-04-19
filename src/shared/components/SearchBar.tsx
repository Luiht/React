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

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onQuery(query);
    }, 700);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [query, onQuery]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder={placeholder}  // Usar la prop
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};