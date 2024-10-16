import Icon from 'react-native-vector-icons/MaterialIcons'; // ou outra biblioteca de ícones que você preferir


export const sliderData = [
  {
    title: 'First Game',
    image: require('../assets/images/homescreen/game-1.jpeg'),
  },
  {
    title: 'Second Game',
    image: require('../assets/images/homescreen/game-2.jpeg'),
  },
  {
    title: 'Third Game',
    image: require('../assets/images/homescreen/game-3.png'),
  },
];

export const paidGames = [
  {
    poster: require('../assets/images/spiderman.webp'),
    title: 'Spider-Man',
    subtitle: 'Marvel',
    isFree: 'No',
    price: '$25.99',
    id: '1',
  },
  {
    poster: require('../assets/images/battlefield-2042.webp'),
    title: 'Battlefield 2042',
    subtitle: 'EA',
    isFree: 'No',
    price: '$19.99',
    id: '2',
  },
  {
    poster: require('../assets/images/miles-morales.webp'),
    title: 'Spider-Man: Miles Morales',
    subtitle: 'Marvel',
    isFree: 'No',
    price: '$29.99',
    id: '3',
  },
  {
    poster: require('../assets/images/halo-infinite.jpeg'),
    title: 'Halo Infinite',
    subtitle: 'Xbox Game',
    isFree: 'No',
    price: '$24.99',
    id: '4',
  },
  {
    poster: require('../assets/images/FarCry6.png'),
    title: 'Far Cry 6',
    subtitle: 'Ubisoft',
    isFree: 'No',
    price: '$15.99',
    id: '5',
  },
  {
    poster: require('../assets/images/god-of-war.jpeg'),
    title: 'God of War: Ragnarok',
    subtitle: 'Sony',
    isFree: 'No',
    price: '$25.99',
    id: '6',
  },
];

export const freeGames = [
  {
    poster: require('../assets/images/Altos-Odyssey.jpeg'),
    title: 'Altos Odyssey',
    subtitle: 'Noodlecake Studios',
    isFree: 'Yes',
    id: '1',
  },
  {
    poster: require('../assets/images/asphalt-9.jpeg'),
    title: 'Asphalt 9',
    subtitle: 'Gameloft',
    isFree: 'Yes',
    id: '2',
  },
  {
    poster: require('../assets/images/genshin-impact.jpeg'),
    title: 'Genshin Impact',
    subtitle: 'miHoYo',
    isFree: 'Yes',
    id: '3',
  },
  {
    poster: require('../assets/images/fortnite.webp'),
    title: 'Fortnite',
    subtitle: 'Epic Games',
    isFree: 'Yes',
    id: '4',
  },
  {
    poster: require('../assets/images/pokemon-unite.jpeg'),
    title: 'Pokémon Unite',
    subtitle: 'The Pokémon Company',
    isFree: 'Yes',
    id: '5',
  },
  {
    poster: require('../assets/images/diablo-4.jpeg'),
    title: 'Diablo 4',
    subtitle: 'Blizzard Entertainment',
    isFree: 'No',
    id: '6',
  },
];

export const courseMenu = [
  {
    id: 1,
    label: "Consultas",
    icon: "search",
    options:[
      {
        title: "Histórico",
        page: "HistoricoPage"
      },
      {
        title: "Horários",
        page: "HorariosPage"
      },
      {
        title: "Notas parciais",
        page: "NotasPage"
      },
      {
        title: "Faltas Parciais",
        page: "FaltasPage"
      }

    ], 
  },
  {
    id: 2,
    label: "Matrícula",
    icon: "assignment",
    options:[
      {
        title: "Matrícula (fechada)",
        page: ""
      }
    ], 
  },

  {
    id: 3,
    label: "Agenda",
    icon: "calendar-today",
    options:[
      {
        title: "Calendário de Provas",
        page: "CalendarioAvaliacoesPage"
      }
    ], 
  },
  {
    id: 4,
    label: "Solicitações",
    icon: "request-quote",
    options:[
      {
        title: "Revisão de nota/falta/exame geral",
        page: ""
      },
      {
        title: "Solicitação de documentos",
        page: ""
      },
      {
        title: "Regime de Exercícios Domiciliares",
        page: ""
      }
    ], 
  },
  {
    id: 5,
    label: "Planos de Ensino",
    icon: "book",
    options:[
      {
        title: "Disciplina 1",
        page: ""
      },
      {
        title: "Disciplina 2",
        page: ""
      },
      {
        title: "Disciplina 3",
        page: ""
      },
      {
        title: "Disciplina 4",
        page: ""
      },
      {
        title: "Disciplina 5",
        page: ""
      }
    ], 
  },
  {
    id: 6,
    label: "Upload de Arquivos",
    icon: "cloud-upload",
    options:[
      {
        title: "Comprovantes ou atestado de Vacinação COVID-19",
        page: ""
      }
    ], 
  },
  {
    id: 7,
    label: "Matriz em Inglês",
    icon: "language",
    options:[
      {
        title: "Matriz em Inglês",
        page: ""
      }
    ], 
  }
];