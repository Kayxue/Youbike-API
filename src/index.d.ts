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
export interface TaipeiData extends Omit<DataBase<string>, "tot" | "sbi" | "lat" | "lng" | "bemp"> {
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
export interface TypeDict {
    臺北市: TaipeiData;
    桃園市: TaoYuanData;
    臺中市: TaiChungData;
}
export default function <K extends keyof TypeDict>(region: K, station?: string): Promise<TypeDict[K][]>;
