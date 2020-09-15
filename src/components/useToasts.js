import { toast } from 'react-toastify';

export default function useToasts() {
  const notify = (msg) =>
    toast(msg, { type: 'dark', position: 'bottom-center', autoClose: 5000, Transition: 'slide' });

  return [notify];
}
