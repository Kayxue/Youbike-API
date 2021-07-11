# Youbike-API
> Youbike API打包

***

## 安裝
在終端機執行此命令：
```shell
npm install youbike-api
```

## 目前可查詢縣市
* 臺北市
* 桃園市
* 臺中市
* 高雄市

## 使用方法
### TypeScript
```ts
import search from "youbike-api"

//列出該縣市所有站點
search("桃園市")
    .then(console.log)

//查詢指定站點
search("桃園市", "中原大學")
    .then(console.log)
```

### JavaScript
```js
const search = require("youbike-api")

//列出該縣市所有站點
search("桃園市")
    .then(console.log)

//查詢指定站點
search("桃園市", "中原大學")
    .then(console.log)
```

## 傳回資料
### 臺北市資料（對應TypeScript介面：TaipeiData）
```json
[
  {
    "sno": "0145",
    "sna": "樹德公園",
    "tot": "40",
    "sbi": "14",
    "sarea": "大同區",
    "mday": "20210711223136",
    "lat": "25.066688",
    "lng": "121.516149",
    "ar": "大龍街/大龍街85巷(東北側)",
    "sareaen": "Datong Dist.",
    "snaen": "Shude Park",
    "aren": "Dalong St. / Ln. 85, Dalong St.",
    "bemp": "26",
    "act": "1"
  },
  ...
]
```

### 桃園市資料（對應TypeScript介面：TaoYuanData）
```json
[
  {
    "_id": 5,
    "sno": "2005",
    "sna": "中原大學",
    "tot": "82",
    "sbi": "0",
    "sarea": "中壢區",
    "mday": "20210711223721",
    "lat": "24.957943",
    "lng": "121.240201",
    "ar": "中北路200號(中原大學校內懷恩樓後方空地)",
    "sareaen": "Zhongli Dist.",
    "snaen": "Chung Yuan Christian University",
    "aren": "No.200, Zhongbei Rd.",
    "bemp": "0",
    "act": "0"
  },
  ...
]
```

### 臺中市資料（對應TypeScript介面：TaiChungData）
```json
[
  {
    "scity": "台中市",
    "scityen": "Taichung City",
    "sna": "YouBike2.0_社皮公園",
    "sarea": "豐原區",
    "ar": "西勢一街65號(對側人行道)",
    "snaen": "YouBike2.0_Shepi Park",
    "sareaen": "Fengyuan Dist",
    "aren": "No.65, Xishi 1st St. (Opposite)",
    "sno": "500609018",
    "tot": "12",
    "sbi": "4",
    "mday": "20210711230200",
    "lat": "24.24451",
    "lng": "120.70472",
    "bemp": "8",
    "act": 1
  },
  ...
]
```

### KaoHsiungData（對應TypeScript介面：KaoHsiungData）
```json
[
  {
    "scity": "高雄市",
    "scityen": "Kaohsiung City",
    "sna": "YouBike2.0_河北二路中庸街口",
    "sarea": "三民區",
    "ar": "河北二路192號(對面)",
    "snaen": "YouBike2.0_Hebei 2nd Rd. & Zhongyong St. Intersection",
    "sareaen": "Sanmin Dist",
    "aren": "No. 192, Hebei 2nd Rd. (Opposite)",
    "sno": "501203085",
    "tot": "10",
    "sbi": "5",
    "mday": "20210711224228",
    "lat": "22.63417",
    "lng": "120.29090",
    "bemp": "5",
    "act": 1
  }
]
```

# API來源：
臺北市政府 交通即時資料 開放資料專區：https://taipeicity.github.io/traffic_realtime/  
桃園開放資料：https://data.tycg.gov.tw/  
政府資料開放平台：https://data.gov.tw/  
高雄城市資料平台：https://api.kcg.gov.tw/
