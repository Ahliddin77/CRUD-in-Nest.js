import { Module } from '@nestjs/common';
import { BookController } from './books/book.controller';
import { BookService } from './books/book.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [BookController],
  providers: [BookService, PrismaService],
})
export class AppModule {}
