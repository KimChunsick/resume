const useableFontSizeGroups: readonly string[] = ['header', 'body', 'subtitle', 'caption'] as const

export type UseableFontSizeGroup = typeof useableFontSizeGroups[number]
export function isUseableFontSizeGroup(fontSizeGroup: string): boolean {
  return useableFontSizeGroups.includes(fontSizeGroup as UseableFontSizeGroup)
}

type MakeFontSizeSet<
  TGroup extends UseableFontSizeGroup,
  THierarchy extends number[]
> = `${TGroup}${THierarchy[number]}`

export type FontSize =
  | MakeFontSizeSet<'header', [1, 2]>
  | MakeFontSizeSet<'subtitle', [1, 2, 3, 4]>
  | MakeFontSizeSet<'body', [1, 2]>
  | MakeFontSizeSet<'caption', [1, 2]>

export type TextElement = 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div' | 'label' | 'li'
export type TextWeight = 'bold' | 'normal'
export type TextAlign = 'left' | 'center' | 'right'

export interface TextProps {
  as: TextElement
  size: FontSize
  weight: TextWeight
  align: TextAlign
  color: string
  wrap: boolean
}

export type ReturningUseText<T extends Partial<TextProps> = Partial<TextProps>> = T & {
  // ReactNode
}
