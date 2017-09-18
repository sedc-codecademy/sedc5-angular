interface Friend {
    name: string;
    address: {
        city: string;
        street: string;
    }
    isMarried: boolean;
}

type Friends = { [key:string] : Friend }

let friends: Friends = {
    "joe": {
        name: "Joe",
        address: {
            city: "Skopje",
            street: "Banditenstrasse"
        },
        isMarried: false
    },
    "blazo": {
        name: "Blazo",
        address: {
            city: "Skopje",
            street: "Banditenstrasse"
        },
        isMarried: true
    }
}

friends["joex"] = {
    name : "Joex",
    address: undefined,
    isMarried: false
};
