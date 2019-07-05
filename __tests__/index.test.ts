// target
import * as  libs  from '../libs/index'
const {
  replaceDescription,
  replaceSpeechContent,
  replaceLabel
} = libs

describe('replaceDescription()', () => {
  it('should replace written content', () => {
    const content = replaceDescription('テストである。仕方ないが、確認する。')
    expect(content).toEqual('テストです。仕方ありませんが、確認します。')
  })
})

describe('replaceSpeechContent()', () => {
  it('should replace unsupported ssml lang for Alexa', () => {
    expect(replaceSpeechContent('『テスト&チェック』 (1990年1月 - )')).toEqual('テストアンドチェック (1990年1月生まれ)')
  })
})

describe('replaceLabel()', () => {
  it('should replace unsupported markup for Alexa', () => {
    expect(replaceLabel('『テスト&チェック』')).toEqual('「テスト＆チェック」')
  })
})
