/*6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
   Ex de lista de notas = [2, 7, 3, 8, 10, 4]*/

const medias = [2, 7, 3, 8, 10, 4];
let maiorMedia = 0;

for (let i = 0; i < medias.length; i++) {
   const media = medias[i];
   if (media > maiorMedia) {
      maiorMedia = media;
   }
}

console.log(maiorMedia);