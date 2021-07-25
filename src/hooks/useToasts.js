import { toast, Flip, Slide } from 'react-toastify';

export default function useToasts() {
  const notify = (msg, options = {}) => {
    toast.dismiss();
    toast(msg, {
      type: options.type || 'dark',
      position: options.position || 'bottom-right',
      autoClose: options.delay || 5000,
      transition: options.transition === 'flip' ? Flip : Slide,
    });
  };

  return [notify];
}
