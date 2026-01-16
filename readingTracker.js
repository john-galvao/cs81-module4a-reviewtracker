// Weekly reading log
// const is used so the readingLog array cannot be replaced by another value, which protects the main data list
// The log below is stored as an array where each object represents one day of reading
const readingLog = [
    // each object has a weekday, a book title, and minutes spent reading that day
  { day: "Monday", book: "Dune", minutes: 30 },
  { day: "Tuesday", book: "1984", minutes: 20 },
  { day: "Wednesday", book: "Dune", minutes: 25 },
  { day: "Thursday", book: "The Hobbit", minutes: 40 },
  { day: "Friday", book: "1984", minutes: 15 }
];

// Adds a new reading entry to the log
// this function creates a new reading entry and stores it in readingLog
function addReadBook(day, book, minutes) {
  const newEntry = { day, book, minutes };
  readingLog.push(newEntry);
}
// push() is important because it adds the new entry into the existing array, which updates the stored data for later use

// Returns total minutes spent reading all week
// Start counting from 0 so we can add up all the minutes
function totalReadingMinutes(log) {
// total starts at 0 because the loop adds minutes to it, and without starting at 0 the math would not work correctly
  let total = 0;
  // for..of loop goes through each entry object in the log array
  for (let entry of log) {
    total += entry.minutes;
  }
  return total;
// return is needed so other parts of the program can use the final total, otherwise the function's calculation would be lost

}

// Returns the book read most frequently
// this function determines which book appears most often in the log
function mostReadBook(log) {
// bookCounts is an object used to count how many times each book was read
  const bookCounts = {};
  for (let entry of log) {
    if (!bookCounts[entry.book]) {
      bookCounts[entry.book] = 1;
    } else {
      bookCounts[entry.book]++;
    }
  }

  // maxBook will hold the book with the highest count, maxCount stores the number
  let maxBook = null;
  let maxCount = 0;
  // for..in loop goes through keys in bookCounts to compare count values
  for (let book in bookCounts) {
    if (bookCounts[book] > maxCount) {
      maxBook = book;
      maxCount = bookCounts[book];
    }
  }
  return maxBook;
}

// Prints a summary of minutes read per day
// this function prints a readable summary for each reading session stored in the log
function printDailySummary(log) {
    // this loop builds a message using properties from each entry object
  for (let entry of log) {
        // The loop uses entry.day, entry.minutes, and entry.book to build the message
    console.log(`${entry.day}: ${entry.minutes} mins reading "${entry.book}"`);
  }
}

// Example usage
// calling the functions here is important because it triggers the code and shows the real output in the console
addReadBook("Saturday", "Dune", 50);
printDailySummary(readingLog);
console.log("Total minutes read:", totalReadingMinutes(readingLog));
console.log("Most read book:", mostReadBook(readingLog));
