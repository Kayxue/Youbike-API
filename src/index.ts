import axios from "axios";

const DataUrl = {
    "臺北市": "https://tcgbusfs.blob.core.windows.net/blobyoubike/YouBikeTP.json",
    "桃園市": "https://data.tycg.gov.tw/api/v1/rest/datastore/a1b4714b-3b75-4ff8-a8f2-cc377e4eaa0f?format=json",
    "臺中市": "https://datacenter.taichung.gov.tw/swagger/OpenData/34c2aa94-7924-40cc-96aa-b8d090f0ab69",
    "高雄市": "https://api.kcg.gov.tw/api/service/Get/b4dd9c40-9027-4125-8666-06bef1756092"
}

interface TaipeiData {

}

interface TaoyuanData {
    _id: number,
    sno: string,
    sna: string,
    tot: string,
    sbi: string,
    sarea: string,
    mday: string,
    lat: string,
    lng: string,
    ar: string,
    sareaen: string,
    snaen: string,
    aren: string,
    bemp: string,
    act: string
}

interface TaiChungData {
    sno: string,
    sna: string,
    tot: string,
    sbi: string,
    sarea: string,
    mday: string,
    lat: string,
    lng: string,
    ar: string,
    sareaen: string,
    snaen: string,
    aren: string,
    bemp: string,
    act: string
}

interface KaoHsiungData {
    scity: string
    scityen: string
    sna: string,
    sarea: string,
    ar: string,
    snaen: string,
    sareaen: string,
    aren: string,
    sno: string,
    tot: string,
    sbi: string,
    mday: string,
    lat: string,
    lng: string,
    bemp: string,
    act: number
}

interface TypeDict {
    "臺北市": TaipeiData[],
    "桃園市": TaoyuanData[],
    "臺中市": TaiChungData[],
    "高雄市": KaoHsiungData[]
}

export default function <K extends keyof TypeDict>(region: K, station?: string): Promise<TypeDict[K]> {
    return axios.get(DataUrl[region])
        .then(res => {
            if (region === "臺北市") {
                const keys = Object.keys(res.data.retVal)
                let list = []
                for (const key of keys) {
                    list.push(res.data.retVal[key])
                }
                return list
            }
        })
        .then((data: TypeDict[K]) => { return { ...data } })
}

