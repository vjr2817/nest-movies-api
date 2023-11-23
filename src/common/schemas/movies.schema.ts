import { Prop,Schema,SchemaFactory} from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';


export type MovieDocument = HydratedDocument<Movie>;

@Schema()
export class Movie{
    
    @Prop({required:true})
    title:string;

    @Prop({default:0})
    rating:Number;

    @Prop({required:true})
    streamLink:string;

    @Prop()
    genre:string;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);