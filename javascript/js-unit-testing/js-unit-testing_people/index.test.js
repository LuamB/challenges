import {
  getFirstNames,
  getFullNames,
  getNameAndAge,
  getPeopleByAge,
  getPeopleNamesOlderThan,
  getPeopleByLastName,
  findPersonById,
  isAnyoneOlderThan,
  getFullNamesSortedByAge,
} from "./index.js";

const people = [
  {
    id: 1,
    firstName: "Jane",
    lastName: "Doe",
    age: 21,
  },
  {
    id: 2,
    firstName: "John",
    lastName: "Doe",
    age: 18,
  },
  {
    id: 3,
    firstName: "Max",
    lastName: "Mustermann",
    age: 32,
  },
  {
    id: 4,
    firstName: "Erika",
    lastName: "Musterfrau",
    age: 38,
  },
  {
    id: 5,
    firstName: "Luke",
    lastName: "Skywalker",
    age: 23,
  },
];

test("getFirstNames() returns an array with the first names", () => {
  const result = getFirstNames(people);
  expect(result).toEqual(["Jane", "John", "Max", "Erika", "Luke"]);
});

test('getFullNames() returns an array with full names as strings, e.g. "Jane Doe"', () => {
  expect(getFullNames(people)).toEqual([
    "Jane Doe",
    "John Doe",
    "Max Mustermann",
    "Erika Musterfrau",
    "Luke Skywalker",
  ]);
});

test('getNameAndAge() returns an array of formatted strings like this: "Skywalker (23)"', () => {
  expect(getNameAndAge(people)).toEqual([
    "Jane (21)",
    "John (18)",
    "Max (32)",
    "Erika (38)",
    "Luke (23)",
  ]);
});

test("getPeopleByAge() returns an array of people of a certain age", () => {
  expect(getPeopleByAge(people, 21)).toEqual([
    { id: 1, firstName: "Jane", lastName: "Doe", age: 21 },
  ]);
});

test('getPeopleNamesOlderThan() returns an array of people full names older than a certain age, e.g. "Luke Skywalker"', () => {
  expect(getPeopleNamesOlderThan(people, 23)).toEqual([
    "Max Mustermann",
    "Erika Musterfrau",
  ]);
});

test("getPeopleByLastName() returns an array of people of a certain lastName", () => {
  expect(getPeopleByLastName(people, "Musterfrau")).toEqual([
    { id: 4, firstName: "Erika", lastName: "Musterfrau", age: 38 },
  ]);
});

// Hint: use the array method find() for the implementation
test("findPersonById() returns the full object of a person", () => {
  expect(findPersonById(people, 1)).toEqual({
    id: 1,
    firstName: "Jane",
    lastName: "Doe",
    age: 21,
  });
});

// Hint: use the array method some() for the implementation
test("isAnyoneOlderThan() returns true if any person is older than the given age", () => {
  expect(isAnyoneOlderThan(people, 30)).toBe(true);
});

test("isAnyoneOlderThan() returns false if no person is older than the given age", () => {
  expect(isAnyoneOlderThan(people, 40)).toBe(false);
});

test("getFullNamesSortedByAge() returns an array of full names sorted by age", () => {
  expect(getFullNamesSortedByAge(people)).toEqual([
    "John Doe",
    "Jane Doe",
    "Luke Skywalker",
    "Max Mustermann",
    "Erika Musterfrau",
  ]);
});
