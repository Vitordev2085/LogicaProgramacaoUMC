<?php

    if (isset($_POST['id'])) {
        include("../conexao/conexao.php");
    
        $id = $_POST['id'];

        //Prepara o SQL para excluir o cadastro
        $sql = "DELETE FROM usuarios WHERE ID = ?";
        $stmt = $conn->prepare($sql);

        if ($stmt) {
            $stmt->bind_param("i", $id);
            //Executa o query
            $stmt->execute();

            //Redireciona o usuário
            header("Location: verificarCadastro.php?excluido=1");
        } else {
            echo "<div class ='mensagem erro'> Erro consulta </div>";
        }

        $conn->close();


    }




?>