import React from 'react';
import './Button.scss';

interface Props {
    primary?: boolean;
    size?: 'small' | 'medium' | 'large';
    label: string;
    onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const Button: React.FC<Props> = ({
    primary = false,
    size = 'medium',
    label,
    onClick,
}) => {
    const mode = primary ? 'button--primary' : 'button--secondary';
    return (
        <button
            type="button"
            className={['button', `button--${size}`, mode].join(' ')}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default Button;
