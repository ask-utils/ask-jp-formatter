const assert = require('power-assert')
// target
const libs = require('../index')
const {
  replaceDescription,
  replaceSpeechContent,
  replaceLabel
} = libs

describe('replaceDescription()', () => {
  it('should replace written content', () => {
    const content = replaceDescription('テストである。仕方ないが、確認する。')
    assert.equal(content, 'テストです。仕方ありませんが、確認します。')
  })
})

describe('replaceSpeechContent()', () => {
  it('should replace unsupported ssml lang for Alexa', () => {
    assert.equal(replaceSpeechContent('『テスト&チェック』 (1990年1月 - )'), 'テストアンドチェック (1990年1月生まれ)')
  })
})

describe('replaceLabel()', () => {
  it('should replace unsupported markup for Alexa', () => {
    assert.equal(replaceLabel('『テスト&チェック』'), '「テスト＆チェック」')
  })
})