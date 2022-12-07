export const PrimaryButton = ({ children, ...props }) => (
    <button className="btn btn-primary" {...props}>
        {children}
    </button>
);
