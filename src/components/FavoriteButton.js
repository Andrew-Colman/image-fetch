import { Button } from 'reactstrap';
import useFavoriteImage from '../hooks/useFavoriteImage';

export default function FavoriteButton({ imageUrl, id, location }) {
  const { isFavorite, toggleIsFavorite } = useFavoriteImage(id, imageUrl, location);

  return (
    <>
      <Button color="dark" size="sm" onClick={toggleIsFavorite}>
        <i
          className={`fas fa-star ${
            isFavorite ? 'text-success animate__animated animate__tada' : 'text-secondary'
          }
          `}
        />
      </Button>
    </>
  );
}
