import { memo } from 'react';

interface ButtonProps {
  buttonName: string;
  className: string;
  onClick?: () => void;
}

const Button = ({ buttonName, className, onClick }: ButtonProps): JSX.Element => {
  return (
    <button data-testid="button" className={className} onClick={onClick}>
      <span className="button-title">{buttonName}</span>
    </button>
  );
};

export default memo(Button);
