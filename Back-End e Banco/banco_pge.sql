-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema pgedb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema pgedb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `pgedb`;
USE `pgedb` ;

-- -----------------------------------------------------
-- Table `pgedb`.`Perfil`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pgedb`.`Perfil`;
CREATE TABLE IF NOT EXISTS `pgedb`.`Perfil` (
  `id_Perfil` INT NOT NULL AUTO_INCREMENT,
  `usuario` VARCHAR(15) NOT NULL,
  `senha` VARCHAR(50) NOT NULL,
  `ativo` TINYINT NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_Perfil`))
ENGINE = InnoDB
AUTO_INCREMENT = 2;



-- -----------------------------------------------------
-- Table `pgedb`.`Cadastro`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pgedb`.`Cadastro`;
CREATE TABLE IF NOT EXISTS `pgedb`.`Cadastro` (
  `id_Info` INT NOT NULL,
  `primeiro_Nome` VARCHAR(20) NOT NULL,
  `ultimo_Nome` VARCHAR(20) NOT NULL,
  `cpf` VARCHAR(45) NOT NULL,
  `numero` VARCHAR(13) NULL DEFAULT NULL,
  `id_Perfil` INT NOT NULL,
  PRIMARY KEY (`id_Info`),
  INDEX `fk_Cadastro_Perfil_idx` (`id_Perfil` ASC) VISIBLE,
  CONSTRAINT `fk_Cadastro_Perfil`
    FOREIGN KEY (`id_Perfil`)
    REFERENCES `pgedb`.`Perfil` (`id_Perfil`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pgedb`.`Nivel`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pgedb`.`Nivel`;
CREATE TABLE IF NOT EXISTS `pgedb`.`Nivel` (
  `id_Nivel` INT NOT NULL AUTO_INCREMENT,
  `num_Nivel` INT NOT NULL,
  `id_Perfil` INT NOT NULL,
  PRIMARY KEY (`id_Nivel`),
  INDEX `fk_Nivel_Perfil1_idx` (`id_Perfil` ASC) VISIBLE,
  CONSTRAINT `fk_Nivel_Perfil1`
    FOREIGN KEY (`id_Perfil`)
    REFERENCES `pgedb`.`Perfil` (`id_Perfil`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
