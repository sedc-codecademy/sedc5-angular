let bookz: Book[] = [
    <SerialBook>{
        title: "The Collapsing Empire",
        author: "John Scalzi",
        series: "The Interdepency",
        year: 2017
    },
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
];

interface Book {
    title: string;
    author: string;
    year: number;
}

interface SerialBook extends Book {
    series: string;    
}

class RealBook implements Book {
    public year: number;
    constructor(public title: string, public author: string){}
}

let printBook = (book: Book) => {
    console.log(`${book.title} by ${book.author}`);
}

bookz
    .filter(book => book.author === "Robert Heinlein")
    .forEach(book => printBook(book));