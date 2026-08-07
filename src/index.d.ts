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
export default function <K extends keyof TypeDict>(region: K, station?: string, score?: number): Promise<TypeDict[K][]>;
