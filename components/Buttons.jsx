import styles from './components.module.scss';

export const PrimaryButton = ({ children, ...props }) => (
    <button className="btn btn-primary" {...props}>
        {children}
    </button>
);

export const BlockButton = ({ children, ...props }) => (
    <button className={styles.blockButton} {...props}>
        {children}
    </button>
);
