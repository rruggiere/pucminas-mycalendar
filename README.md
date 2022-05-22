# pucminas-mycalendar

Reinaldo Ruggiere Belli da Cruz

My calendar é um app desenvolvido em React Native utilizando a linguagem TypeScript para se organizar de maneira geral sendo capaz de armazenar suas atividades para uma determinada data dando ao usuário um controle maior sobre sua genda. 

# Interface

A aplicação é composta de 3 components responsáveis por manipular os estados e dados de acordo com as preferências do usuário. 

- Tela principal: A tela principal é formada pela renderização de dois components: Main e TaskList sendo o primeiro responsável por carregar toda a lógica de telas e estados da aplicação, além do calendário. O component TaskList é o responsável por renderizar a lista de tasks do usuário para o dia selecionado conforme o estado da aplicação. Foi implementado no component taskList uma scrollView na lista de tasks permitindo a rolagem dos dados caso a lista de tarefas seja grande demais.
- Modal(NewTask): Pode ser aberto ao clicar no ícone que contém um "+" sendo o responsável por tratar uma nova adição de tarefa ao sistema. Esse formulário permite apenas que sejam lançadas horas entre 00 e 23 e minutos entre 00 e 59 tratando a entrada do usuário instantaneamente caso esse range seja excedido. 

Dados:
A aplicação salva uma lista no formato de JSON no async storage do celular do utilizador. O array de objetos é registrado da seguinte forma:
```ts
    [
        {
            "text":"Atividade de exemplo",
            "hour":"Hora de exemplo"
            "minute: "Minuto de exemplo"
        }
    ]
 ```
Sendo a chave do registro o mês e a data selecionada. 

<h3>Checklist de implementação: </h3> 

- A aplicação é original e não uma cópia da aplicação de um colega ou de uma aplicação já existente? **Sim**
- A aplicação tem pelo menos duas interfaces (telas ou páginas) independentes? **Sim**
- A aplicação armazena e usa de forma relevante dados complexos do usuário? **Sim**
- A aplicação foi desenvolvida com o React? **Sim**
- A aplicação contém pelo menos dois componentes React além do componente principal? **Sim**
- A aplicação tem um componente com rolagem? **Sim**
- A aplicação tem um campo de formulário que é devidamente tratado? **Sim**
- O código da minha aplicação possui comentários explicando cada operação? **Não** (Aplicado clean code nos nomes de métodos e variáveis)
- A aplicação está funcionando corretamente? **Sim**
- A aplicação está completa? **Sim**
