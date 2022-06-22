export const avatarMotion = {
  init: {
    borderRadius: '30px',
    transition: {
      duration: 0.3,
      type: 'tween',
      ease: 'easeIn',
    },
  },
  hover: {
    borderRadius: '15px',
    transition: {
      duration: 0.3,
      type: 'tween',
      ease: 'easeOut',
    },
  },
  selected: {
    borderRadius: '10px',
    transition: {
      duration: 0.3,
      type: 'tween',
      ease: 'easeOut',
    },
  },
};

export const leftMotionHiddenStart = {
  init: {
    height: '8px',
    opacity: 0,
    transition: {
      duration: 0.3,
      type: 'tween',
      ease: 'easeIn',
    },
  },
  hover: {
    opacity: 1,
    height: '30px',
    transition: {
      duration: 0.3,
      type: 'tween',
      ease: 'easeOut',
    },
  },
  selected: {
    opacity: 1,
    height: '45px',
    transition: {
      duration: 0.3,
      type: 'tween',
      ease: 'easeOut',
    },
  },
};

export const leftMotion = {
  init: {
    height: '8px',
    transition: {
      duration: 0.3,
      type: 'tween',
      ease: 'easeIn',
    },
  },
  hover: {
    height: '30px',
    transition: {
      duration: 0.3,
      type: 'tween',
      ease: 'easeOut',
    },
  },
  selected: {
    height: '45px',
    transition: {
      duration: 0.3,
      type: 'tween',
      ease: 'easeOut',
    },
  },
};

export const addChannelCircleAnimation = {
  init: {
    borderRadius: '30px',
    background: '#4A5568',
    transition: {
      duration: 0.2,
      type: 'tween',
      ease: 'easeIn',
    },
  },
  hover: {
    borderRadius: '15px',
    background: '#48BB78',
    transition: {
      duration: 0.2,
      type: 'tween',
      ease: 'easeOut',
    },
  },
};

export const addChannelPlusAnimation = {
  init: {
    rotate: 0,
    color: '#48BB78',
    transition: {
      duration: 0.2,
      type: 'tween',
      ease: 'easeIn',
    },
  },
  hover: {
    rotate: 90,
    color: '#ffffff',
    transition: {
      duration: 0.2,
      type: 'tween',
      ease: 'easeOut',
    },
  },
};
