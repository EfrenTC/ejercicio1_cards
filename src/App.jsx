import './App.css';
import { useState } from 'react';
import Boton from './components/boton/Boton';
import Card from './components/card/card';
import MaratImg from './assets/death-of-marat.jpg'
import AngelImg from './assets/angelcaido.jpg'
import PompeiiImg from './assets/pompeii.jpg'

function App() {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleClick = (nombre) => {
    alert(`Has hecho clic en la card de ${nombre}`);
  };


  const cards = {
    serafin: {
      title: 'La muerte de Marat',
      description: 'El 13 de julio de 1793 Jean-Paul Marat fue asesinado en su casa mientras tomaba un baño. Una girondina llamada Charlotte Corday lo apuñaló. Tanto ella como el resto de su grupo creyeron que este crimen podía frenar a los radicales y su anhelo de guillotinar a todo el sistema.',
      image: MaratImg,
      bgColor: '#e0f7fa'
    },
    ana: {
      title: 'El ángel caído',
      description: 'El Ángel Caído" de Alexandre Cabanel es una pintura al óleo que representa a Lucifer después de ser expulsado del paraíso. La obra destaca la belleza física y la intensidad emocional del personaje, mostrando una mezcla de ira, tristeza y desafío en su mirada. La pintura, de estilo romántico, se centra en la figura de Lucifer, retratándolo como un ángel caído, bello pero marcado por la rebelión y la expulsión. ',
      image: AngelImg,
      bgColor: '#ffe0f0'
    },
    carlos: {
      title: 'El último día de Pompeya  ',
      description: '"El Último Día de Pompeya" es un cuadro del pintor ruso Karl Briullov, realizado entre 1830 y 1833, que representa la erupción del Monte Vesubio en el año 79 d.C. y la destrucción de la ciudad de Pompeya. La obra, de estilo neoclásico y romántico, muestra a los habitantes de Pompeya en medio del caos, algunos desmayados, otros protegiendo a sus seres queridos y otros mirando con horror la erupción. ',
      image: PompeiiImg,
      bgColor: '#f0ffe0'
    }
  };

  return (
    <>
      <h1>Galería</h1>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', justifyContent: 'center' }}>
        <Boton texto="La muerte de Marat" onClick={() => setSelectedCard('serafin')} />
        <Boton texto="El ángel caído" onClick={() => setSelectedCard('ana')} />
        <Boton texto="El último dia de Pompeya" onClick={() => setSelectedCard('carlos')} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {selectedCard && (  
          <Card
            title={cards[selectedCard].title}
            description={cards[selectedCard].description}
            image={cards[selectedCard].image}
            bgColor={cards[selectedCard].bgColor}
            onClick={() => handleClick(cards[selectedCard].title)}
          />
        )}
      </div>
    </>
  );
}

export default App;
