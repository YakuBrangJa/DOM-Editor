export type EditorNode= {
  id: string
  type: 'main' | 'section' | 'block' | 'content'
  content?: string
  contentType?: 'text' | 'image' | 'button' | 'table'
  layout: Layout
  style: {
    backgroundColor?: string
    padding?: {
      top: number
      right: number
      bottom: number
      left: number
    }
    margin?: {
      top: number
      right: number
      bottom: number
      left: number
    }
    border?: {
      color: string
      width: {
        top: number
        right: number
        bottom: number
        left: number
      }
    }
    connerRadius?: number
  }
  children: EditorNode[]
}


type Layout = {
  type: 'block'
} | {
  type: 'row'
  row?:0
  col: number
  gap: number
} | {
  type: 'column'
  row: number
  col?: 0
  gap: number
} | {
  type: 'grid'
  row: number
  col: number
  gap: number
}