import { useLocation } from 'react-router-dom';

export default function useParams(param) {
  const queryParams = new URLSearchParams(useLocation().search);

  return queryParams.get(param);
}
