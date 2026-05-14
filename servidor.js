import chalk from "chalk";
import fs from 'fs';
import path from "path";
import Produto from './produto.js';

const BANCODADOS = path.join(import.meta.dirname, 'basedados.txt');

function lerDados(arquivo) {
    const produtos = fs.readFileSync(arquivo, "utf-8")
                       .trim()
                       .split(/\t?\n/);
    const produto = [];
    lerDados.forEach(dado =>{
        produtos.push(new Produto(dado));
    });
    return produtos;
}

function rodarServidor(){
    const produtos = lerDados(BANCODADOS);
    console.log(chalk.bgWhite.blackBright('| Nome\t| Preço\t| Estoque\t|'));
    produtos.forEach(produto => {
        console.log("|" + chalk.rgb(50, 0, 180)(`${produto.nome}`))
    })
}