
import Layout from './module_info_user/components/Layout';
import UserFound from './module_info_user/components/UserFound';

export default function Home() {
  return (
    <Layout>
      <div style={{ padding: 32 }}>
        <UserFound />
      </div>
    </Layout>
  );
}