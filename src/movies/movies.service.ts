import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Movie } from '../common/schemas/movies.schema';
//import { CreateMovieDto } from './dto/create-movie.dto';

@Injectable()
export class MoviesService {
    constructor(@InjectModel(Movie.name) private movieModel: Model<Movie>) { }

    async create(createMovieDto: any) {
        try {
            const createdMovie = await this.movieModel.create(createMovieDto);
            return { result: 'success', data:createdMovie };
        }
        catch (e: any) {
            return { "error": e.message, result: "failure" };
        }
    }

    async findAll(search) {
        try {
            const moviesList = await this.movieModel.find(search).exec();
            return { result: 'success', list:moviesList };
        }
        catch (e: any) {
            return { "error": e.message, result: "failure" };
        }
    }

    async findOne(id: string) {
        try {
            const foundMovie = await this.movieModel.findOne({ _id: id }).exec();
            return { result: 'success', ...foundMovie };
        }
        catch (e: any) {
            return { "error": e.message, result: "failure" };
        }
    }

    async delete(id: string) {
        try {
            const deletedMovie = await this.movieModel
                .findByIdAndDelete(id)
                .exec();
            return { result: 'success', data:deletedMovie };
        }
        catch (e: any) {
            return { "error": e.message, result: "failure" };
        }
    }
    async update(criteria,updateObj) {
        try {
            const updatedMovie = await this.movieModel.updateOne(criteria,updateObj);
            return { result: 'success', ...updatedMovie };
        }
        catch (e: any) {
            return { "error": e.message, result: "failure" };
        }
    }
}
