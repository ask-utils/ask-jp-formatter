import moment from 'moment-timezone'
import { getRandomSpeechCon } from './speechcon'
import { getRandomMessage } from '@ask-utils/core'
moment.tz.setDefault('Asia/Tokyo')

/**
 * あいさつを時間によって出し分ける
 * @param time
 */
export const getGreedingMessage = (time: moment.Moment = moment()) => {
    const date = time.toDate()
    const hours = date.getHours()
    if (hours < 11) {
        return getRandomSpeechCon(
            'おはよう',
            'おはようございます'
        )
    }
    if (hours < 15) {
        return getRandomSpeechCon(
            'こんにちは',
            'やあ'
        )
    }
    if (hours < 19) {
        return getRandomSpeechCon(
            'こんばんは'
        )
    }
    return getRandomMessage([
        'こんばんは',
        'おそくまでお疲れ様',
        getRandomSpeechCon(
            'お疲れ様',
            'お疲れ様です'
        )
    ])
}
