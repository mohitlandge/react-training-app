function* demo() {
    console.log('Executing 11111')
    yield 10 //return value at the 1 st break point

    console.log('Executing 2222')


    yield 20


    console.log('Executing 3333')


    yield 30

    console.log('Executing 4444')
    
}

//yield keyword means break point for generator function

var iterator = demo();

iterator.next();
iterator.next();