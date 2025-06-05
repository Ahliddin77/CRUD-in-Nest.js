import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { BookService } from './book.service';
import { IBook } from './interfaces';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  getAll() {
    return this.bookService.getAll();
  }

  @Get(':id')
  get(@Param('id', ParseIntPipe) id: number) {
    return this.bookService.get(id);
  }

  @Post()
  create(@Body() data: IBook) {
    return this.bookService.create(data);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: Partial<IBook>) {
    return this.bookService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.bookService.delete(id);
  }
}
