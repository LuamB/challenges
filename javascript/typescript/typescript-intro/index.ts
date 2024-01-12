// type annotation
let str: string = 'abc'
let checked: boolean = true
let rating: number = 34 
// should not be used
let someVal: any  = 'x'

// typing functions
function sum(a: number, b: number): number{
	// this would be the return value 'void'
	console.log(a + b);
	return a + b
}

function show(id: string | number) {
	console.log(id);
}

show(4)
show('5')

// str = 23
sum(2, 4)
console.log(str.toUpperCase())


// objects
// interface - can only be used for objects
// interface User {
// 	name: string
// 	// age is optional now
// 	age?: number
// }
// type alias
type User = {
	name: string
} 
let user: User = {
	// age: 73,
	name: 'Rick',
}
// type assertions
let user1: User = {} as User
// this assertion does not work
// const message = 34 as string

function check(user: 'Rick' | 'Morty') {
	// 
} 
type Maybe<T> = T | null | undefined 
// utility helper
interface Person {
	id: string,
	name: string,
	phone: Maybe<number> 
}
/*
{
	id: 'x45',
	name: 'sven',
	phone: null, undefined, someValue
}
*/