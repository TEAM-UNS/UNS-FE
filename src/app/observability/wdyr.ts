import React from 'react'
import whyDidYouRender from '@welldone-software/why-did-you-render'

/**
 * why-did-you-render 초기화.
 * 이 파일은 main.tsx에서 DEV일 때만 "동적 import"로 불러오므로
 * 프로덕션 번들에는 포함되지 않는다.
 */
whyDidYouRender(React, {
  trackAllPureComponents: true,
  logOnDifferentValues: true,
})
