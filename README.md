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
* ~~高雄市~~（API 端口不穩，暫不開放查詢）

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
const search = require("youbike-api").default

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
    "sno": "500101001",
    "sna": "YouBike2.0_捷運科技大樓站",
    "tot": 28,
    "sbi": 0,
    "sarea": "大安區",
    "mday": "2024-04-13 11:02:20",
    "lat": 25.02605,
    "lng": 121.5436,
    "ar": "復興南路二段235號前",
    "sareaen": "Daan Dist.",
    "snaen": "YouBike2.0_MRT Technology Bldg. Sta.",
    "aren": "No.235， Sec. 2， Fuxing S. Rd.",
    "bemp": 28,
    "act": "1",
    "srcUpdateTime": "2024-04-13 11:02:26",
    "updateTime": "2024-04-13 11:02:44",
    "infoTime": "2024-04-13 11:02:20",
    "infoDate": "2024-04-13"
  }
]
```

### 桃園市資料（對應TypeScript介面：TaoYuanData）
```json
[
  {
    "_id": 1,
    "sno": "2001",
    "sna": "中央大學圖書館",
    "tot": "44",
    "sbi": "5",
    "sarea": "中壢區",
    "mday": "20240413105837",
    "lat": "24.968128",
    "lng": "121.194666",
    "ar": "中大路300號(中央大學校內圖書館前)",
    "sareaen": "Zhongli Dist.",
    "snaen": "National Central University Library",
    "aren": "No.300, Zhongda Rd.",
    "bemp": "34",
    "act": "1"
  }
]
```

### 臺中市資料（對應TypeScript介面：TaiChungData）
```json
[
  {
    "scity": "台中市",
    "scityen": "Taichung City",
    "sna": "YouBike2.0_綠川東中山路口",
    "sarea": "中區",
    "ar": "綠川東街/中山路口(東側)",
    "snaen": "YouBike2.0_Luchuan E. St. / Zhongshan Rd.",
    "sareaen": "Central Dist",
    "aren": "Luchuan E. St. & Zhongshan Rd. Intersection (East)",
    "sno": "500601001",
    "tot": "16",
    "sbi": "7",
    "mday": "20240413101219",
    "lat": "24.13785",
    "lng": "120.68337",
    "bemp": "9",
    "act": 1,
    "sbi_detail": { "yb2": "7", "eyb": "0" }
  }
]
```

### 高雄市資料（對應TypeScript介面：KaoHsiungData）
> 注意：因 API 端口不穩，所以此模組暫不開放查詢
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
