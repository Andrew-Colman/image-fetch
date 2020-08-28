import React from 'react';
import { toast } from 'react-toastify';
import useLocalStorage from '../../../components/useLocalStorage';

export default function FavoriteButton({ Large, Id }) {
  const [toggled, setToggle] = React.useState(false);
  const [isFavorite, setIsFavorite, removeValue] = useLocalStorage(Id, Large);

  const notify = (msg) =>
    toast(msg, { type: 'dark', position: 'bottom-center', autoClose: 5000, Transition: 'slide' });

  const toggleState = () => {
    setToggle(!toggled);

    if (!toggled) {
      setIsFavorite(Large);
      notify('Saved to your gallery');
    } else {
      removeValue(Id);
      notify('Removed from your gallery');
    }
  };

  React.useEffect(() => {
    if (isFavorite !== Large) {
      setToggle(true);
    }
  }, [Large, isFavorite]);

  return (
    <>
      <button
        type="button"
        className="btn m-1 btn-light"
        href={Large}
        onClick={() => {
          toggleState();
        }}
      >
        <i
          className={`fas fa-star fa-sm ${
            toggled ? 'text-success animate__animated animate__tada' : 'text-secondary'
          }`}
        />
      </button>
    </>
  );
}
