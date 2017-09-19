export let counter: {
    classes: { [key: string]: number },
    properties: { [key: string]: { get: number, set: number } }
} = {
        classes: {},
        properties: {}
    };

export function countClass(...paramNames: string[]) {

    return function (constructor) {
        let newConstructor: any = function (...args) {
            let name = constructor.name;
            console.log(`${name} constructor called`);
            args.forEach((item, index) => {
                let paramName = paramNames[index] || `#${index}`;
                console.log(`${paramName}: ${item}`)
            });

            counter.classes[name] ? counter.classes[name]++ : counter.classes[name] = 1;

            return new constructor(...args);
        }

        newConstructor.prototype = constructor.prototype;

        return newConstructor;
    };
}

export function countProperty(countGets = true, countSets = true) {
    return function (prototype, propName) {
        let property = prototype[propName];
        let fullPropName = `${prototype.constructor.name}.${propName}`;

        var getter = function () {
            if (countGets) {
                console.log(`Getting ${fullPropName} value of ${property}`);
                if (!counter.properties[fullPropName])
                    counter.properties[fullPropName] = { get: 0, set: 0 };
                counter.properties[fullPropName].get++;
            }
            return property;
        };
        var setter = function (newValue) {
            if (countSets) {
                console.log(`Setting ${fullPropName} value of ${newValue}`);
                if (!counter.properties[fullPropName])
                    counter.properties[fullPropName] = { get: 0, set: 0 };
                counter.properties[fullPropName].set++;
            }
            property = newValue;
        };

        if (delete prototype[propName]) {
            Object.defineProperty(prototype, propName, {
                get: getter,
                set: setter,
                enumerable: true,
                configurable: true
            });
        }
    }
}