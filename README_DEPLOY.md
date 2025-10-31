# Despliegue: Backend (Render) + Frontend (Vercel)

Esta guía resume cómo desplegar este monorepo con Django en Render y Next.js en Vercel.

## Estructura

- `backend/`: proyecto Django
- `frontend/`: proyecto Next.js

## Backend en Render

1) Variables de entorno (Render → Service → Environment)

Usa preferentemente la URL de Pooling de Supabase (puerto 6543) y SSL:

- `SECRET_KEY` = una cadena larga y segura
- `DEBUG` = `False`
- `ALLOWED_HOSTS` = `tu-servicio.onrender.com,localhost,127.0.0.1,tu-front.vercel.app`
- `FRONTEND_URL` = `https://tu-front.vercel.app`

Opción A (recomendada):
- `DATABASE_URL` = `postgres://<user>:<password>@aws-0-us-east-2.pooler.supabase.com:6543/<database>?sslmode=require`

Opción B (variables separadas):
- `POSTGRES_DATABASE` = `<database>`
- `POSTGRES_USER` = `<user>`
- `POSTGRES_PASSWORD` = `<password>`
- `POSTGRES_HOST` = `aws-0-us-east-2.pooler.supabase.com`
- `POSTGRES_PORT` = `6543`
- `DB_SSLMODE` = `require`

2) Comandos del servicio

- Build Command:
  `pip install -r requirements.txt && python manage.py collectstatic --noinput`
- Start Command:
  `gunicorn django_crud_api.wsgi:application --bind 0.0.0.0:$PORT`

Nota: No corras migraciones en el Build. Hazlo después desde la Shell.

3) Migraciones (después del deploy)

- `python manage.py migrate`
- `python manage.py createsuperuser` (opcional)

## Frontend en Vercel

1) Variables de entorno

- `NEXT_PUBLIC_API_URL` = `https://tu-servicio.onrender.com`

2) Rewrites (opcional pero recomendado)

`frontend/next.config.ts` está configurado para proxyear `/api/*` hacia `NEXT_PUBLIC_API_URL`, evitando CORS.

3) Pasos en Vercel

- Importa el repo → selecciona la carpeta `frontend/` como Root Directory.
- Añade la variable `NEXT_PUBLIC_API_URL` en Project Settings → Environment Variables (en Production y Preview).
- Deploy.

## Comprobaciones

- Backend responde en `https://tu-servicio.onrender.com/` y tus endpoints.
- Frontend consume `NEXT_PUBLIC_API_URL` correctamente (revisa Network en DevTools).
- Si ves errores CORS en producción, confirma que:
  - `FRONTEND_URL` y `ALLOWED_HOSTS` en Render contienen el dominio de Vercel,
  - `DEBUG=False`.

## Archivos de ejemplo

- `backend/.env.example`: variables necesarias para backend.
- `frontend/.env.example`: variable `NEXT_PUBLIC_API_URL` para frontend.

## Notas

- El proyecto usa WhiteNoise para estáticos en producción (`collectstatic`).
- Base de datos: si usas Supabase, prefiere la conexión de Pooling (puerto 6543) y SSL.
- En local, puedes usar SQLite o tu Postgres local con `.env` propio.