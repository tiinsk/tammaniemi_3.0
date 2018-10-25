import colors from '../assets/_colors.scss';

export const gradient = (type: string, gradientType: string): object => {
  const color1 = colors[`gradients-${type}1`] || colors['gradients-posts1'];
  const color2 = colors[`gradients-${type}2`] || colors['gradients-posts2'];

  return {
    'background-image': `linear-gradient(${gradientType}, ${color1}, ${color2})`
  };
};
