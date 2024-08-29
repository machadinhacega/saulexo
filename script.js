// script.js

const cards = document.querySelectorAll('.card');
let selectedCards = [];
let count = 0

cards.forEach(card => {
  card.addEventListener('click', () => {
    const selectedGroup = card.getAttribute('data-group');
    const selectedOrder = card.getAttribute('data-order');

    if (!card.classList.contains('selected')) {
      card.classList.add('selected');
      selectedCards.push({ group: selectedGroup, order: selectedOrder });
    } else {
      card.classList.remove('selected');
      selectedCards = selectedCards.filter(selectedCard => selectedCard.order !== selectedOrder);
    }

    if (selectedCards.length === 4) {
      count += 1
      let contagem = document.getElementById("contagem")
      contagem.innerText = count
  
      const selectedGroup = selectedCards[0].group;
      const isSameGroup = selectedCards.every(card => card.group === selectedGroup);

      if (isSameGroup) {
        const correctCards = document.querySelectorAll(`.card[data-group="${selectedGroup}"]`);

        correctCards.forEach(correctCard => {
          correctCard.classList.remove('selected');
          correctCard.classList.add(`correct-group-${selectedGroup}`);
         correctCard.style.display = 'none'; // Oculta os cards corretos

        });

         // Remove os cards corretos da matriz
          const cardGrid = document.querySelector('.card-grid');
          correctCards.forEach(correctCard => {
              cardGrid.removeChild(correctCard);
          });

          // Ajusta a exibição dos demais cards para formar uma matriz de 4 colunas
          const remainingCards = document.querySelectorAll('.card');
          remainingCards.forEach((card, index) => {
              card.style.display = 'block'; // Garante que os cards estejam visíveis
              const columnIndex = index % 4;
              card.style.gridRow = Math.floor(index / 4) + 1;
              card.style.gridColumn = columnIndex + 1;
          });
        
        
        // HUM
        console.log(document.querySelectorAll('.card').length)
        
        
        let resposta = document.getElementById("resposta")        
        
        if(selectedGroup == 1){
          let resposta1 = document.createElement('h3')
          resposta1.innerText = 'Coisas para botar na boca'
          let sub1 = document.createElement('p')
          sub1.innerText = 'FLAUTA, BECK, AÇAÍ, INSIG(A): eu'
          sub1.classList = 'sub'
          resposta1.classList = 'resposta-group-1'
          resposta1.append(sub1)
          resposta.append(resposta1)
          
        } else if(selectedGroup == 2){
          let resposta2 = document.createElement('h3')
          resposta2.innerText = 'Esportes que você faz'
          let sub2 = document.createElement('p')
          sub2.innerText = 'BASQUETE, BIKE, MUSCULAÇÃO, XADREZ'
          sub2.classList = 'sub'
          resposta2.classList = 'resposta-group-2'
          resposta2.append(sub2)
          resposta.append(resposta2)
          
        } else if(selectedGroup == 3){
          let resposta3 = document.createElement('h3')
          resposta3.innerText = 'Lugares que fomos juntos'
          let sub3 = document.createElement('p')
          sub3.innerText = 'VENTANA, GEEK, CONRADO, SABÍ'
          sub3.classList = 'sub'
          resposta3.classList = 'resposta-group-3'
          resposta3.append(sub3)
          resposta.append(resposta3)
          
        } else if(selectedGroup == 4){
          let resposta4 = document.createElement('h3')
          resposta4.innerText = 'Caracteristicas suas'
          let sub4 = document.createElement('p')
          sub4.innerText = 'OTAKU, ESTUDIOSO, RESPEITOSO, LOW'
          sub4.classList = 'sub'
          resposta4.classList = 'resposta-group-4'
          resposta4.append(sub4)
          resposta.append(resposta4)
          
      }
    
        selectedCards = [];

        
      } else {
        console.log('Seleção inválida. Os cartões não são do mesmo grupo.');
        selectedCards.forEach(selectedCard => {
          const cardToUpdate = document.querySelector(`.card[data-order="${selectedCard.order}"]`);
          cardToUpdate.classList.remove('selected');
          cardToUpdate.classList.add('wrong');

          // Adicionando a rotação (tremor)
          cardToUpdate.style.transition = 'transform 0.2s ease-in-out';
          cardToUpdate.style.transform = 'rotate(3deg)';

          setTimeout(() => {
            cardToUpdate.style.transform = 'rotate(-3deg)';
          }, 200);

          setTimeout(() => {
            cardToUpdate.style.transform = 'rotate(2deg)';
          }, 400);

          setTimeout(() => {
            cardToUpdate.style.transform = 'rotate(0deg)';
            cardToUpdate.style.transition = 'transform 0s'; // Resetando a transição
          }, 600);

          setTimeout(() => {
            cardToUpdate.classList.remove('wrong');
          }, 1000);
        });

        selectedCards = [];
      }
    }
  });
});

// if (finish==4){
//   console.log('FIM')
// }

