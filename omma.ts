const NOME_DA_EMPRESA: string =
   " ---------------> SISTEMA OMMA <---------------";
console.log(NOME_DA_EMPRESA);
console.log("-----------------------------------------------\n");

interface Receita {
   id: number;
   nome: string;
   dificuldade: string;
   ingredientes: string[];
   preparo: string;
   link: string;
   vegan: boolean;
}
const receitas: Receita[] = [];

//Fazer cadastro da receita por um "input"
const cadastrarReceita = (lista: Receita) => {
   receitas.push({
      id: lista.id,
      nome: lista.nome,
      dificuldade: lista.dificuldade,
      ingredientes: lista.ingredientes,
      preparo: lista.preparo,
      link: lista.link,
      vegan: lista.vegan,
   });
   console.log("Cadastro concluído\n");
   console.log("-----------------------------------------------\n");
};

//Exibir receitas
const exibirReceitas = (): void => {
   receitas.forEach((e: Receita) => {
      console.log(`Receita: ${e.nome}\n`);
      console.log("Ingredientes:");
      e.ingredientes.forEach((item:string) => console.log(`-> ${item}`));
      console.log(`\n'Vegan: ${e.vegan}`);
      console.log("\n-----------------------------------------------\n");
   });
};

//deletar um item pelo id
const deletarReceita = (id: number): void | string => { //o retorno de um log seria um type que o log retorna ou seria void?
   let verificador: number = 0;
   receitas.forEach((e) => {
      if (id === e.id) {
         receitas.splice(receitas.indexOf(e), 1);
         verificador++;
      }
   });
   if (verificador > 0) {
      return console.log("Receita deletada com sucesso!\n\n");
   }
   console.log("Receita não encontrada!\n\n");
};

//buscar uma receita
const buscarReceita = (termo:string): void => {
   console.log(`Palavra chave: "${termo}"`);
   const busca = receitas.filter((e) => e.nome.includes(termo));
   busca.forEach((e) => console.log(e.nome));
};

const atualizarReceita = (id:number, receitaAtaulizada: Receita) => {
   receitas.forEach((receita) => {
      if (receita.id != id) {
         return;
      }

      receita.nome = receitaAtaulizada.nome;
      receita.ingredientes = receitaAtaulizada.ingredientes;
      receita.preparo = receitaAtaulizada.preparo;
      receita.link = receitaAtaulizada.link;
      receita.vegan = receitaAtaulizada.vegan;
   });
};

// cadastrarReceita(
//    "Risoto de Abóbora",
//    "modereda",
//    [
//       "1/2 kg de abóbora tipo kabotchá",
//       "2 xícaras (chá) de arroz arbóreo",
//       "2 colheres (sopa) de manteiga sem sal",
//    ],
//    "Coloca agua na panela, e joga tudo lá dentro",
//    "https://www.youtube.com/watch?v=Mxc3RQE4yAg&feature=emb_title",
//    true
// );
// cadastrarReceita(
//    "Cachorro quente",
//    "Simples",
//    ["Pão de leite", "Salsicha", "Molhos", "Um monte de coisa boa"],
//    "Pega o pão e joga tudo dentro",
//    "youtube.com.br",
//    false
// );
