# pucminas-mycalendar

Reinaldo Ruggiere Belli da Cruz

My calendar é um app desenvolvido para se organizar de maneira geral sendo capaz de armazenar suas atividades para uma determinada data dando ao usuário a capacidade de armazenar diversas tarefas. 

# Interface

- Tela principal: Na tela principal é onde são mostradas todas as atividades salvas para uma determinada data. Nela pode-se ver um calendário que pode ser manipulado para selecionar outras datas e verificar ou salvar atividades para as mesmas. 
- Modal para adicionar a atividade: Neste modal é possível adicionar uma nova atividade e uma hora prevista para inicio desta. 

A aplicação é composta de 3 components responsáveis por manipular os estados e dados de acordo com as preferências do usuário. 

Dados:
A aplicação salva uma lista no formato de JSON no local storage do navegador do utilizador. O array de objetos é registrado da seguinte forma:
```js
    [
        {
            "taskValue":"Atividade de exemplo",
            "hourValue":"Hora de exemplo"
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
- A aplicação possui um manifesto para instalação no dispositivo do usuário? **Sim**
- A aplicação possui um _service worker_ que permite o funcionamento off-line? **Sim**
- O código da minha aplicação possui comentários explicando cada operação? **Sim**
- A aplicação está funcionando corretamente? **Sim**
- A aplicação está completa? **Sim**
