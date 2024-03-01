
# Csv to Json

Este módulo transforma um arquivo CSV para JSON através de uma requisição.

Beneficios:

- Gera histórico dos arquivos upados
- Converte um CSV para um JSON assim podendo trabalhar com banco de dados e afins.
- Fácil de implementar, já vem com formulario e arquivo .csv para testes.

## Como instalar :

`Npm install `


## Documentação da API

#### Faz upload do CSV e retorna um json caso de certo

```http
  Post /upload-csv
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `csvFile` | `file` | **Obrigatório**. Arquivo do tipo .csv para conversão |


## Como testar:

- Instale as dependencias ` npm i `  
- Ligue o servidor   ` npm start ` 
- Utilize o formulário de testes dentro de /test
- Faça upload do arquivo de teste.
- Dentro do console deverá aparecer o resultado do json


obs: Os dados são ficticios e servem apenas para ilustrar o exemplo da aplicação
