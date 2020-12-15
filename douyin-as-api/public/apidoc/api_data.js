define({ "api": [
  {
    "type": "post",
    "url": "/api/banner/add",
    "title": "添加轮播图",
    "name": "AddBanner",
    "group": "banner",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>状态码.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>描述</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"code\": \"200\",\n  \"message\": \"插入轮播图成功！\",\n  \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/banner/add"
      }
    ],
    "version": "0.0.0",
    "filename": "api/banner.js",
    "groupTitle": "banner"
  }
] });
