import { render } from '@testing-library/react'
import TinderCards from '../Components/TinderCards'
import setCurrentId from '../Components/TinderCards'

const TinderCardsComponent = (
  <TinderCards users={[]} currentId={1} setCurrentId={() => setCurrentId} />
)

describe('TinderCardsのレンダリングテスト', () => {
  it('TinderCardsコンポーネントがレンダリングされているか', () => {
    render(TinderCardsComponent)
  })
  it('ユーザーの情報を表示するcard-containerが存在する', () => {
    const { container } = render(
      <TinderCards
        users={[]}
        currentId={1}
        setCurrentId={() => setCurrentId}
      />,
    )
    expect(container.getElementsByClassName('card-container').length).toEqual(1)
  })
})
