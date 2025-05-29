# TCC - Desenvolvimento Full Stack Junho 2025

## Requerimentos
- Docker
- npm
- Porta 3000 (frontend)
- Porta 4000 (backend)

## Instruções

Após clonar o repositório, na pasta principal "projetoTCC", rode o seguinte código no terminal.
```
docker-compose build
docker-compose up
```

Estes comandos rodarão ambos arquivos Dockerfile (backend e frontend) através do arquivo Docker Compose na pasta principal.

Caso o navegador não abra automaticamente para testar o frontend, acesse o endereço abaixo:
`http://localhost:3000/`

Para testar as chamadas da API, utilize o endpoint (algumas chamadas só podem ser feitas com usuário com role "admin"):
`http://localhost:4000/`

### Observação
Ao rodar o projeto pela primeira vez, dados mockados para universidades, vestibulares, cursos e alguns usuários de testes serão salvos no banco de dados MongoDB local. Esse passo é realizado para auxiliar nos testes pelos orientadores e banca de avaliação.







