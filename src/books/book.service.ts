import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { IBook } from './interfaces';

@Injectable()
export class BookService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    return await this.prisma.books.findMany();
  }

  async get(id: number) {
    const book = await this.prisma.books.findUnique({ where: { id } });
    if (!book) throw new NotFoundException('Book not found');
    return book;
  }

  async create(data: IBook) {
    const { id, ...bookData } = data;
    return await this.prisma.books.create({ data: bookData });
  }

  async update(id: number, data: Partial<IBook>) {
    await this.get(id);
    return await this.prisma.books.update({
      where: { id },
      data,
    });
  }

  async delete(id: number) {
    await this.get(id);
    return await this.prisma.books.delete({ where: { id } });
  }
}
