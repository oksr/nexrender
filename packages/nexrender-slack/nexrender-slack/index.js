const { WebClient } = require('@slack/web-api');
const token = 'xoxb-945320910551-945671615286-qiTD1XT3pcrIHNWQ7siHBkKB';
const web = new WebClient(token);

module.exports = (job, settings, action, type) => {
  return new Promise((resolve) => {
    if (action.arg1 == 'pre'){
    web.chat.postMessage(
      {
        "channel": "CTRDGMUNL",
        "username": "Render Bot",
        "text": `${action.arg2}`, // <> are used for linking
        "icon_emoji": ":robot_face:",
        "attachments": [ // attachments, here we also use long attachment to use more space
          {
            "color": "#6290D8",
            "fields": [
              {
                "title": "Job ID",
                "value": `${job.uid}`,
                "short": false
              }
            ]
          }
        ]
      }
    )
    }
    else{
      web.chat.postMessage(
        {
          "channel": "CTRDGMUNL",
          "username": "Render Bot",
          "text": `${action.arg2}`, // <> are used for linking
          "icon_emoji": ":white_check_mark:",
          "attachments": [ // attachments, here we also use long attachment to use more space
            {
              "color": "#6290D8",
              "fields": [
                {
                  "title": "Job ID",
                  "value": `${job.uid}`,
                  "short": false
                }
              ]
            }
          ]
        }
      )
    }
    console.log('Message sent: ');
    resolve(job);
  }

  )
}