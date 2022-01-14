const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Do Something Async'), 3000)
            : reject(new Error('Test Error'))
    });
}

const doSomething = async () => {
    const something = await doSomethingAsync();
    console.log(something);
}

console.log('Before');
doSomething();
console.log('After');


// Output: Se hace la función asincrona y esperamos a que resuelva la promesa
// Before
// After
// Do Something Async


// 2. Captura de errores
const anotherFunction = async () => {
    try {
        const something = await doSomethingAsync();
        console.log(something);
    } catch (error) {
        console.error(error);
    }
}

console.log('Before 1');
anotherFunction();
console.log('After 1');
