const initialState = {
  navbarSections: [
    { 
      id: 0,
      sectionUa: 'Війна',
      sectionRu: 'Война',
      hotRubric: true,
      active: true
    },
    { 
      id: 1,
      sectionUa: 'Новини',
      sectionRu: 'Новости',
      hotRubric: false,
      active: false
    },
    { 
      id: 2,
      sectionUa: 'Політика',
      sectionRu: 'Политика',
      hotRubric: false,
      active: false
    },
    { 
      id: 3,
      sectionUa: 'Економіка',
      sectionRu: 'Экономика',
      hotRubric: false,
      active: false
    },
    { 
      id: 4,
      sectionUa: 'Суспільство',
      sectionRu: 'Общество',
      hotRubric: false,
      active: false
    },
    { 
      id: 5,
      sectionUa: 'Погляди',
      sectionRu: 'Взгляды',
      hotRubric: false,
      active: false
    },
    { 
      id: 6,
      sectionUa: 'Світ',
      sectionRu: 'Мир',
      hotRubric: false,
      active: false
    },
    { 
      id: 7,
      sectionUa: 'Live',
      sectionRu: 'Live',
      hotRubric: false,
      active: false
    },
  ],
  language: 'UA',
  statistics: [
    {
      id: 0,
      name: 'Особовий склад',
      value: '~36 200',
      image: 'soldiers.png'
    },
    {
      id: 1,
      name: 'Танки',
      value: '1589',
      image: 'tank.png'
    },
    {
      id: 2,
      name: 'Артсистеми',
      value: '4578',
      image: 'artillery-systems.png'
    },
    {
      id: 3,
      name: 'Літаки',
      value: '220',
      image: 'aircraft.png'
    },
    {
      id: 4,
      name: 'РСЗВ',
      value: '246',
      image: 'rszv.png'
    },
    {
      id: 5,
      name: 'Гелікоптери',
      value: '190',
      image: 'helicopter.png'
    },
    {
      id: 6,
      name: 'ББМ',
      value: '4578',
      image: 'bbm.png'
    },
  ]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_ACTIVE_SECTION':
      return {
        ...state,
        navbarSections: state.navbarSections.map(section => {
        if (section.active === true) {
          return { 
            ...section,
            active: false
          }
        }
        if (section.id === action.payload.id) {
          return { 
            ...section,
            active: true
          }
        }
        return section
      })
    }
    default:
      return state
  }
}

export default reducer
