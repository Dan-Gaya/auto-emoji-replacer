module.exports= {
    "data": {
      "date": {
        "created_at": "2025-02-20",
        "updated_at": "2025-02-20"
      },
      "descriptions": {
        "app_description": "This integration automatically apend certain words in chat messages with corresponding emojis. It enhances communication by making messages more expressive and fun.",
        "app_logo": "https://iili.io/XMBfse.png",
        "app_name": "Auto-Emoji Appender.",
        "app_url": "https://auto-emoji-replacer.onrender.com",
        "background_color": "#HEXCODE"
      },
      "integration_category": "Communication & Collaboration",
      "integration_type": "modifier",
      "is_active": false,
      "output": [],
      "key_features": [
        "Real-Time Message Modification",
        "Customizable Emoji Mapping",
        "Lightweight and Efficient Performance",
        "Seamless Integration with Telex"
      ],
      "permissions": {
        "monitoring_user": {
          "always_online": true,
          "display_name": "Performance Monitor"
        }
      },
    "settings": [
        {
        "label": "channelId",
        "type": "string",
        "description": "The ID of the channel to monitor and answer questions about",
        "required": true
        },
        {
        "label": "messageLimit",
        "type": "number",
        "description": "Maximum number of recent messages to use as context (default: 50)",
        "default": 50,
        "required": false
        }
    ],
      endpoints: [
        {
          path: "/api/process-message",
          method: "POST",
          description: "Receives messages  responses",
        },
    
      ],
      "target_url": "https://auto-emoji-replacer.onrender.com/api/process-message"
    }
  }
  