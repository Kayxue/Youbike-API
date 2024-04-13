import axios from "axios";

const DataUrl = {
    臺北市: "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json",
    桃園市: "https://data.tycg.gov.tw/api/v1/rest/datastore/a1b4714b-3b75-4ff8-a8f2-cc377e4eaa0f?format=json",
    臺中市: "https://datacenter.taichung.gov.tw/swagger/OpenData/86dfad5c-540c-4479-bb7d-d7439d34eeb1",
    高雄市: "https://api.kcg.gov.tw/api/service/Get/b4dd9c40-9027-4125-8666-06bef1756092",
};

export interface DataBase<K> {
    sno: string;
    sna: string;
    tot: string;
    sbi: string;
    sarea: string;
    mday: string;
    lat: string;
    lng: string;
    ar: string;
    sareaen: string;
    snaen: string;
    aren: string;
    bemp: string;
    act: K;
}

export interface TaipeiData
    extends Omit<DataBase<string>, "tot" | "sbi" | "lat" | "lng" | "bemp"> {
    tot: number;
    sbi: number;
    lat: number;
    lng: number;
    bemp: number;
}

export interface TaoYuanData extends DataBase<string> {
    _id: number;
}

export interface TaiChungData extends DataBase<number> {
    scity: string;
    scityen: string;
    sbi_detail: {
        yb2: string;
        eyb: string;
    };
}

// export interface KaoHsiungData extends DataBase<number> {
//     scity: string;
//     scityen: string;
// }

export interface TypeDict {
    臺北市: TaipeiData;
    桃園市: TaoYuanData;
    臺中市: TaiChungData;
    // 高雄市: KaoHsiungData;
}

export default function <K extends keyof TypeDict>(
    region: K,
    station?: string
): Promise<TypeDict[K][]> {
    return axios.get(DataUrl[region]).then((res) => {
        switch (region) {
            case "臺北市":
                if (station?.length) {
                    return res.data.filter((e:TypeDict[K]) => e.sna.includes(station))
                }
                else {
                    return res.data
                }
            case "臺中市":
            case "桃園市":
            // case "高雄市":
                if (station?.length) {
                    // const data: (TypeDict[K])[] = region === "桃園市" ? res.data.result.records : (region === "高雄市" ? res.data.data.retVal : res.data.retVal)
                    const data: (TypeDict[K])[] = region === "桃園市" ? res.data.result.records : res.data.retVal
                    return data.filter(d => d.sna.includes(station))
                }
                else {
                    return region === "桃園市" ? res.data.result.records : res.data.retVal
                }
            default:
                throw new Error("找不到指定縣市")
        }
    });
}
