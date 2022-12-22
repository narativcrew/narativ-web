import { Header } from './header';
import { Footer } from './footer';
import styles from './components.module.scss';

export const FullPage = ({ children }) => <div className={styles.fullpage}>{children}</div>;

const Layout = ({ children }) => (
    <>
        <Header />
        <main>{children}</main>
        <Footer />
    </>
);

export default Layout;
