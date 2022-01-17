import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { ColigadaInterface } from "src/api/common/interfaces/totvs.interface";
import { TotvsService } from "src/api/services/totvs.service";

@Injectable()
export class SchoolService {
    constructor(
        private _totvsService: TotvsService
    ){}

    async getSchool(): Promise<ColigadaInterface[]> {
        try {
            const result = this._totvsService.getColigadaInTotvs();
            return result;
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }

    async getSchoolById(coligada: number): Promise<ColigadaInterface> {
        try {
            const result = this._totvsService.getColigadaInTotvsById(coligada);
            return result;
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }
}