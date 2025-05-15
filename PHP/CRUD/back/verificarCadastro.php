<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verificar Cadastro</title>
    <link rel="stylesheet" href="../estilos/styleVerificar.css">
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="../index.php">Início</a></li>
                <li><a href="../cadastro.php">Cadastrar Usuário</a></li>
                <li><a href="verificarCadastro.php">Listas Usuários</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="containerSection">
            <form action="verificarCadastro.php" method="post">
                <input type="email" placeholder="Informe seu E-mail:" name="email" id="email">
                <input type="submit" value="Buscar">
            </form>
        </section>
        <section>

            <?php
                
                //Verificar se o campo e-mail está preenchido
                if(isset($_POST["e-mail"])){
                  //Exibir as informações passadas pelo form
                  // echo var_dump($_POST);
                  
                  //Salva a informação de e-mail enviado no form
                  $email = $_POST["e-mail"];

                  //Recebe as informações de conexão com o DB
                  include("../conexao/conexao.php");

                  //Query ao Banco de Dados
                  $sql = "SELECT * FROM usuarios WHERE email = ? ";
                  //Preparar a conexão junto da consulta
                  $stmt = $conn->prepare($sql);
                

                //Validando se a conexão foi feita com sucesso
                if($stmt){
                    //Troca a informação de e-mail pela ? no $sql
                    $stmt->bind_param("s" , $email);
                    //Executa o comando
                    $stmt->execute();
                    //Salva o resultado da consulta
                    $resultado = $stmt->get_result();
                    
                    if($resultado->num_rows>0){
                        echo "ELE EXISTE";
                        //Armazenar as informações vindas do DB
                    }else {
                        echo "ELE NÃO EXISTE";
                        echo var_dump($row);

                    }
                }
            
            
                }
            
            
            
            ?>

        </section>
    </main>
</body>
</html>