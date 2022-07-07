// class Book {
//     constructor (title, author, ISBN, pageNumber, currentPage, readStatus) {
//         this.title = title;
//         this.author = author;
//         this.ISBN = ISBN;
//         this.pageNumber = pageNumber;
//         this.currentPage = currentPage;
//         this.readStatus = readStatus;
//     }
//     updateCurrentPage (newCurrent) {
//         this.currentPage = newCurrent;
//     };
//     updateReadStatus (newStatus) {
//         this.readStatus = newStatus
//     }
// }

// export default Book;

function Book (title, author, ISBN, pageNumber, currentPage, readStatus) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.pageNumber = pageNumber;
    this.currentPage = currentPage;
    this.readStatus = readStatus;

    this.updateCurrentPage = function(newCurrent) {
        this.currentPage = newCurrent;
    };
    this.updateReadStatus = function(newStatus) {
        this.readStatus = newStatus
    }
}

export default Book;
