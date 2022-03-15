import { ReturningUseText, TextProps } from './type'

const initProps: Partial<TextProps> = {
  as: 'p',
  size: 'body1',
  wrap: true,
  color: 'inherit'
}

export function useText<T extends Partial<TextProps>>(props: T): ReturningUseText<T> {
  return {
    ...initProps,
    ...props
  }
}
