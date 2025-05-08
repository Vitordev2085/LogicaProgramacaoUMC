<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro</title>
    <link rel="stylesheet" href="../estilos/styleCadastrar.css">
</head>
<body>
   
    <header>
        <nav>
            <ul>
                <li><a href="">Início</a></li>
                <li><a href="">Cadastrar Usuários</a></li>
                <li><a href="">Listas Usuários</a></li>
            </ul>
        </nav>
    </header>

    <main>
            <form action="" method="post">
            
                <h2>Cadastro Aluno</h2>
                
                <label for="nome">Nome:</label>
                <input type="text" name="nome" id="nome" required>

                <label for="sobrenome">Sobrenome:</label>
                <input type="text" name="sobrenome" id="sobrenome" required>

                <label for="email">E-mail:</label>
                <input type="email" name="email" id="email" required>
                
                <label for="curso">Selecione o curso:</label>
                    <select name="curso" id="curso">
                    <option value="ads">Análise e Desenvolvimento de sistemas</option>
                    <option value="engenharia_software">Engenharia de Software</option>
                    <option value="sistemas_informacao">Sistemas de Informação</option>
                    <option value="ciencias_computacao">Ciências da Computação</option>
                    </select>

                <input type="submit" value="Enviar">
            </form>
        </main>
    </body>
    </html>


            
            
        

            


        

    

