CREATE DATABASE intoTheSleeve;

USE intoTheSleeve;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
    dtNasc date
);

CREATE TABLE batalha (
	id INT AUTO_INCREMENT,
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id),
    primary key (id, fk_usuario),
    nomeJogo varchar(45)
);

CREATE TABLE estatisticas (
	id INT AUTO_INCREMENT,
    fk_usuario INT,
    FOREIGN KEY (fk_usuario) REFERENCES usuario(id),
    primary key (id, fk_usuario),
    mtg_vitoria int,
    pkm_vitoria int,
    ygo_vitoria int,
    rank_jogador int
);