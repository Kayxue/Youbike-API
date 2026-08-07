import axios from "axios";
import Fuse from "fuse.js";

const DataUrl = {
  臺北市:
    "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json",
  新北市:
    "https://data.ntpc.gov.tw/api/datasets/010e5b15-3823-4b20-b401-b1cf000550c5/json?page=0&size=10000",
  桃園市:
    "https://opendata.tycg.gov.tw/api/v1/dataset.api_access?rid=08274d61-edbe-419d-8fcc-7a643831283d&format=json",
  臺中市:
    "https://newdatacenter.taichung.gov.tw/api/v1/no-auth/resource.download?rid=9468c0d0-e1ed-4ecc-a86f-ab5a9fd590ff",
  高雄市:
    "https://data.kcg.gov.tw/Json/Get/b4dd9c40-9027-4125-8666-06bef1756092",
};

export interface DataBase<K> {
  ar: string;
  aren: string;
  mday: string;
  sarea: string;
  sareaen: string;
  sna: string;
  snaen: string;
  sno: string;
  act: K;
}

export interface TaipeiData extends DataBase<String> {
  srcUpdateTime: string;
  updateTime: string;
  infoTime: string;
  infoDate: string;
  Quantity: number;
  available_rent_bikes: number;
  latitude: number;
  longitude: number;
  available_return_bikes: number;
}

export interface NewTaipeiData extends DataBase<String> {
  scity: string;
  scityen: string;
  tot_quantity: string;
  sbi_quantity: string;
  lat: string;
  lng: string;
  bemp: string;
  yb2_quantity: string;
  eyb_quantity: string;
}

export interface TaoYuanData extends DataBase<number> {
  scity: string;
  scityen: string;
  tot: string;
  sbi: string;
  lat: string;
  lng: string;
  bemp: string;
  sbi_detail: {
    yb2: string;
    eyb: string;
  };
}

export interface TaiChungData extends DataBase<number> {
  scity: string;
  scityen: string;
  tot: string;
  sbi: string;
  lat: string;
  lng: string;
  bemp: string;
  sbi_detail: string;
}

export interface KaoHsiungData extends DataBase<number> {
  scity: string;
  scityen: string;
  tot: string;
  sbi: string;
  lat: string;
  lng: string;
  bemp: string;
  sbi_detail: {
    yb2: string;
    eyb: string;
  };
}

export interface TypeDict {
  臺北市: TaipeiData;
  新北市: NewTaipeiData;
  桃園市: TaoYuanData;
  臺中市: TaiChungData;
  高雄市: KaoHsiungData;
}

export default function <K extends keyof TypeDict>(
  region: K,
  station?: string,
  score: number = 0.4,
): Promise<TypeDict[K][]> {
  return axios.get(DataUrl[region]).then((res) => {
    switch (region) {
      case "臺北市":
      case "新北市":
      case "臺中市":
        return station?.length
          ? new Fuse(res.data, {
              keys: ["sno", "sna", "sarea", "ar", "sareaen", "snaen", "aren"],
              threshold: score,
              ignoreLocation: true,
            })
              .search(station)
              .map((e) => e.item)
          : res.data;

      case "桃園市":
      case "高雄市":
        const data: TypeDict[K][] =
          region === "桃園市"
            ? res.data.map((e) => {
                return {
                  ...e,
                  sbi_detail: JSON.parse(e.sbi_detail),
                };
              })
            : res.data.Data.retVal;
        return station?.length
          ? new Fuse(data, {
              keys: ["sno", "sna", "sarea", "ar", "sareaen", "snaen", "aren"],
              threshold: score,
              ignoreLocation: true,
            })
              .search(station)
              .map((e) => e.item)
          : data;
      default:
        throw new Error("找不到指定縣市");
    }
  });
}
