import {EditorNode} from "../types/Node.type"

export const sampleData1: EditorNode[] = [{
  id: "1",
  type: "main",
  layout: {
    type: "block"
  },
  style: {
    backgroundColor: "#f0f0f0",
      padding: {
      top: 20,
      right: 20,
      bottom: 20,
      left: 20
    },
    margin: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  },
  children: [
    {
      id: "1.1",
      type: "section",
      layout: {
        type: "column",
        row: 2,
        gap: 10
      },
      style: {
        backgroundColor: "#ffffff",
        padding: {
          top: 15,
          right: 15,
          bottom: 15,
          left: 15
        },
        margin: {
          top: 10,
          right: 10,
          bottom: 10,
          left: 10
        },
        border: {
          color: "#cccccc",
          width: {
            top: 1,
            right: 1,
            bottom: 1,
            left: 1
          }
        },
        connerRadius: 5
      },
      children: [
        {
          id: "1.1.1",
          type: "block",
          layout: {
            type: "row",
            col: 3,
            gap: 10
          },
          style: {
            backgroundColor: "#e0e0e0",
            padding: {
              top: 10,
              right: 10,
              bottom: 10,
              left: 10
            },
            margin: {
              top: 5,
              right: 5,
              bottom: 5,
              left: 5
            },
            border: {
              color: "#bbbbbb",
              width: {
                top: 2,
                right: 2,
                bottom: 2,
                left: 2
              }
            },
            connerRadius: 8
          },
          children: [
            {
              id: "1.1.1.1",
              type: "content",
              content: "This is some text content.",
              contentType: "text",
              layout: {
                type: "block"
              },
              style: {
                backgroundColor: "#ffffff",
                padding: {
                  top: 5,
                  right: 5,
                  bottom: 5,
                  left: 5
                },
                margin: {
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0
                }
              },
              children: []
            },
            {
              id: "1.1.1.2",
              type: "content",
              content: "https://example.com/image.png",
              contentType: "image",
              layout: {
                type: "block"
              },
              style: {
                backgroundColor: "#ffffff",
                padding: {
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0
                },
                margin: {
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0
                }
              },
              children: []
            },
            {
              id: "1.1.1.3",
              type: "content",
              content: "Click Me",
              contentType: "button",
              layout: {
                type: "block"
              },
              style: {
                backgroundColor: "#007bff",
                padding: {
                  top: 8,
                  right: 16,
                  bottom: 8,
                  left: 16
                },
                margin: {
                  top: 10,
                  right: 10,
                  bottom: 10,
                  left: 10
                },
                border: {
                  color: "#0056b3",
                  width: {
                    top: 1,
                    right: 1,
                    bottom: 1,
                    left: 1
                  }
                },
                connerRadius: 4
              },
              children: []
            }
          ]
        },
        {
          id: "1.1.2",
          type: "block",
          layout: {
            type: "grid",
            row: 2,
            col: 2,
            gap: 15
          },
          style: {
            backgroundColor: "#d0d0d0",
            padding: {
              top: 10,
              right: 10,
              bottom: 10,
              left: 10
            },
            margin: {
              top: 10,
              right: 10,
              bottom: 10,
              left: 10
            },
            border: {
              color: "#aaaaaa",
              width: {
                top: 2,
                right: 2,
                bottom: 2,
                left: 2
              }
            },
            connerRadius: 6
          },
          children: [
            {
              id: "1.1.2.1",
              type: "content",
              content: "Grid Item 1",
              contentType: "text",
              layout: {
                type: "block"
              },
              style: {
                backgroundColor: "#ffffff",
                padding: {
                  top: 5,
                  right: 5,
                  bottom: 5,
                  left: 5
                },
                margin: {
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0
                }
              },
              children: []
            },
            {
              id: "1.1.2.2",
              type: "content",
              content: "Grid Item 2",
              contentType: "text",
              layout: {
                type: "block"
              },
              style: {
                backgroundColor: "#ffffff",
                padding: {
                  top: 5,
                  right: 5,
                  bottom: 5,
                  left: 5
                },
                margin: {
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0
                }
              },
              children: []
            },
            {
              id: "1.1.2.3",
              type: "content",
              content: "Grid Item 3",
              contentType: "text",
              layout: {
                type: "block"
              },
              style: {
                backgroundColor: "#ffffff",
                padding: {
                  top: 5,
                  right: 5,
                  bottom: 5,
                  left: 5
                },
                margin: {
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0
                }
              },
              children: []
            },
            {
              id: "1.1.2.4",
              type: "content",
              content: "Grid Item 4",
              contentType: "text",
              layout: {
                type: "block"
              },
              style: {
                backgroundColor: "#ffffff",
                padding: {
                  top: 5,
                  right: 5,
                  bottom: 5,
                  left: 5
                },
                margin: {
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0
                }
              },
              children: []
            }
          ]
        }
      ]
    }
  ]
}]

