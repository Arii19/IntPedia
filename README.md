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
