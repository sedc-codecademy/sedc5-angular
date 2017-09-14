interface Novel {
    title: string;
    author: string;
}

interface SerialNovel extends Novel {
    series: string;
}

class RealNovel implements Novel {
    constructor(public title: string, public author: string){}
}

interface Anthology {
    title: string,
    editor: string;
    stories: string[];
}

type LibraryBook = Novel | Anthology;

var x: Novel = new RealNovel("", "");
var y: Novel = {
    author: "",
    title: ""
}

enum Sides {
    East, 
    West,
    South,
    North
}

type SidesString = "east" | "west" | "north" | "south";

interface Friend {
    address: string;
    married: boolean;
}

var friends: { [key: string]: Friend } = {
    "joe": {
        address: "string",
        married: false
    },
    "jack": {
        address: "string",
        married: true
    }
}
