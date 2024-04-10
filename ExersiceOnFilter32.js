// In this Exercise, we will see how we can get data from api And Backend

const books = [
  {
    title: "Book 1",
    genre: "Fiction",
    publish: "2021",
    edition: "1st",
  },
  {
    title: "Book 2",
    genre: "Non-Fiction",
    publish: "2020",
    edition: "2nd",
  },
  {
    title: "Book 3",
    genre: "Mystery",
    publish: "2019",
    edition: "3rd",
  },
  {
    title: "Book 4",
    genre: "Sci-Fi",
    publish: "2018",
    edition: "4th",
  },
  {
    title: "Book 5",
    genre: "Romance",
    publish: "2017",
    edition: "5th",
  },
  {
    title: "Book 6",
    genre: "Thriller",
    publish: "2016",
    edition: "6th",
  },
];

const userBooks = books.filter((bk) => bk.genre === "Romance");

console.log(userBooks);

// [
//   {
//     title: 'Book 5',
//     genre: 'Romance',
//     publish: '2017',
//     edition: '5th'
//   }
// ]

const publishBooks = books.filter((bk) => {
  return bk.publish >= "2016";
});

console.log(publishBooks);

// [
//   {
//     title: 'Book 6',
//     genre: 'Thriller',
//     publish: '2016',
//     edition: '6th'
//   }
// ]

const genreBooks = books.filter((bk) => {
  return bk.publish >= "2020" && bk.genre === "Fiction";
});

console.log(genreBooks);

// [
//   {
//     title: 'Book 1',
//     genre: 'Fiction',
//     publish: '2021',
//     edition: '1st'
//   }
// ]
