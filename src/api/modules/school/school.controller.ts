import { Controller, Get, Param } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ColigadaDto } from "src/api/common/dto/coligada.dto";
import { ColigadaInterface } from "src/api/common/interfaces/totvs.interface";
import { SchoolService } from "./school.service";

@ApiTags('Schools')
@Controller('school')
export class SchoolController {
    constructor(private schoolService: SchoolService) { }

    @Get()
    @ApiOperation({ summary: 'Get all Schools' })
    @ApiResponse({ status: 200, description: 'Task executed with success' })
    @ApiResponse({ status: 400, description: 'Invalid Parameters' })
    async getSchools(): Promise<ColigadaInterface[]>  {
        return this.schoolService.getSchool();
    }

    @Get(':coligada')
    @ApiOperation({ summary: 'Get a School By Colegy ID' })
    @ApiResponse({ status: 200, description: 'Task executed with success' })
    @ApiResponse({ status: 400, description: 'Invalid Parameters' })
    async getSchoolById(@Param() params: ColigadaDto): Promise<ColigadaInterface>  {
        return this.schoolService.getSchoolById(params.coligada);
    }
}