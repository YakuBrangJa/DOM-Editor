export type EditorNodeStyle = React.CSSProperties & {
  contentAlign?: 'start' | 'center' | 'end'
};

export type BaseEditorNode = {
  id: string;
  style: EditorNodeStyle;
};

export type ContainerNode = BaseEditorNode & {
  type: 'main' | 'section' | 'block';
  layout: Layout;
  children: EditorNode[];
};

export type ContentNode = BaseEditorNode & {
  type: 'content';
  content: string;
  contentType: 'text' | 'image' | 'button' | 'table';
  contentStyle: React.CSSProperties
  children?: EditorNode[]
};

export type EditorNode = ContainerNode | ContentNode;

type Layout = {
  type: null
} | {
  type: 'block'
} | {
  type: 'row'
  gap?: number
} | {
  type: 'column'
  gap?: number
} | {
  type: 'grid'
  row: number
  col: number
  gap?: number
}


type TestNode = {
  type: string,
  path: string,
  children: TestNode[]
}

const test: TestNode[] = [
  {
    type: 'block',
    path: '0',
    children: [
      {
        type: 'block',
        path: '0.0',
        children: []
      },
      {
        type: 'block',
        path: '0.1',
        children: []
      },
      {
        type: 'block',
        path: '0.2',
        children: []
      }
    ]
  }
]