interface IBotMessage {
  msg_type: "text";
  content: { text: string };
}
export const botMessageFormat = (blockNumber: string, message: string) => {
  const botMessage: IBotMessageCard = {
    chat_id: "oc_abcdefg1234567890",
    msg_type: "interactive",
    root_id: "om_4*********************ad8",
    card: {
      config: {
        wide_screen_mode: true,
      },
      elements: [
        {
          fields: [
            {
              is_short: false,
              text: {
                content: blockNumber,
                tag: "lark_md",
              },
            },
          ],
          tag: "div",
        },
        {
          tag: "div",
          text: {
            content: message,
            tag: "lark_md",
          },
        },
      ],
      header: {
        template: "red",
        title: {
          content: "Indexer Error",
          tag: "plain_text",
        },
      },
    },
  };
  return botMessage;
};
interface IBotMessageCard {
  chat_id: "oc_abcdefg1234567890";
  msg_type: "interactive";
  root_id: "om_4*********************ad8";
  card: {
    config: {
      wide_screen_mode: true;
    };
    elements: [
      {
        fields: [
          {
            is_short: false;
            text: {
              content: string;
              tag: "lark_md";
            };
          }
        ];
        tag: "div";
      },
      {
        tag: "div";
        text: {
          content: string;
          tag: "lark_md";
        };
      }
    ];
    header: {
      template: "red";
      title: {
        content: "Indexer Error";
        tag: "plain_text";
      };
    };
  };
}
