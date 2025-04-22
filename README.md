# 📚 IntPedia – Central de Conhecimento do Banco de Dados

O **IntPedia** é um webapp interno que centraliza e documenta o banco de dados da empresa, permitindo visualização de **consultas SQL**, **schemas de tabelas** e **procedures armazenadas**, com explicações detalhadas e integração dinâmica com o banco real.

---

## 🚀 Tecnologias Utilizadas

### Backend – [FastAPI](https://fastapi.tiangolo.com/)
- Python 3.10+
- FastAPI
- SQLAlchemy
- Pydantic
- pyodbc (SQL Server)
- Alembic (migrações)
- Uvicorn (servidor ASGI)

### Frontend – [React](https://reactjs.org/)
- React + Vite
- Axios
- Tailwind CSS
- React Router
- React Query

### Contêineres
- Docker
- Docker Compose

---

## ⚙️ Funcionalidades

- 🔎 **Consulta SQL**: Documentação e visualização de consultas com filtros e execução (opcional).
- 🗂 **Schema do Banco**: Visualização das tabelas e seus relacionamentos.
- 🧩 **Procedures**: Explicações detalhadas de procedures, parâmetros e uso.
- 🔐 **Autenticação**: JWT com controle de permissões (admin, editor, viewer).
- 🔄 **Documentação Viva**: Sincronização automática com o banco da empresa.

---

## 📦 Rodando localmente com Docker

### Pré-requisitos

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

---

### 1. Clone o repositório

```bash
git clone https://github.com/Arii19/IntPedia.git
cd intpedia

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
