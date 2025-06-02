import { Injectable, NotFoundException } from '@nestjs/common';

import { v4 as uuid } from 'uuid';
import { IBook } from './interfaces';
import { find } from 'rxjs';

@Injectable()
export class BookService {
  private books: IBook[] = [];

  getAll() {
    return {
      message: 'Success',
      data: this.books,
    };
  }

  get(id: string) {
    const findBook = this.books.find((book) => book.id === id);
    if (findBook) {
      return {
        message: 'success',
        data: findBook,
      };
    }
    throw new NotFoundException('book is not found by this id');
  }

  create(book: IBook) {
    book.id = uuid();
    this.books.push(book);

    return { message: 'returned successfully' };
  }

  update(id: string, partialBook: Partial<IBook>) {
    const findBook = this.books.find((book) => book.id === id);

    if (!findBook) throw new NotFoundException('book is not found by this id');

    this.books.map((book) => {
      if (book.id === id) {
        return {
          ...book,
          ...partialBook,
        };
      } else return book;
    });

    return {
      message: 'Successfully updated',
    };
  }

  delete(id: string) {
    const findBook = this.books.find((book) => book.id === id);

    if (!findBook) throw new NotFoundException('book is not found by this id');

    this.books.filter((book) => book.id !== id);

    return {
      message: 'Successfully deleted',
    };
  }
}
