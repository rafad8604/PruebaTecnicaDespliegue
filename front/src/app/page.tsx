'use client';
import Layout from './components/ui/Layout';
import Button from './components/ui/Button';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  return (
    <Layout>
      <div className="flex justify-center items-center mt-40">
          <a className="static block w-fit p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-dark">Sistema de información de usuarios recaudadores.</h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">Bienvenido, usuario ¿Qué quieres hacer?</p> 
          <div className="flex gap-4 mt-5 justify-center">
            <Button text="Identificación de usuarios" className="h-10 px-3 rounded-md px-20 py-2 text-lg" onClick={() => router.push('/module_info_user')} />
            <Button text="Listado de usuarios" className="h-10 px-3 rounded-md px-20 py-2 text-lg" onClick={() => router.push('/module_list_user')} />
          </div>
          </a>
      </div>
    </Layout>
  );
}
