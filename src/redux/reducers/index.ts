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
  ],
  mainNews: [
    {
      id: 0,
      news: 'Андрій Єрмак: «В нас інші прізвища, ніж у творців Мінських угод. Людей, які б таке допускали, в нашій команді немає»',
      image: '1.png',
    },
    {
      id: 1,
      news: 'Оприлюднено супутникові знімки аеродрому біля Новофедорівки: видно місця ураження',
      image: 'news-image-2.png',
    },
    {
      id: 2,
      news: 'Вибухи на білоруському аеродромі "Зябрівка": оприлюднені причини',
      image: 'news-image-3.png',
    },
    {
      id: 3,
      news: 'Сейм Латвії визнав рф країною-спонсором тероризму',
      image: 'news-image-4.png',
    }
  ],
  allNews: [
    {
      id: 0,
      time: '14:59',
      text: '"Відбудова України — завдання усього світу": промова Зеленського на конференції в Лугано',
      info: '',
      infoImage: '',
      breaking: false
    },
    {
      id: 1,
      time: '14:59',
      text: 'До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини',
      info: 'Новина з фото',
      infoImage: 'camera-icon.png',
      breaking: false
    },
    {
      id: 2,
      time: '14:59',
      text: 'Прем\'єрка Швеції відвідала потрощені росіянами Бучу й Бородянку: реакція на побачене',
      info: '',
      infoImage: '',
      breaking: false
    },
    {
      id: 3,
      time: '14:59',
      text: 'До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини',
      info: 'Термінова новина',
      infoImage: 'fire-icon.png',
      breaking: true
    },
    {
      id: 4,
      time: '14:59',
      text: 'Стало відомо, коли ЄС може узгодити сьомий пакет санкцій проти рф',
      info: '',
      infoImage: '',
      breaking: false
    },
    {
      id: 5,
      time: '14:59',
      text: 'До Європи за захистом. Що означає позов Ахметова до Європейського суду з прав людини',
      info: '',
      infoImage: '',
      breaking: false
    },
    {
      id: 6,
      time: '14:59',
      text: '"Відбудова України — завдання усього світу": промова Зеленського на конференції в Лугано',
      info: '',
      infoImage: '',
      breaking: false
    },
    {
      id: 7,
      time: '14:59',
      text: 'Дружина Зеленського чесно зізналася, чи боїться смерті',
      info: '',
      infoImage: '',
      breaking: false
    },
    {
      id: 8,
      time: '14:59',
      text: '"Бийся на світлій стороні": як спортсмени, меценати й волонетри рятують життя українців',
      info: '',
      infoImage: '',
      breaking: false
    },
    {
      id: 9,
      time: '14:59',
      text: 'Жданов назвав три питання, які обговорять путін і Ердоган',
      info: '',
      infoImage: '',
      breaking: false
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
