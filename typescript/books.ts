let collapsingEmpire = {
    title: "The Collapsing Empire",
    author: "John Scalzi",
    series: "The Interdepency",
    year: 2017
}

interface Book {
    title: string;
    author: string;
    series?: string;
    year: number;
}

let books: Book[] = [
    collapsingEmpire, 
    {
        title: "Rocket ship Galileo",
        author: "Robert Heinlein",
        series: "Juveniles",
        year: 1948
    },
    {
        title: "The rolling Stones",
        author: "Robert Heinlein",
        series: "Juveniles",
        year: 1953
    },
    {
        title: "The Moon is a harsh mistress",
        author: "Robert Heinlein",
        year: 1964
    }
]

let printBook = (book: Book) => console.log(`${book.title} by ${book.author}`);

books
    .filter(book => book.author === "Robert Heinlein")
    .forEach(printBook);
console.log("---------")

books
    .filter(book => !book.series)
    .forEach(printBook);
console.log("---------")
books
    .filter(book => book.series)
    .forEach(book => console.log(book.series));
console.log("---------")


