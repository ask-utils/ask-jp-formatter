/**
 * 文語調を口語調に変換する
 * @param {string} desc content
 */
export const replaceDescription = (desc: string): string => {
  let content = desc
  if (/である。/g.test(desc)) content = content.replace(/である。/g, 'です。')
  if (/する。/g.test(desc)) content = content.replace(/する。/g, 'します。')
  if (/した。/g.test(desc)) content = content.replace(/した。/g, 'しました。')
  if (/ないが、/g.test(desc)) content = content.replace(/ないが、/g, 'ありませんが、')
  if (/たが、/g.test(desc)) content = content.replace(/たが、/g, 'ましたが、')
  if (/いる。/g.test(desc)) content = content.replace(/いる。/g, 'います。')
  if (/いた。/g.test(desc)) content = content.replace(/いた。/g, 'いました。')
  return content
}

/**
 * Alexaで発話できない記号を変換する
 * @param {string} desc content for Alexa SSML
 */
export const replaceSpeechContent = (desc: string): string => {
  let content = desc
  if (/『/g.test(desc)) content = content.replace(/『/g, '')
  if (/』/g.test(desc)) content = content.replace(/』/g, '')
  if (/&/g.test(desc)) content = content.replace(/&/g, 'アンド')
  if (/ - /g.test(desc)) content = content.replace(/ - /g, '生まれ')
  return content
}

/**
 * ラベル表記を修正したい時用
 * @param {string} desc content
 */
export const replaceLabel = (desc: string): string => {
  let content = desc
  content = content.replace(/http:\/\/ja.dbpedia.org\/resource\//g, '')
  if (/『/g.test(desc)) content = content.replace(/『/g, '「')
  if (/』/g.test(desc)) content = content.replace(/』/g, '」')
  if (/&/g.test(desc)) content = content.replace(/&/g, '＆')
  return content
}
