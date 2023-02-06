# Construção de uma API-REST (Back End)
Projeto Final do Módulo de Programação WEB III - OiDevs por ADA

Construção de uma API-REST para Cadastro/Venda de Veículos usando o SQLITE com o Back-End

Aluna: Manoella Gomes Linhares

Professor: Leonardo Souza

## Iniciando o Projeto
> Instalar os arquivos do package.json da aplicação
```
npm i
```
## Executando o Projeto
> Subir o servidor 
```
npm start
```
## Acesso da aplicação pelo browser
> A aplicação roda na porta 80, logo digitar o endereço abaixo para obter acesso
```
http://localhost/
```

## Principais dependências
- **dotenv**: responsável por carregar as variáveis de ambiente do arquivo 
- **express**: framework utilizado para construção de servidores WEB
- **sqlite3**: lib com o SQL embutido
- **ulid**: gerador de ID para as entidades
-** Demais dependências**: body-parser e nodemon

# Modelo do Banco

### Colunas existentes no Banco
| Coluna   | Campo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `manufacter` | `string` | **Obrigatório**.|
| `model ` | `string` | **Obrigatório**. |
| `owner ` | `string` | **Obrigatório**. |
| `acquision ` | `string` | **Obrigatório**. |
| `CPF` | `integer` | **Obrigatório, Único**. |
| `email` | `string` | **Obrigatório, Único**. |


### Método POST
#### Criar um Veículo
> POST /vehicles
```
  http://localhost/vehicles
```

Exemplo:
```
{
    "manufacter": "PORSCHE",
    "model": "PANAMERA",
    "owner": "Carlos Alberto",
    "acquision": "01/06/2015",
    "CPF": 40824445670,
    "email": "carlosalberto@gmail.com"
}
```
_OBS: é obrigatório o preenchimento de todos os dados da coluna (exceto ID). Caso não tenha informação, escrever NONE para os campos em string e 000000000 para o CPF_


### Método GET
#### Recuperar todos os Veículos
> GET /vehicles
```
  http://localhost/vehicles
```

#### Recuperar um Veículo pelo ID
> GET /vehicles/:id
```
  http://localhost/vehicles/:id
```

#### Recuperar um Veículo por um Modelo específico
> GET /vehicles/{model}

_OBS: Caso esteja NONE, significa que o veículo está disponível para venda_

```
http://localhost/vehicles/findmodel/{model}
```


### Método PATCH
#### Atualizar dados de um Veículo
> GET /vehicles

```
  PATH /vehicles/:id
```

É necessário informar pelo menos um dos campos (exceto ID).

Exemplo:
```
PATH /vehicles/01GRHZ277BDFTR57FW475EXPH4
{
    "manufacter": "RENAULT",
    "model": "CAPTUR"
}
```
A busca será realizada no ID 01GRHZ277BDFTR57FW475EXPH4, onde os campos manufacter e model serão atualizados.


### Método DELETE
#### Deletar um Veículo

```
  DELETE /vehicles/:id
```
