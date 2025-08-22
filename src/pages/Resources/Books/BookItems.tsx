export type BookItem = {
    id: number;
    title: string;
    writer: string;
    publisher: string;
    bookImage: string;
}

export const bookItems: BookItem[] = [
    {
        id: 0,
        title: 'JavaScript: The Good Parts',
        writer: 'Douglas Crockford',
        publisher: 'O\'Reilly Media',
        bookImage: 'https://m.media-amazon.com/images/I/7185IMvz88L._SY385_.jpg'
    },
    {
        id: 1,
        title: 'Clean Code',
        writer: 'Robert C. Martin',
        publisher: 'Prentice Hall',
        bookImage: 'https://m.media-amazon.com/images/I/41bOkXnNBjL._SY445_SX342_.jpg'
    },
    {
        id: 2,
        title: 'Sapiens: A Brief History of Humankind',
        writer: 'Yuval Noah Harari',
        publisher: 'Harper',
        bookImage: 'https://m.media-amazon.com/images/I/41yu2qXhXXL._SY445_SX342_.jpg'
    },
    {
        id: 3,
        title: 'Atomic Habits',
        writer: 'James Clear',
        publisher: 'Avery',
        bookImage: 'https://m.media-amazon.com/images/I/419aJfhczCL._SY445_SX342_.jpg'
    },
    {
        id: 4,
        title: 'The Pragmatic Programmer',
        writer: 'Andrew Hunt & David Thomas',
        publisher: 'Addison-Wesley',
        bookImage: 'https://m.media-amazon.com/images/I/71f1jieYHNL._SY385_.jpg'
    }
];