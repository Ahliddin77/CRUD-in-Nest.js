import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
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

  @Get('/:id')
  get(@Param() params: { id: string }) {
    const id = params.id;
    return this.bookService.get(id);
  }

  @Post()
  create(@Body() body: IBook) {
    return this.bookService.create(body);
  }

  @Patch('/:id')
  update(@Body() body: Partial<IBook>, @Param() params: { id: string }) {
    return this.bookService.update(params.id, body);
  }

  @Delete('/:id')
  delete(@Param() params: { id: string }) {
    return this.bookService.delete(params.id);
  }
}
