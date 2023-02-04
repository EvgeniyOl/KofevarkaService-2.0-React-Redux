import Layout from 'components/Layout';
import Home from 'components/layout/home/Home';
import NotFoundPage from 'pages/NotFoundPage';
import Policy from 'pages/Policy';
import { Routes, Route } from 'react-router-dom';

const RoutesPage = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
};

export default RoutesPage;
