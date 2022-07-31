# eCommercePage - Case dev estag2022.

Foi utilizando React.JS para a contruição da interface.<br>
O back-end foi contruido utilziando Node.JS com Express, e MongoDB para a base de dados.<br>

# Funcionalidades

- [x] Login e Cadastro com autenticação utilizando jwt.
- [x] Listagem de produtos com Nome, preço, peso e descrição.
- [x] Página de administrador com edição e opção de setar um produto como ativado ou desativado.
- [ ] Cadastro de produto com imagem.
- [ ] Paginação para exibição de produtos.

# Execução do projeto.

Necessário isntalação do Mongo versão 5.x

## Api
```
cd .\API\
```

```
npm install
```


```
npm npm run api
```

A api roda em host local na porta 3000.

## Front

```
cd .\View\
```

```
npm install
```

```
npm run dev
```

Aplicação inicia no host local na porta 5173.

# Páginas da aplicação

## Página de login

Ao logar na página, o usuário é automáticamente redirecionado para a home, pagina de lsitagem de produtos.

![image](https://user-images.githubusercontent.com/30753246/182006718-d5bfa5f0-4c50-43e8-b3ea-5e23059d502b.png)

## Página de cadastro

Ao relizar o cadastro, o usuário é automaticamente autenticado e redirecionado para a página home.

![image](https://user-images.githubusercontent.com/30753246/182006730-ae82d4f0-d877-462f-b40d-6374894cb642.png)

## Pagina Home

Página principal da aplicação, com um botão para adicionar um produto.

![image](https://user-images.githubusercontent.com/30753246/182006842-4c739f1f-579e-471e-b6af-2464d57bba4c.png)

## Adicionar produto

Ao clicar no botão "+", uma fomulario é exibido para o usuário preencher informações para o cadastro de um novo produto.

![image](https://user-images.githubusercontent.com/30753246/182006897-642655ad-4782-4d81-a97f-e36729feaad0.png)

Ao clicar em adicionar, o produto é adicionado a lista de produtos, e a pagina é recaregada, com o novo produto adicionado.

![image](https://user-images.githubusercontent.com/30753246/182006942-ff224d27-8863-4193-8923-e1c3093b1ae0.png)

Uma menssagem de erro é exibida ao tentar adicionar um produto sem alguma informação.

![image](https://user-images.githubusercontent.com/30753246/182006999-351957ab-f941-4103-ab5c-9066b9bce17c.png)


## Página home de um usuario com role de admin

> O usuário administrador precisa ser cadastrado manualmente no banco de dados com o campo `role` setado como `"admin"`

![image](https://user-images.githubusercontent.com/30753246/182006756-5d91c0e2-a257-4941-b693-a6b6613ad944.png)

## Página do adminstrador

![image](https://user-images.githubusercontent.com/30753246/182006767-938adef2-3960-4d8e-bd7f-33bf7fc6b683.png)

Quando o chekbox é desmarcado, o produto é considerado como desativado, e não é exibido na lista de produtos da página home.

![image](https://user-images.githubusercontent.com/30753246/182007069-297113c0-47fd-455e-9bdf-e5ddb098a4de.png)

![image](https://user-images.githubusercontent.com/30753246/182007089-dc2bd6f7-cd5b-460a-8e07-6c6bf9fc4f63.png)

## Sarch

Ao digitar um nome de um produto na barra de busoca, o mesmo é exibido na lista de produtos.

![image](https://user-images.githubusercontent.com/30753246/182007097-843fbed7-6f87-4a45-90e6-7dbe0172c540.png)

uma menssagem de erro é exibida caso a busca não resulte em nenhum produto.

![image](https://user-images.githubusercontent.com/30753246/182007114-81471d2a-51bf-4907-bc25-fee54796445a.png)


