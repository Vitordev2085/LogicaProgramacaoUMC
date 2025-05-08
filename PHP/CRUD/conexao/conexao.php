<?php
// $ = Variável 
$severName = "localhost";
// Nome do Servidor 
$userName = "root";
//
$senha = "";
// 
$dbName = "faculdade";

//Criando Conexão
$conn = new mysqli($severName, $userName, $senha, $dbName);

//Validação de Conexão
if ($conn->connection_error){
    echo "Conexão Falhou";
}else {
    echo "Conexão feita com sucesso";
}


?>