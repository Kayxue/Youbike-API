import axios from "axios";

const DataUrl = {
    "臺北市": "https://tcgbusfs.blob.core.windows.net/blobyoubike/YouBikeTP.json",
    "桃園市": "https://data.tycg.gov.tw/api/v1/rest/datastore/a1b4714b-3b75-4ff8-a8f2-cc377e4eaa0f?format=json",
    "臺中市": "	https://datacenter.taichung.gov.tw/swagger/OpenData/9af00e84-473a-4f3d-99be-b875d8e86256",
    "高雄市": "https://api.kcg.gov.tw/api/service/Get/b4dd9c40-9027-4125-8666-06bef1756092"
}

export interface TaipeiData {
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

export interface TaoYuanData {
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

export interface TaiChungData {
    scity: string,
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

export interface KaoHsiungData {
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

export interface TypeDict {
    "臺北市": TaipeiData,
    "桃園市": TaoYuanData,
    "臺中市": TaiChungData,
    "高雄市": KaoHsiungData
}

export default function <K extends keyof TypeDict>(region: K, station?: string): Promise<(TypeDict[K])[]> {
    return axios.get(DataUrl[region])
        .then(res => {
            switch (region) {
                case "臺北市":
                    if (station?.length) {
                        return Object.entries(res.data.retVal).filter((data: [string, TypeDict[K]]) => {
                            if (data[1].sna.includes(station)) {
                                return true
                            }
                            return false
                        }).map((data: [string, TypeDict[K]]) => data[1])

                    }
                    else {
                        return Object.entries(res.data.retVal).map((data: [string, TypeDict[K]]) => data[1])
                    }
                case "臺中市":
                case "桃園市":
                case "高雄市":
                    if (station?.length) {
                        const data: (TypeDict[K])[] = region === "桃園市" ? res.data.result.records : (region === "高雄市" ? res.data.data.retVal : res.data.retVal)
                        return data.filter(d => d.sna.includes(station))
                    }
                    else {
                        return region === "桃園市" ? res.data.result.records : res.data.data.retVal
                    }
            }
        })
}

