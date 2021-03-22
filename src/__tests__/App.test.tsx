import { render } from '@testing-library/react'
import App from '../Components/App'

describe('Appコンポーネントのレンダリングテスト', () => {
  it('Appコンポーネントが正常に描画される', () => {
    render(<App />)
  })

  it('emptyメッセージが存在する', () => {
    const { container } = render(<App />)
    expect(container.innerHTML).toMatch(
      '全てのユーザーを表示しました。さらに表示したい場合は時間を置いてから再びお試しください。',
    )
  })
  it('NOPE, LIKEボタンが存在する', () => {
    const { container } = render(<App />)
    expect(container.getElementsByClassName('imcross').length).toEqual(1)
    expect(container.getElementsByClassName('aifillheart').length).toEqual(1)
    expect(container.getElementsByClassName('trigger').length).toEqual(2)
  })
})
