-- Criação do banco de dados
CREATE DATABASE IF NOT EXISTS biblioteca_db;

-- Uso do banco de dados
USE biblioteca_db;

-- Criação da tabela de usuários
CREATE TABLE IF NOT EXISTS Usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    telefone VARCHAR(50) NOT NULL,
    funcao VARCHAR(100) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Criação da tabela de livros
CREATE TABLE IF NOT EXISTS Livros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    autor VARCHAR(255) NOT NULL,
    editora VARCHAR(255) NOT NULL,
    anoPublicacao INT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Criação da tabela de empréstimos
CREATE TABLE IF NOT EXISTS Emprestimos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    UsuarioId INT NOT NULL,
    LivroId INT NOT NULL,
    dataEmprestimo TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    dataDevolucao TIMESTAMP NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (UsuarioId) REFERENCES Usuarios(id) ON DELETE CASCADE,
    FOREIGN KEY (LivroId) REFERENCES Livros(id) ON DELETE CASCADE
);
insert into Usuarios (nome, telefone, funcao) values ('Joana', '83 9999-9999', 'professor');
insert into Livros (nome, autor, editora, anoPublicacao) values ('Teste','lalala','lelele', 2020);
insert into Emprestimos(UsuarioId, LivroId) values (1,1)