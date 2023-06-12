import { Outlet } from 'react-router-dom';
import { Footer, Navbar } from '../components';

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
export default RootLayout;
