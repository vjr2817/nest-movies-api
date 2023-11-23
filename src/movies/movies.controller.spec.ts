import { Test, TestingModule } from '@nestjs/testing';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

describe('MovieController', () => {
  let moviesController: MoviesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MoviesController],
      providers: [MoviesService],
    }).compile();

    moviesController = app.get<MoviesController>(MoviesController);
  });

  describe('movies list', () => {
    it('fetch apis', () => {
      expect(moviesController.findAll()).toMatchObject({result:'success'});
    });
  });
});
