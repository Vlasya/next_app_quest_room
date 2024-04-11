import { BASE_ENDPOINT, ORDERS } from "@/constants";
import { FormType } from "@/types";

export const sendForm= async(data:FormType)=>{
    const payload: RequestInit = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    };

    try {
        const res = await fetch(`${BASE_ENDPOINT}${ORDERS}`, payload);
        const resJson = await res.json();
      
        if (resJson === 201) {
            return 201;
        }
        throw new Error(`Error`);
    } catch (error) {
        return new Error(`Error: ${error}`);
    }
}
