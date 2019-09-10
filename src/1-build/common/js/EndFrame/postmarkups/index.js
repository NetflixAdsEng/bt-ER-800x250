import { createSideBySidePostMarkups } from './horizontalSideBySide.js'
import horizontalStacked from './horizontalStacked.js'
import { Align } from 'ad-view'
import { ObjectUtils } from 'ad-utils'

const { leftPostMarkup, centerPostMarkup, rightPostMarkup } = createSideBySidePostMarkups({
	defaultArgs: {
		ctaLogoOffset: 14,
		tuneInFontSize: 18,
		tuneInLockupOffset: 8
	},
	yAlign: {
		type: Align.BOTTOM,
		offset: -26
	},
	layoutXAligns: {
		leftXAlign: {
			type: Align.LEFT,
			against: 70
		},
		centerXAlign: Align.CENTER,
		rightXAlign: {
			type: Align.RIGHT,
			offset: -73
		}
	}
})

function stackedPostMarkup() {
	horizontalStacked({
		brandingLockupOffset: 16,
		brandingLockupRightPadding: 30,
		tuneInFontSize: 18
	})
}

export { leftPostMarkup, centerPostMarkup, rightPostMarkup, stackedPostMarkup }
