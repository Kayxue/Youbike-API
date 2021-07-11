export interface TaipeiData {
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
    act: string;
}
export interface TaoYuanData {
    _id: number;
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
    act: string;
}
export interface TaiChungData {
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
    act: string;
}
export interface KaoHsiungData {
    scity: string;
    scityen: string;
    sna: string;
    sarea: string;
    ar: string;
    snaen: string;
    sareaen: string;
    aren: string;
    sno: string;
    tot: string;
    sbi: string;
    mday: string;
    lat: string;
    lng: string;
    bemp: string;
    act: number;
}
export interface TypeDict {
    "臺北市": TaipeiData;
    "桃園市": TaoYuanData;
    "臺中市": TaiChungData;
    "高雄市": KaoHsiungData;
}
export default function <K extends keyof TypeDict>(region: K, station?: string): Promise<(TypeDict[K])[]>;
