# Alexa Japanese content formatter
Alexaでの発話を日本語化する際のヘルパー関数です。

## Getting started

```
$ npm i -S ask-jp-formatter
```

## Usage

```
const {
  replaceDescription,
  replaceSpeechContent,
  replaceLabel
} = require('ask-jp-formatter')

replaceDescription('テストである。仕方ないが、確認する。')
'テストです。仕方ありませんが、確認します。'

replaceSpeechContent('『テスト&チェック』 (1990年1月 - )')
'テストアンドチェック (1990年1月生まれ)'

replaceLabel('『テスト&チェック』')
'「テスト＆チェック」'
```


## Contributing

```
$ git clone https://github.com/ask-utils/ask-jp-formatter,.git
$ cd sparql-client
$ git checkout -b YOUR_TOPIC_BRANCH
$ npm i
```

### Before PR

Please pass following check before make your Pull Request.

```
$ npm run lint
$ npm test
```