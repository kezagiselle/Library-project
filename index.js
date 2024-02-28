var library = [
    {
        title:'Lone Eagle',
        author: 'Steven',
        availability: false,
        holder: '',    
 },
 {
    title:'The mountain is you',
    author: 'Daniel',
    availability: true,
    holder: ''
 },
 {
    title:'atomic habits',
    author: 'Steven',
    availability: false,
    holder: '' 
 },
 {
    title:'48 Laws of power',
    author: 'Danie;',
    availability: true,
    holder: ''
 },
];
const addBooks = (book) => {
    console.log(library.length);
    library.push(book);
    console.log(library.length);
};
console.log(library);
//??addBooks('The poetric');
const listAvailabilityOfBooks = () => {
    var available = [];
    library.forEach(book => {
      if(book.availability === true){
         available.push(book);
       }
    });
    console.log(available);
};
listAvailabilityOfBooks();

const borrowBook = (bookName, holder) => {
   //check if the book is available
   var availableBook = library.find(book => book.title = bookName && book.availablility === true);
   console.log(availableBook);
   
   if(!availableBook){
      console.log('The book is not available');
      return;
   }

   var availableBook = [];
   library.forEach(book => {
      if(book.title === bookName && book.availability === true){
         availableBook = book;
         book.availability = false;
         book.holder = holder;
         console.log('The book is available for borrowing');
         return;
      }
   });
   console.log(availableBook);

   if(availableBook.availability || available.availability === false){
      console.log(library);
   } else{
      console.log('The book is not available');
   }

};

//??(not working) borrowBook('48 laws of power', 'Bella');

const returnBook = (bookName) => {
   const book = library.find(book => book.title === bookName);
   if(book && !book.availability) {
      book.availability = true;
      console.log(`Book "${book.title}"has been returned`);
   } else {
      console.log(`Book "${bookTitle}" does not exist in the library.`)
   }
};
returnBook('Lone Eagle');

