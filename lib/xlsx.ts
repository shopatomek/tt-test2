import xlsx, { IJsonSheet } from "json-as-xlsx";
import { data } from "@/lib/data";
export function downloadToExcel () {
    
    let columns: IJsonSheet[] = [
        {
            sheet: "Database",
            columns:[
                    {label: "tiktokId", value: "tiktokId"},
                    {label: "diggCount", value: "diggCount"},
                    {label: "playCount", value: "playCount"},
                    {label: "uniqueId", value: "uniqueId"},
                    {label: "nickname", value: "nickname"},
                    {label: "followerCount", value: "followerCount"},
                    {label: "heartCount", value: "heartCount"},
                    {label: "videoCount", value: "videoCount"},
                    {label: "itdescription", value: "itdescription"},   
                    {label: "tags", value: "tags"},                 
            ],
            content: data,
        },
    ]
    let settings = {
        fileName: "Database",
    };

    xlsx(columns, settings)
}