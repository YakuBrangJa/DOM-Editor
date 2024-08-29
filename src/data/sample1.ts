import {EditorNode} from "../types/node.types";

export const sampleData1: EditorNode[] = [
  {
    id: '0',
    path: '0',
    type: 'section',
    layout: {
      type: "row",
      gap: 0
    },
    style: {},
    children: [
      {
        id: '0.0',
        path: '0.0',
        type: 'block',
        layout: {
          type: "column",
          gap: 0.75,
        },
        style: {
          paddingTop: "4em",
          paddingRight: "2em",
          paddingBottom: "4em",
          paddingLeft: "4em",
        },
        children: [
          {
            id: '0.0.0',
            path: '0.0.0',
            type: 'content',
            content: 'Landing Page Builder',
            contentType: 'text',
            style: {},
            contentStyle: {
              fontSize: '1.75em',
              fontWeight: '700',
              color: '#080808'
            },
          },
          {
            id: '0.0.1',
            path: '0.0.1',
            type: 'content',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur exercitationem earum dolorum placeat',
            contentType: 'text',
            style: {},
            contentStyle: {
              fontSize: '1em',
              fontWeight: 'normal',
              color: '#7f7f7f'
            },
          },
          {
            id: '0.0.2',
            path: '0.0.2',
            type: 'content',
            content: 'Get started',
            contentType: 'button',
            style: {
              marginTop: '0.3em',
            },
            contentStyle: {
              fontSize: "0.85em",
              fontWeight: "semibold",
              color: "#F0F0F0",
              backgroundColor: "#2f2f2f",
              paddingTop: "0.4em",
              paddingRight: "0.75em",
              paddingBottom: "0.4em",
              paddingLeft: "0.75em",
              borderRadius: "0.3em",
            },
          },
        ]
      },
      {
        id: '0.1',
        path: '0.1',
        type: 'block',
        layout: {
          type: null
        },
        style: {},
        children: [

        ]
      }
    ]
  },
  {
    id: '1',
    path: '1',
    type: 'section',
    layout: {
      type: "row",
      gap: 0
    },
    style: {
      height: '19em',
    },
    children: [
      {
        id: '1.0',
        path: '1.0',
        type: 'block',
        layout: {
          type: "column",
          gap: 0.75,
        },
        style: {
          paddingTop: "4em",
          paddingRight: "2em",
          paddingBottom: "4em",
          paddingLeft: "4em",
          contentAlign: 'center',
          backgroundColor: '#00A35C',
        },
        children: [
          {
            id: '1.0.0',
            path: '1.0.0',
            type: 'content',
            content: 'Ship site with style',
            contentType: 'text',
            style: {},
            contentStyle: {
              fontSize: '1.85em',
              fontWeight: '700',
              color: '#FFFFFF'
            },
          },
          {
            id: '1.0.1',
            path: '1.0.1',
            type: 'content',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur',
            contentType: 'text',
            style: {
              width: '18em'
            },
            contentStyle: {
              fontSize: '1em',
              fontWeight: 'normal',
              color: '#dfdfdf',
              textAlign: 'center'
            },
          },
          {
            id: '1.0.2',
            path: '1.0.2',
            type: 'content',
            content: 'Learn more',
            contentType: 'button',
            style: {
              marginTop: '0.3em',
            },
            contentStyle: {
              fontSize: '0.85em',
              fontWeight: 'semibold',
              color: '#2f2f2f',
              backgroundColor: '#Fafafa',
              paddingTop: "0.4em",
              paddingRight: "0.75em",
              paddingBottom: "0.4em",
              paddingLeft: "0.75em",
              borderRadius: "0.3em",
            },
          },
        ]
      },
    ]
  },
  {
    id: '2',
    path: '2',
    type: 'section',
    layout: {
      type: 'column',
    },
    style: {
      // padding: '2em'
    },
    children: [
      {
        id: '2.0',
        path: '2.0',
        type: 'block',
        layout: {
          type: null,
        },
        style: {},
        children: [
          // {
          //   id: '2.0.0',
          //   path: '2.0.0',
          //   type: 'block',
          //   layout: {
          //     type: null,
          //   },
          //   style: {},
          //   children: []
          // },
          // {
          //   id: '2.0.1',
          //   path: '2.0.1',
          //   type: 'block',
          //   layout: {
          //     type: null,
          //   },
          //   style: {},
          //   children: []
          // },
          // {
          //   id: '2.0.2',
          //   path: '2.0.2',
          //   type: 'block',
          //   layout: {
          //     type: null,
          //   },
          //   style: {},
          //   children: []
          // },
        ]
      },
      {
        id: '2.1',
        path: '2.1',
        type: 'block',
        layout: {
          type: null,
        },
        style: {},
        children: []
      },
      {
        id: '2.2',
        path: '2.2',
        type: 'block',
        layout: {
          type: null,
        },
        style: {},
        children: []
      }
    ]
  }
]

