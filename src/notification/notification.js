import 'pnotify/dist/PNotifyBrightTheme.css';
import 'pnotify/dist/es/PNotifyAnimate';
import PNotify from 'pnotify/dist/es/PNotify';

const showError = () => {
  PNotify.error({
    text: 'Sometnig went wrong...',
    delay: 3000,
    stack: {
      dir1: 'down',
      dir2: 'right',
      firstpos1: 100,
      firstpos2: 900,
    },
  });
};

export default {
  showError,
};
