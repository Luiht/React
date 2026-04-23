<<<<<<< HEAD
=======
import { useState} from 'react';

>>>>>>> aad24c2c4b5038ca4c8274e7917728af343dcbb4
import { GifList } from './gifs/components/GifList';
import { PreviousSearches } from './gifs/components/PreviousSearches';

import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from './shared/components/SearchBar';
<<<<<<< HEAD

import { useGifs } from './gifs/hooks/useGifs';

export const GifsApp = () => {
  const { handleSearch, previousTerms, handleTermClicked, gifs } = useGifs();
=======
import type { Gif } from './gifs/interfaces/gif.interface';
import { getGifsByQuery } from './gifs/actions/get-gifs-by-query.action';
import { mockGifs } from './mock-data/gifs.mock';


export const GifsApp = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  const handleTermClicked = (term: string) => {
    console.log({ term });
  };

  const handleSearch = async (query: string = '') => {
    query = query.trim().toLowerCase();

    if (query.length === 0) return;

    if (previousTerms.includes(query)) return;

    setPreviousTerms([query, ...previousTerms].splice(0, 8));

    const gifs = await getGifsByQuery(query);
    setGifs(gifs);
  };
>>>>>>> aad24c2c4b5038ca4c8274e7917728af343dcbb4

  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Buscador de Gifs"
        description="Descubre y comparte el Gif perfecto"
      />

      {/* Search */}
      <SearchBar placeholder="Busca lo que quieras" onQuery={handleSearch} />

      {/* Búsquedas previas */}
      <PreviousSearches
        searches={previousTerms}
        onLabelClicked={handleTermClicked}
      />

      {/* Gifs */}
<<<<<<< HEAD
      <GifList gifs={gifs} />
=======
      <GifList gifs={mockGifs} />
>>>>>>> aad24c2c4b5038ca4c8274e7917728af343dcbb4
    </>
  );
};
