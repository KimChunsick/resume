import { FC } from 'react'

import { Element } from './style'
import { TextProps } from './type'
import { useText } from './useText'

export const Text: FC<Partial<TextProps>> = (props) => {
  const { as, children, ...otherProps } = useText(props)
  const Render = Element.withComponent(as as keyof JSX.IntrinsicElements)
  return <Render {...otherProps}>{children}</Render>
}
