import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongModule } from './song/song.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgres://postgres:postgres@localhost:5432/test_dev',
      synchronize: true,
      entities: [__dirname + '/**/*.entity.{ts,js}'],
      
    }),
    SongModule,  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
