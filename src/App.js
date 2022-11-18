import './App.css'
import { CardComponent } from './components/cardComponent/cardComponent'
import { HadderComponent } from './components/hadderComponent/hadderComponent'

let header = {
  imageHtml: '/images/marvel.jpg',
  titleHtml: 'Lorem ipsum dolor sit',
  descriptionHtml:
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi autem, laboriosam minima a error necessitatibus similique quae, accusamus, facere deserunt officia tempore ab eum maiores!',
}

let cardArr = [
  {
    imgUrl: '/images/iron-man.jpg',
    title: 'CardComponent 1.',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi excepturi quae incidunt ad pariatur ducimus.',
  },
  {
    imgUrl: '/images/bat-man.jpg',
    title: 'CardComponent 2.',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi excepturi quae incidunt ad pariatur ducimus.',
  },
  {
    imgUrl: '/images/spider-man.jpg',
    title: 'CardComponent 3.',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi excepturi quae incidunt ad pariatur ducimus.',
  },
]

function App() {
  return (
    <div className='body'>
      <div className='App'>
        <HadderComponent
          imageUrl={header.imageHtml}
          title={header.titleHtml}
          description={header.descriptionHtml}
        ></HadderComponent>
        {cardArr.map((card) => {
          return (
            <CardComponent
              imageUrl={card.imgUrl}
              title={card.title}
              description={card.description}
            ></CardComponent>
          )
        })}
      </div>
    </div>
  )
}

export default App
