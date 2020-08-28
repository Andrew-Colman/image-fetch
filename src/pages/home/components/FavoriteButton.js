import React from 'react';
import useLocalStorage from '../../../components/useLocalStorage';

export default function FavoriteButton({ Large, Id }) {
  const [toggled, setToggle] = React.useState(false);
  const [isFavorite, setIsFavorite, removeValue] = useLocalStorage(Id, Large);

  const toggleState = () => {
    setToggle(!toggled);
    if (!toggled) {
      setIsFavorite(Large);
    } else {
      removeValue(Id);
    }
  };

  React.useEffect(() => {
    if (isFavorite !== Large) {
      console.log(isFavorite);
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
        <i className={`fas fa-star fa-sm ${toggled ? 'text-success' : 'text-secondary'}`} />
      </button>
    </>
  );
}
