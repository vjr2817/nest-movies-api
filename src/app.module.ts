import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './movies/movies.module'


@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://dbJayanth:PBy8vK8000gPeTl8@cluster0.a3bxnd5.mongodb.net/integration?retryWrites=true&w=majority'),
    MoviesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
