"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const DataUrl = {
    臺北市: "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json",
    桃園市: "https://data.tycg.gov.tw/api/v1/rest/datastore/a1b4714b-3b75-4ff8-a8f2-cc377e4eaa0f?format=json",
    臺中市: "https://datacenter.taichung.gov.tw/swagger/OpenData/86dfad5c-540c-4479-bb7d-d7439d34eeb1",
    高雄市: "https://api.kcg.gov.tw/api/service/Get/b4dd9c40-9027-4125-8666-06bef1756092",
};
function default_1(region, station) {
    return axios_1.default.get(DataUrl[region]).then((res) => {
        switch (region) {
            case "臺北市":
                if (station?.length) {
                    return res.data.filter((e) => e.sna.includes(station));
                }
                else {
                    return res.data;
                }
            case "臺中市":
            case "桃園市":
                // case "高雄市":
                if (station?.length) {
                    // const data: (TypeDict[K])[] = region === "桃園市" ? res.data.result.records : (region === "高雄市" ? res.data.data.retVal : res.data.retVal)
                    const data = region === "桃園市" ? res.data.result.records : res.data.retVal;
                    return data.filter(d => d.sna.includes(station));
                }
                else {
                    return region === "桃園市" ? res.data.result.records : res.data.retVal;
                }
            default:
                throw new Error("找不到指定縣市");
        }
    });
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9UeXBlU2NyaXB0L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0RBQTBCO0FBRTFCLE1BQU0sT0FBTyxHQUFHO0lBQ1osR0FBRyxFQUFFLGlGQUFpRjtJQUN0RixHQUFHLEVBQUUsaUdBQWlHO0lBQ3RHLEdBQUcsRUFBRSwwRkFBMEY7SUFDL0YsR0FBRyxFQUFFLDZFQUE2RTtDQUNyRixDQUFDO0FBcURGLG1CQUNJLE1BQVMsRUFDVCxPQUFnQjtJQUVoQixPQUFPLGVBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7UUFDM0MsUUFBUSxNQUFNLEVBQUUsQ0FBQztZQUNiLEtBQUssS0FBSztnQkFDTixJQUFJLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQztvQkFDbEIsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtnQkFDdEUsQ0FBQztxQkFDSSxDQUFDO29CQUNGLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQTtnQkFDbkIsQ0FBQztZQUNMLEtBQUssS0FBSyxDQUFDO1lBQ1gsS0FBSyxLQUFLO2dCQUNWLGNBQWM7Z0JBQ1YsSUFBSSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUM7b0JBQ2xCLHlJQUF5STtvQkFDekksTUFBTSxJQUFJLEdBQW9CLE1BQU0sS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUE7b0JBQzFGLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7Z0JBQ3BELENBQUM7cUJBQ0ksQ0FBQztvQkFDRixPQUFPLE1BQU0sS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUE7Z0JBQ3ZFLENBQUM7WUFDTDtnQkFDSSxNQUFNLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ2xDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUE1QkQsNEJBNEJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgRGF0YVVybCA9IHtcclxuICAgIOiHuuWMl+W4gjogXCJodHRwczovL3RjZ2J1c2ZzLmJsb2IuY29yZS53aW5kb3dzLm5ldC9kb3RhcHAveW91YmlrZS92Mi95b3ViaWtlX2ltbWVkaWF0ZS5qc29uXCIsXHJcbiAgICDmoYPlnJLluII6IFwiaHR0cHM6Ly9kYXRhLnR5Y2cuZ292LnR3L2FwaS92MS9yZXN0L2RhdGFzdG9yZS9hMWI0NzE0Yi0zYjc1LTRmZjgtYThmMi1jYzM3N2U0ZWFhMGY/Zm9ybWF0PWpzb25cIixcclxuICAgIOiHuuS4reW4gjogXCJodHRwczovL2RhdGFjZW50ZXIudGFpY2h1bmcuZ292LnR3L3N3YWdnZXIvT3BlbkRhdGEvODZkZmFkNWMtNTQwYy00NDc5LWJiN2QtZDc0MzlkMzRlZWIxXCIsXHJcbiAgICDpq5jpm4TluII6IFwiaHR0cHM6Ly9hcGkua2NnLmdvdi50dy9hcGkvc2VydmljZS9HZXQvYjRkZDljNDAtOTAyNy00MTI1LTg2NjYtMDZiZWYxNzU2MDkyXCIsXHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERhdGFCYXNlPEs+IHtcclxuICAgIHNubzogc3RyaW5nO1xyXG4gICAgc25hOiBzdHJpbmc7XHJcbiAgICB0b3Q6IHN0cmluZztcclxuICAgIHNiaTogc3RyaW5nO1xyXG4gICAgc2FyZWE6IHN0cmluZztcclxuICAgIG1kYXk6IHN0cmluZztcclxuICAgIGxhdDogc3RyaW5nO1xyXG4gICAgbG5nOiBzdHJpbmc7XHJcbiAgICBhcjogc3RyaW5nO1xyXG4gICAgc2FyZWFlbjogc3RyaW5nO1xyXG4gICAgc25hZW46IHN0cmluZztcclxuICAgIGFyZW46IHN0cmluZztcclxuICAgIGJlbXA6IHN0cmluZztcclxuICAgIGFjdDogSztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUYWlwZWlEYXRhXHJcbiAgICBleHRlbmRzIE9taXQ8RGF0YUJhc2U8c3RyaW5nPiwgXCJ0b3RcIiB8IFwic2JpXCIgfCBcImxhdFwiIHwgXCJsbmdcIiB8IFwiYmVtcFwiPiB7XHJcbiAgICB0b3Q6IG51bWJlcjtcclxuICAgIHNiaTogbnVtYmVyO1xyXG4gICAgbGF0OiBudW1iZXI7XHJcbiAgICBsbmc6IG51bWJlcjtcclxuICAgIGJlbXA6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUYW9ZdWFuRGF0YSBleHRlbmRzIERhdGFCYXNlPHN0cmluZz4ge1xyXG4gICAgX2lkOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGFpQ2h1bmdEYXRhIGV4dGVuZHMgRGF0YUJhc2U8bnVtYmVyPiB7XHJcbiAgICBzY2l0eTogc3RyaW5nO1xyXG4gICAgc2NpdHllbjogc3RyaW5nO1xyXG4gICAgc2JpX2RldGFpbDoge1xyXG4gICAgICAgIHliMjogc3RyaW5nO1xyXG4gICAgICAgIGV5Yjogc3RyaW5nO1xyXG4gICAgfTtcclxufVxyXG5cclxuLy8gZXhwb3J0IGludGVyZmFjZSBLYW9Ic2l1bmdEYXRhIGV4dGVuZHMgRGF0YUJhc2U8bnVtYmVyPiB7XHJcbi8vICAgICBzY2l0eTogc3RyaW5nO1xyXG4vLyAgICAgc2NpdHllbjogc3RyaW5nO1xyXG4vLyB9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFR5cGVEaWN0IHtcclxuICAgIOiHuuWMl+W4gjogVGFpcGVpRGF0YTtcclxuICAgIOahg+WckuW4gjogVGFvWXVhbkRhdGE7XHJcbiAgICDoh7rkuK3luII6IFRhaUNodW5nRGF0YTtcclxuICAgIC8vIOmrmOmbhOW4gjogS2FvSHNpdW5nRGF0YTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gPEsgZXh0ZW5kcyBrZXlvZiBUeXBlRGljdD4oXHJcbiAgICByZWdpb246IEssXHJcbiAgICBzdGF0aW9uPzogc3RyaW5nXHJcbik6IFByb21pc2U8VHlwZURpY3RbS11bXT4ge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChEYXRhVXJsW3JlZ2lvbl0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAocmVnaW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCLoh7rljJfluIJcIjpcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0aW9uPy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmRhdGEuZmlsdGVyKChlOlR5cGVEaWN0W0tdKSA9PiBlLnNuYS5pbmNsdWRlcyhzdGF0aW9uKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuZGF0YVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwi6Ie65Lit5biCXCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCLmoYPlnJLluIJcIjpcclxuICAgICAgICAgICAgLy8gY2FzZSBcIumrmOmbhOW4glwiOlxyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRpb24/Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IGRhdGE6IChUeXBlRGljdFtLXSlbXSA9IHJlZ2lvbiA9PT0gXCLmoYPlnJLluIJcIiA/IHJlcy5kYXRhLnJlc3VsdC5yZWNvcmRzIDogKHJlZ2lvbiA9PT0gXCLpq5jpm4TluIJcIiA/IHJlcy5kYXRhLmRhdGEucmV0VmFsIDogcmVzLmRhdGEucmV0VmFsKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGE6IChUeXBlRGljdFtLXSlbXSA9IHJlZ2lvbiA9PT0gXCLmoYPlnJLluIJcIiA/IHJlcy5kYXRhLnJlc3VsdC5yZWNvcmRzIDogcmVzLmRhdGEucmV0VmFsXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEuZmlsdGVyKGQgPT4gZC5zbmEuaW5jbHVkZXMoc3RhdGlvbikpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVnaW9uID09PSBcIuahg+WckuW4glwiID8gcmVzLmRhdGEucmVzdWx0LnJlY29yZHMgOiByZXMuZGF0YS5yZXRWYWxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIuaJvuS4jeWIsOaMh+Wumue4o+W4glwiKVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbiJdfQ==