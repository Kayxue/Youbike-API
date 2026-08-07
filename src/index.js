"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const axios_1 = __importDefault(require("axios"));
const fuse_js_1 = __importDefault(require("fuse.js"));
const DataUrl = {
    臺北市: "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json",
    新北市: "https://data.ntpc.gov.tw/api/datasets/010e5b15-3823-4b20-b401-b1cf000550c5/json?page=0&size=10000",
    桃園市: "https://opendata.tycg.gov.tw/api/v1/dataset.api_access?rid=08274d61-edbe-419d-8fcc-7a643831283d&format=json",
    臺中市: "https://newdatacenter.taichung.gov.tw/api/v1/no-auth/resource.download?rid=9468c0d0-e1ed-4ecc-a86f-ab5a9fd590ff",
    高雄市: "https://data.kcg.gov.tw/Json/Get/b4dd9c40-9027-4125-8666-06bef1756092",
};
function default_1(region, station, score = 0.4) {
    return axios_1.default.get(DataUrl[region]).then((res) => {
        switch (region) {
            case "臺北市":
            case "新北市":
            case "臺中市":
                return station?.length
                    ? new fuse_js_1.default(res.data, {
                        keys: ["sno", "sna", "sarea", "ar", "sareaen", "snaen", "aren"],
                        threshold: score,
                        ignoreLocation: true,
                    })
                        .search(station)
                        .map((e) => e.item)
                    : res.data;
            case "桃園市":
            case "高雄市":
                const data = region === "桃園市"
                    ? res.data.map((e) => {
                        return {
                            ...e,
                            sbi_detail: JSON.parse(e.sbi_detail),
                        };
                    })
                    : res.data.Data.retVal;
                return station?.length
                    ? new fuse_js_1.default(data, {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9UeXBlU2NyaXB0L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGtEQUEwQjtBQUMxQixzREFBMkI7QUFFM0IsTUFBTSxPQUFPLEdBQUc7SUFDZCxHQUFHLEVBQ0QsaUZBQWlGO0lBQ25GLEdBQUcsRUFDRCxtR0FBbUc7SUFDckcsR0FBRyxFQUNELDZHQUE2RztJQUMvRyxHQUFHLEVBQ0QsaUhBQWlIO0lBQ25ILEdBQUcsRUFDRCx1RUFBdUU7Q0FDMUUsQ0FBQztBQXFGRixtQkFDRSxNQUFTLEVBQ1QsT0FBZ0IsRUFDaEIsS0FBSyxHQUFXLEdBQUc7SUFFbkIsT0FBTyxlQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1FBQzdDLFFBQVEsTUFBTSxFQUFFLENBQUM7WUFDZixLQUFLLEtBQUssQ0FBQztZQUNYLEtBQUssS0FBSyxDQUFDO1lBQ1gsS0FBSyxLQUFLO2dCQUNSLE9BQU8sT0FBTyxFQUFFLE1BQU07b0JBQ3BCLENBQUMsQ0FBQyxJQUFJLGlCQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRTt3QkFDakIsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDO3dCQUMvRCxTQUFTLEVBQUUsS0FBSzt3QkFDaEIsY0FBYyxFQUFFLElBQUk7cUJBQ3JCLENBQUM7eUJBQ0MsTUFBTSxDQUFDLE9BQU8sQ0FBQzt5QkFDZixHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ3ZCLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO1lBRWYsS0FBSyxLQUFLLENBQUM7WUFDWCxLQUFLLEtBQUs7Z0JBQ1IsTUFBTSxJQUFJLEdBQ1IsTUFBTSxLQUFLLEtBQUs7b0JBQ2QsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7d0JBQ2pCLE9BQU87NEJBQ0wsR0FBRyxDQUFDOzRCQUNKLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7eUJBQ3JDLENBQUM7b0JBQ0osQ0FBQyxDQUFDO29CQUNKLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQzNCLE9BQU8sT0FBTyxFQUFFLE1BQU07b0JBQ3BCLENBQUMsQ0FBQyxJQUFJLGlCQUFJLENBQUMsSUFBSSxFQUFFO3dCQUNiLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQzt3QkFDL0QsU0FBUyxFQUFFLEtBQUs7d0JBQ2hCLGNBQWMsRUFBRSxJQUFJO3FCQUNyQixDQUFDO3lCQUNDLE1BQU0sQ0FBQyxPQUFPLENBQUM7eUJBQ2YsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUN2QixDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ1g7Z0JBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMvQixDQUFDO0lBQ0gsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IEZ1c2UgZnJvbSBcImZ1c2UuanNcIjtcblxuY29uc3QgRGF0YVVybCA9IHtcbiAg6Ie65YyX5biCOlxuICAgIFwiaHR0cHM6Ly90Y2didXNmcy5ibG9iLmNvcmUud2luZG93cy5uZXQvZG90YXBwL3lvdWJpa2UvdjIveW91YmlrZV9pbW1lZGlhdGUuanNvblwiLFxuICDmlrDljJfluII6XG4gICAgXCJodHRwczovL2RhdGEubnRwYy5nb3YudHcvYXBpL2RhdGFzZXRzLzAxMGU1YjE1LTM4MjMtNGIyMC1iNDAxLWIxY2YwMDA1NTBjNS9qc29uP3BhZ2U9MCZzaXplPTEwMDAwXCIsXG4gIOahg+WckuW4gjpcbiAgICBcImh0dHBzOi8vb3BlbmRhdGEudHljZy5nb3YudHcvYXBpL3YxL2RhdGFzZXQuYXBpX2FjY2Vzcz9yaWQ9MDgyNzRkNjEtZWRiZS00MTlkLThmY2MtN2E2NDM4MzEyODNkJmZvcm1hdD1qc29uXCIsXG4gIOiHuuS4reW4gjpcbiAgICBcImh0dHBzOi8vbmV3ZGF0YWNlbnRlci50YWljaHVuZy5nb3YudHcvYXBpL3YxL25vLWF1dGgvcmVzb3VyY2UuZG93bmxvYWQ/cmlkPTk0NjhjMGQwLWUxZWQtNGVjYy1hODZmLWFiNWE5ZmQ1OTBmZlwiLFxuICDpq5jpm4TluII6XG4gICAgXCJodHRwczovL2RhdGEua2NnLmdvdi50dy9Kc29uL0dldC9iNGRkOWM0MC05MDI3LTQxMjUtODY2Ni0wNmJlZjE3NTYwOTJcIixcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YUJhc2U8Sz4ge1xuICBhcjogc3RyaW5nO1xuICBhcmVuOiBzdHJpbmc7XG4gIG1kYXk6IHN0cmluZztcbiAgc2FyZWE6IHN0cmluZztcbiAgc2FyZWFlbjogc3RyaW5nO1xuICBzbmE6IHN0cmluZztcbiAgc25hZW46IHN0cmluZztcbiAgc25vOiBzdHJpbmc7XG4gIGFjdDogSztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUYWlwZWlEYXRhIGV4dGVuZHMgRGF0YUJhc2U8U3RyaW5nPiB7XG4gIHNyY1VwZGF0ZVRpbWU6IHN0cmluZztcbiAgdXBkYXRlVGltZTogc3RyaW5nO1xuICBpbmZvVGltZTogc3RyaW5nO1xuICBpbmZvRGF0ZTogc3RyaW5nO1xuICBRdWFudGl0eTogbnVtYmVyO1xuICBhdmFpbGFibGVfcmVudF9iaWtlczogbnVtYmVyO1xuICBsYXRpdHVkZTogbnVtYmVyO1xuICBsb25naXR1ZGU6IG51bWJlcjtcbiAgYXZhaWxhYmxlX3JldHVybl9iaWtlczogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5ld1RhaXBlaURhdGEgZXh0ZW5kcyBEYXRhQmFzZTxTdHJpbmc+IHtcbiAgc2NpdHk6IHN0cmluZztcbiAgc2NpdHllbjogc3RyaW5nO1xuICB0b3RfcXVhbnRpdHk6IHN0cmluZztcbiAgc2JpX3F1YW50aXR5OiBzdHJpbmc7XG4gIGxhdDogc3RyaW5nO1xuICBsbmc6IHN0cmluZztcbiAgYmVtcDogc3RyaW5nO1xuICB5YjJfcXVhbnRpdHk6IHN0cmluZztcbiAgZXliX3F1YW50aXR5OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFvWXVhbkRhdGEgZXh0ZW5kcyBEYXRhQmFzZTxudW1iZXI+IHtcbiAgc2NpdHk6IHN0cmluZztcbiAgc2NpdHllbjogc3RyaW5nO1xuICB0b3Q6IHN0cmluZztcbiAgc2JpOiBzdHJpbmc7XG4gIGxhdDogc3RyaW5nO1xuICBsbmc6IHN0cmluZztcbiAgYmVtcDogc3RyaW5nO1xuICBzYmlfZGV0YWlsOiB7XG4gICAgeWIyOiBzdHJpbmc7XG4gICAgZXliOiBzdHJpbmc7XG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFpQ2h1bmdEYXRhIGV4dGVuZHMgRGF0YUJhc2U8bnVtYmVyPiB7XG4gIHNjaXR5OiBzdHJpbmc7XG4gIHNjaXR5ZW46IHN0cmluZztcbiAgdG90OiBzdHJpbmc7XG4gIHNiaTogc3RyaW5nO1xuICBsYXQ6IHN0cmluZztcbiAgbG5nOiBzdHJpbmc7XG4gIGJlbXA6IHN0cmluZztcbiAgc2JpX2RldGFpbDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEthb0hzaXVuZ0RhdGEgZXh0ZW5kcyBEYXRhQmFzZTxudW1iZXI+IHtcbiAgc2NpdHk6IHN0cmluZztcbiAgc2NpdHllbjogc3RyaW5nO1xuICB0b3Q6IHN0cmluZztcbiAgc2JpOiBzdHJpbmc7XG4gIGxhdDogc3RyaW5nO1xuICBsbmc6IHN0cmluZztcbiAgYmVtcDogc3RyaW5nO1xuICBzYmlfZGV0YWlsOiB7XG4gICAgeWIyOiBzdHJpbmc7XG4gICAgZXliOiBzdHJpbmc7XG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHlwZURpY3Qge1xuICDoh7rljJfluII6IFRhaXBlaURhdGE7XG4gIOaWsOWMl+W4gjogTmV3VGFpcGVpRGF0YTtcbiAg5qGD5ZyS5biCOiBUYW9ZdWFuRGF0YTtcbiAg6Ie65Lit5biCOiBUYWlDaHVuZ0RhdGE7XG4gIOmrmOmbhOW4gjogS2FvSHNpdW5nRGF0YTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gPEsgZXh0ZW5kcyBrZXlvZiBUeXBlRGljdD4oXG4gIHJlZ2lvbjogSyxcbiAgc3RhdGlvbj86IHN0cmluZyxcbiAgc2NvcmU6IG51bWJlciA9IDAuNCxcbik6IFByb21pc2U8VHlwZURpY3RbS11bXT4ge1xuICByZXR1cm4gYXhpb3MuZ2V0KERhdGFVcmxbcmVnaW9uXSkudGhlbigocmVzKSA9PiB7XG4gICAgc3dpdGNoIChyZWdpb24pIHtcbiAgICAgIGNhc2UgXCLoh7rljJfluIJcIjpcbiAgICAgIGNhc2UgXCLmlrDljJfluIJcIjpcbiAgICAgIGNhc2UgXCLoh7rkuK3luIJcIjpcbiAgICAgICAgcmV0dXJuIHN0YXRpb24/Lmxlbmd0aFxuICAgICAgICAgID8gbmV3IEZ1c2UocmVzLmRhdGEsIHtcbiAgICAgICAgICAgICAga2V5czogW1wic25vXCIsIFwic25hXCIsIFwic2FyZWFcIiwgXCJhclwiLCBcInNhcmVhZW5cIiwgXCJzbmFlblwiLCBcImFyZW5cIl0sXG4gICAgICAgICAgICAgIHRocmVzaG9sZDogc2NvcmUsXG4gICAgICAgICAgICAgIGlnbm9yZUxvY2F0aW9uOiB0cnVlLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLnNlYXJjaChzdGF0aW9uKVxuICAgICAgICAgICAgICAubWFwKChlKSA9PiBlLml0ZW0pXG4gICAgICAgICAgOiByZXMuZGF0YTtcblxuICAgICAgY2FzZSBcIuahg+WckuW4glwiOlxuICAgICAgY2FzZSBcIumrmOmbhOW4glwiOlxuICAgICAgICBjb25zdCBkYXRhOiBUeXBlRGljdFtLXVtdID1cbiAgICAgICAgICByZWdpb24gPT09IFwi5qGD5ZyS5biCXCJcbiAgICAgICAgICAgID8gcmVzLmRhdGEubWFwKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgIC4uLmUsXG4gICAgICAgICAgICAgICAgICBzYmlfZGV0YWlsOiBKU09OLnBhcnNlKGUuc2JpX2RldGFpbCksXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogcmVzLmRhdGEuRGF0YS5yZXRWYWw7XG4gICAgICAgIHJldHVybiBzdGF0aW9uPy5sZW5ndGhcbiAgICAgICAgICA/IG5ldyBGdXNlKGRhdGEsIHtcbiAgICAgICAgICAgICAga2V5czogW1wic25vXCIsIFwic25hXCIsIFwic2FyZWFcIiwgXCJhclwiLCBcInNhcmVhZW5cIiwgXCJzbmFlblwiLCBcImFyZW5cIl0sXG4gICAgICAgICAgICAgIHRocmVzaG9sZDogc2NvcmUsXG4gICAgICAgICAgICAgIGlnbm9yZUxvY2F0aW9uOiB0cnVlLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLnNlYXJjaChzdGF0aW9uKVxuICAgICAgICAgICAgICAubWFwKChlKSA9PiBlLml0ZW0pXG4gICAgICAgICAgOiBkYXRhO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwi5om+5LiN5Yiw5oyH5a6a57ij5biCXCIpO1xuICAgIH1cbiAgfSk7XG59XG4iXX0=