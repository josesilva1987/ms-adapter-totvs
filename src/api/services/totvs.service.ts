import ApiRestTotvs from "src/utils/apiRest.totvs";
import { URLSearchParams } from "url";
import { ColigadaInterface } from "../common/interfaces/totvs.interface";

export class TotvsService {
    async getColigadaInTotvs(): Promise<ColigadaInterface[]> {
        const result = await ApiRestTotvs.get('GlbColigadaDataBR');
        return result.data.data;
    }

    async getColigadaInTotvsById(coligada: number): Promise<ColigadaInterface> {
        const filter = encodeURIComponent(`["CODCOLIGADA=:codcoligada","${coligada}"]`);

        const result = await ApiRestTotvs.get(`GlbColigadaDataBR?filter=${filter}`);
        return result.data.data;
    }
}