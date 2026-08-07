# Youbike-API

> Youbike API打包

---

## 安裝

在終端機執行此命令：

```shell
npm install youbike-api
```

## 目前可查詢縣市

- 臺北市
- 新北市（New!）
- 桃園市
- 臺中市
- 高雄市（已恢復）

## 使用方法

### TypeScript

```ts
import search from "youbike-api";

//列出該縣市所有站點
search("桃園市").then(console.log);

//查詢指定站點
search("桃園市", "中原大學").then(console.log);

//查詢指定站點（精確度 0.5）
search("桃園市", "中原大學", 0.5).then(console.log);
```

### JavaScript

```js
const search = require("youbike-api").default;

//列出該縣市所有站點
search("桃園市").then(console.log);

//查詢指定站點
search("桃園市", "中原大學").then(console.log);

//查詢指定站點（精確度 0.5）
search("桃園市", "中原大學", 0.5).then(console.log);
```

## 傳回資料

### 臺北市資料（對應TypeScript介面：TaipeiData）

```json
[
  {
    "sno": "500101001",
    "sna": "YouBike2.0_捷運科技大樓站",
    "sarea": "大安區",
    "mday": "2026-08-07 23:49:02",
    "ar": "復興南路二段235號前",
    "sareaen": "Daan Dist.",
    "snaen": "YouBike2.0_MRT Technology Bldg. Sta.",
    "aren": "No.235， Sec. 2， Fuxing S. Rd.",
    "act": "1",
    "srcUpdateTime": "2026-08-07 23:53:52",
    "updateTime": "2026-08-07 23:53:52",
    "infoTime": "2026-08-07 23:49:02",
    "infoDate": "2026-08-07",
    "Quantity": 28,
    "available_rent_bikes": 2,
    "latitude": 25.02605,
    "longitude": 121.5436,
    "available_return_bikes": 25
  }
]
```

### 新北市資料（對應TypeScript介面：NewTaipeiData）

```json
[
  {
    "scity": "新北市",
    "scityen": "New Taipei City",
    "sna": "YouBike2.0_下庄市場",
    "sarea": "八里區",
    "ar": "舊城路21號(前)",
    "snaen": "YouBike2.0_Shia Juang Market",
    "sareaen": "Bali Dist",
    "aren": "No.21, Jiucheng Rd., Bali Dist",
    "sno": "500201001",
    "tot_quantity": "20",
    "sbi_quantity": "10",
    "mday": "20260807T215803",
    "lat": "25.14678",
    "lng": "121.3999",
    "bemp": "10",
    "act": "1",
    "yb2_quantity": "6",
    "eyb_quantity": "4"
  }
]
```

### 桃園市資料（對應TypeScript介面：TaoYuanData）

```json
[
  {
    "scity": "桃園市",
    "scityen": "Taoyuan City",
    "sna": "YouBike2.0_君臨公園",
    "sarea": "八德區",
    "ar": "忠勇六街1號對面人行道",
    "snaen": "YouBike2.0_Junlin Park",
    "sareaen": "Bade Dist.",
    "aren": "No.1, Zhongyong 6th St.(opposite)",
    "sno": "500301001",
    "tot": "44",
    "sbi": "34",
    "mday": "20260807222402",
    "lat": "24.964524",
    "lng": "121.305469",
    "bemp": "10",
    "act": 1,
    "sbi_detail": {
      "yb2": "33",
      "eyb": "1"
    }
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
    "sbi": "5",
    "mday": "20260807222902",
    "lat": "24.13785",
    "lng": "120.68337",
    "bemp": "11",
    "act": "1",
    "sbi_detail": "5,0"
  }
]
```

### 高雄市資料（對應TypeScript介面：KaoHsiungData）

```json
[
  {
    "scity": "高雄市",
    "scityen": "Kaohsiung City",
    "sna": "YouBike2.0_捷運美麗島站(10號出口)",
    "sarea": "新興區",
    "ar": "中山一路168號前方",
    "snaen": "YouBike2.0_KRT Formosa Boulevard Sta. (Exit 10)",
    "sareaen": "Xinxing Dist",
    "aren": "No.168, Zhongshan 1st. Rd.",
    "sno": "501201001",
    "tot": "23",
    "sbi": "18",
    "mday": "20260807223003",
    "lat": "22.63213",
    "lng": "120.30212",
    "bemp": "4",
    "act": 1,
    "sbi_detail": {
      "yb2": "18",
      "eyb": "0"
    }
  }
]
```

# API來源：

桃園開放資料：https://data.tycg.gov.tw/  
政府資料開放平台：https://data.gov.tw/  
高雄城市資料平台：https://api.kcg.gov.tw/

# Version 3.0 更新日誌

- 新增新北市 API
- 更新 API 連結
- 高雄市 API 端口恢復
- 搜尋部分改採用 Fuse.js 進行模糊搜尋，精確度可透過 `threshold` 參數調整
- 因不同縣市 API 欄位名稱不同，故介面已大幅重構

# Version 2.0 更新日誌

- 更新臺中 API 連結
- 因高雄市 API 端口穩定性不佳，本模組暫時不開放
- 將台北市改成 Youbike 2.0 新 API 連結
