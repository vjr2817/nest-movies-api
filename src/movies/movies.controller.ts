import { Controller, Delete, Put, Get, Post, Body, Param, Query,UseGuards } from '@nestjs/common';
import { RolesGuard } from '../common/guards/role.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { Role } from '../common/enums/role.enum';
import { MoviesService } from './movies.service';


@UseGuards(RolesGuard)
@Controller('movies')
export class MoviesController {
    constructor(private readonly movieService: MoviesService) { }

    @Get()
    async findAll() {
        const result = await this.movieService.
            findAll({});
        return result
    }
    @Post()
    @Roles(Role.Admin)
    async create(@Body() reqBody: any) {
        const result = await this.movieService.create(reqBody);
        return result

    }
    @Put(':id')
    @Roles(Role.Admin)
    async update(@Body() reqBody: any, @Param('id') id: string) {
        const result = await this.movieService.update({ _id: id }, reqBody);
        return result

    }
    @Get('/search')
    async search(@Query() queryObj: any) {
        if(!queryObj.query){queryObj.query = ""};
        const result = await this.movieService.
            findAll({
                $or: [
                    {
                        title: { $regex: queryObj.query, $options: 'i' }
                    },
                    {
                        genre: { $regex: queryObj.query, $options: 'i' }
                    }]
            });
        return result
    }

    @Delete(':id')
    @Roles(Role.Admin)
    async delete(@Param('id') id: string) {
        const result = await this.movieService.delete(id);
        return result
    }

}