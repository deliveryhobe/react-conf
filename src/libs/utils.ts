import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(customParseFormat);
dayjs.extend(utc);
dayjs.extend(timezone);

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}


export class Utils {
    public static formattedDate(date: any, format: string) {
        const _date = dayjs(date);
        return _date.format(format);
    }

    public static getDayName(date: any) {
        const _date = dayjs(date);
        return _date.format('dddd');
    }
}



