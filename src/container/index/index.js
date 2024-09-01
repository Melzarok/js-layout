import {
  createElement,
  createHeader,
} from '../../script/layout'

const page = document.querySelector('.page')

const header = createHeader()

page.append(header)

const title = createElement('h1', 'title', 'Мій блог')

page.append(title)

const POST_LIST = [
  {
    category: [
      { text: 'Важливо', id: 1 },
      { text: 'Нова', id: 2 },
    ],
    info: 'До біса планувальник, наймаємо дизайнера і готуємося до презентації, як Джобс',
    date: '25.01',
    viewed: false,
  },
  {
    category: [{ text: 'Нова', id: 2 }],
    info: 'Ми хотіли щоб у цьому чаті було близько 150 людей щоб зробити якісний пак самопрезентацій.',
    date: '24.01',
    viewed: true,
  },
]

const createPost = () => {
  const postList = createElement('main', 'post__list')

  POST_LIST.forEach((postData) => {
    const post = createElement(
      'div',
      postData.viewed
        ? 'post button post--viewed'
        : 'post button',
    )

    const postHeader = createElement('div', 'post__header')

    const categoryList = createElement(
      'div',
      'post__category-list',
    )

    postData.category.forEach((category) => {
      const categorySpan = createElement(
        'span',
        `post__category post__category--${category.id}`,
        category.text,
      )

      categoryList.append(categorySpan)
    })

    const dateSpan = createElement(
      'span',
      'post__date',
      postData.date,
    )
    postHeader.append(categoryList, dateSpan)

    const infoParagraph = createElement(
      'p',
      'post__info',
      postData.info,
    )
    post.append(postHeader, infoParagraph)

    postList.append(post)
  })

  return postList
}

const post = createPost()
page.append(post)

// .......................................................

const page2 = document.querySelector('.page-2')

const header2 = createHeader()

page2.append(header2)

const title2 = createElement('h1', 'title', 'Мій блог')

page2.append(title2)

const community = {
  navInfo: [
    {
      text: 'База знань',
      isActive: false,
    },
    {
      text: 'Інформація',
      isActive: true,
    },
  ],

  heroImage: {
    src: '/img/community_header.png',
  },

  communityInfo: {
    title: 'Що таке база знань?',
    text: 'База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом решения предыдущих задач. ',
    buttonText: `Перейти до ком'юніті у Телеграм`,
  },
}

const createNav = () => {
  const navList = createElement('div', 'nav nav-underline')

  community.navInfo.forEach((data) => {
    const link = createElement(
      'a',
      data.isActive ? 'nav-link active' : 'nav-link',
      data.text,
    )
    // console.log(link)

    navList.append(link)
  })

  return navList
}

const nav = createNav()

page2.append(nav)

const createCommunityInfo = () => {
  const infoList = createElement('main', 'post__list')

  const infoSection = createElement('div', 'community_info')

  const communityHeroImage = createElement('img')
  communityHeroImage.src = community.heroImage.src

  const infoHeading = createElement(
    'h3',
    '',
    `${community.communityInfo.title}`,
  )
  const infoParagraph = createElement(
    'p',
    '',
    `${community.communityInfo.text}`,
  )

  const infoSectionBtn = createElement(
    'button',
    'button community__button',
    `${community.communityInfo.buttonText}`,
  )

  infoSection.append(
    communityHeroImage,
    infoHeading,
    infoParagraph,
    infoSectionBtn,
  )

  infoList.append(infoSection)

  return infoList
}

const communityInfo = createCommunityInfo()

page2.append(communityInfo)
