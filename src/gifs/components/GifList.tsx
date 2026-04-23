import type { FC } from 'react';
<<<<<<< HEAD
import type { Gif } from '../interfaces/gif.interface';
=======
import type { Gif } from '../../mock-data/gifs.mock';
>>>>>>> aad24c2c4b5038ca4c8274e7917728af343dcbb4

interface Props {
  gifs: Gif[];
}

export const GifList: FC<Props> = ({ gifs }) => {
  return (
    <div className="gifs-container">
      {gifs.map((gif) => (
        <div key={gif.id} className="gif-card">
          <img src={gif.url} alt={gif.title} />
          <h3>{gif.title}</h3>
          <p>
            {gif.width}x{gif.height} (1.5mb)
          </p>
        </div>
      ))}
    </div>
  );
};
