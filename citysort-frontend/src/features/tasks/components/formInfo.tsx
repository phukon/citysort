import toast from 'react-hot-toast';

export const notify = () =>
  toast.success('You found the form!', {
    duration: 6000,
    position: 'bottom-center',

    // Styling
    style: {},
    className: 'bg-blue-500 text-white',

    // Custom Icon
    // icon: '👏',

    // Change colors of success/error/loading icon
    iconTheme: {
      primary: '#000',
      secondary: '#fff',
    },

    // Aria
    ariaProps: {
      role: 'status',
      'aria-live': 'polite',
    },
  });

export const guide = () =>
  toast.success('Scroll down to find the form!', {
    duration: 3000,
    position: 'top-center',

    // Styling
    style: {},
    className: 'bg-blue-500 text-white',

    // Custom Icon
    // icon: '👏',

    // Change colors of success/error/loading icon
    iconTheme: {
      primary: '#000',
      secondary: '#fff',
    },

    // Aria
    ariaProps: {
      role: 'status',
      'aria-live': 'polite',
    },
  });
