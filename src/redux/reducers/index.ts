const initialState = {
  navbarSections: [
    { 
      id: 0,
      sectionUa: 'Війна',
      sectionRu: 'Война',
      hotRubric: true
    },
    { 
      id: 1,
      sectionUa: 'Новини',
      sectionRu: 'Новости',
      hotRubric: false
    },
    { 
      id: 2,
      sectionUa: 'Політика',
      sectionRu: 'Политика',
      hotRubric: false
    },
    { 
      id: 3,
      sectionUa: 'Економіка',
      sectionRu: 'Экономика',
      hotRubric: false
    },
    { 
      id: 4,
      sectionUa: 'Суспільство',
      sectionRu: 'Общество',
      hotRubric: false
    },
    { 
      id: 5,
      sectionUa: 'Погляди',
      sectionRu: 'Взгляды',
      hotRubric: false
    },
    { 
      id: 6,
      sectionUa: 'Світ',
      sectionRu: 'Мир',
      hotRubric: false
    },
    { 
      id: 7,
      sectionUa: 'Live',
      sectionRu: 'Live',
      hotRubric: false
    },
  ],
  language: 'UA',
}

const reducer = (state = initialState, action) => state

export default reducer
