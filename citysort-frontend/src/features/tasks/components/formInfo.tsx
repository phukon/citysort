import toast from 'react-hot-toast';

export const notify = () =>
  toast.success('You found the form!', {
    duration: 6000,
    position: 'bottom-center',

    // Styling
    style: { background: '#4299e1', color: '#fff' },

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
  toast('Scroll down to find the form!', {
    duration: 3000,
    position: 'top-center',

    // Styling
    style: {background: '#4299e1', color: '#fff'},

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

  export const tap = () =>
    toast('Tap on an entry to visit the dashboard. 👇🏽', {
      duration: 3500,
      position: 'top-right',

      // Styling
      style: { background: '#139e59', color: '#fff' },

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
