
    window.alert(`Olá, Bem vindo ao nosso site!`)
   var nome= window.prompt(`Qual é o seu nome?`)
    window.alert(`Prazer em te conhecer ${nome}!`)
    window.alert(`Este site foi criado por Nycolas Ligoski, Pietro Czerski e Richard Marx`)
    document.write(`Espero que tenha gostado do nosso site ${nome.toUpperCase()}! Para ver mais volte lá em cima e clique em "video educativo" onde você sera levado a uma pagina com um video explicando o preconceito e como afeta os outros, caso queira ver imagens de indviduos ou artes que ilustram essas pessoas`)
    dayName = new Array ("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado")
    monName = new Array ("janeiro", "fevereiro", "março", "abril", "Maio", "junho", "agosto", "outubro", "novembro", "dezembro")  
    document.write ("<h1> Hoje é " + dayName[now.getDay() ] + ", " + now.getDate () + " de " + monName [now.getMonth() ]   +  " de "  +     now.getFullYear () + ". </h1>")

