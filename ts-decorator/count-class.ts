export let counter: {
    [key: string]: number
} = {};

export function countClass(constructor) {
    let newConstructor : any = function(...args){
        let name = constructor.name;
        console.log(`${name} constructor called`);
        args.forEach((item, index)=> console.log(`Parameter #${index}: ${item}`));

        counter[name] ? counter[name]++ : counter[name]=1;

        return new constructor(...args);
    }

    newConstructor.prototype = constructor.prototype;

    return newConstructor;
}