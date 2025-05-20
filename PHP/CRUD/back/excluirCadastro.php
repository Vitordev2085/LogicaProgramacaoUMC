<?php

    if (inset($_POST['id'])) {
        include("../conexao/conexao.php");
    
        $id = $_POST['id'];

        // Prepara o SQL para excluir o cadastro
        $sql = "DELETE FROM usuarios WHERE id=?";
        $stmt = $conn->prepare($sql);

        if ($stmt) {
            // Executa o query
            $stmt->bind_param("id", $id);
            $stmt->execute();

            //Redireciona o usuário
            header("Location: verificarCadastro.php");
        } else {
            echo "<div class='mensagem erro'>Erro na consulta</div>";
        }

        $conn->close();


    }




?>