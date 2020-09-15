import React from 'react';
import { Button } from 'reactstrap';
import useLocalStorage from '../../../components/useLocalStorage';
import useToasts from '../../../components/useToasts';

export default function FavoriteButton({ Large, Id, Location }) {
  const [toggled, setToggle] = React.useState(false);
  const [value, setIsFavorite, getKey, removeValue] = useLocalStorage(Id);

  const [notify] = useToasts();

  const toggleState = () => {
    setToggle(!toggled);

    if (toggled === false) {
      setIsFavorite(Large);

      notify('Saved to your gallery');
    } else {
      removeValue(Id);
      notify(`Removed from your gallery`);
    }
  };

  React.useEffect(() => {
    if (value || Location === 'gallery') setToggle(true);
  }, [Location, value]);

  return (
    <>
      <Button
        color="dark"
        size="sm"
        onClick={() => {
          toggleState();
        }}
      >
        <i
          className={`fas fa-star ${
            toggled ? 'text-success animate__animated animate__tada' : 'text-secondary'
          }`}
        />
      </Button>
    </>
  );
}
