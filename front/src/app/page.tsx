import Layout from './components/Layout';
import IdentificationForm from './components/IdentificationForm';
import InfoForm from './components/InfoForm';

export default function Home() {
  return (
    <Layout>
      <div style={{ padding: 32 }}>
        <IdentificationForm />
        <div style={{ marginTop: 32 }}>
          <InfoForm />
        </div>
      </div>
    </Layout>
  );
}