
# App de Registro de usuários

Aqui é apenas um exemplo de padrão de configuração do Expo SQLite (Next), registro é somente um exemplo e não uma aplição de fato.


## Intalação de dependências
```terminal
  - npm install
```


#### Se for usar npm para test

```terminal
  - npm start
```

#### Se for usar expo para test

```terminal
  - npx expo start
```

## QRcode

![App Screenshot](https://github.com/Yuri89/React-Native-Test-DBLite/blob/main/imagensProjec/image%20(38).png?raw=true)
ele irá exibir um QRcode para você usar no [Expo Go](https://play.google.com/store/apps/details?id=host.exp.exponent)

## APP

Temos três campos no aplicativo sendo eles nome,email e senha, email não está validando o tipo email.
![App Screenshot](https://github.com/Yuri89/React-Native-Test-DBLite/blob/main/imagensProjec/image%20(3).jpg?raw=true)

Eles também vão validar se está vazio ou não usando o `React Hook Form`
![App Screenshot](https://github.com/Yuri89/React-Native-Test-DBLite/blob/main/imagensProjec/image%20(2).jpg?raw=true)

Por fim se todas as informações estiverem preenchidas, você pode apertar o submit que ele criará um usuário e fará um Fetch.

!Atenção
No caso de deletar o usuário não vai funcionar o Fetch, neste caso adicionei um botão para fazer um atualizar os usuários.

![App Screenshot](https://github.com/Yuri89/React-Native-Test-DBLite/blob/main/imagensProjec/image%20(1).jpg?raw=true)


## Dependências usadas 

[SQLite (Next)](https://docs.expo.dev/versions/latest/sdk/sqlite-next/)

[Styled Components](https://styled-components.com/)

[React Hook Form](https://react-hook-form.com/)

[react-native-gesture-handler](https://docs.expo.dev/versions/latest/sdk/gesture-handler/)


