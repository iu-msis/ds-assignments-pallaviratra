const Book = {
    data() {
      return {
        "books": [],
        "bookForm": {},
        "selectedBook": null
        }
    },

    methods: {
        prettyPound(a) {
            const p = new Intl.NumberFormat("en-UK").format(a);
            return "£" + p;
        },
        fetchBookData() {
            fetch('/api/books/')
            .then( response => response.json() )
            .then( (responseJson) => {  
                console.log(responseJson);
                this.books = responseJson;
            })
            .catch( (err) => {
                console.error(err);
            })
        },
        // selectBook(b) {
        //     if (b == this.selectedBook){
        //       return;
        //     }
        //     this.selectedBook = b;
        //     this.books = [];
        //   },
        postBook(evt) {
        if (this.selectedBook === null) {
            this.postNewBook(evt);
        } else {
            this.postEditBook(evt);
        }
        },
        postNewBook(evt) {
            fetch('api/books/create.php', {
              method: 'POST',
              body: JSON.stringify(this.bookForm),
              headers: {
                "Content-type": "application/json; charset=utf-8"
              }
            })
            .then( response => response.json() )
            .then( json => {
              this.books = json;
              this.bookForm = {};
            });
        },
        postEditBook(evt) {
            //this.offerForm.studentId = this.selectedStudent.id;  
            //this.bookForm.id = this.selectedBook.id;
            console.log("Updating!", this.bookForm);
      
            fetch('api/books/update.php', {
              method: 'POST',
              body: JSON.stringify(this.bookForm),
              headers: {
                "Content-type": "application/json; charset=utf-8"
              }
            })
            .then( response => response.json() )
            .then( json => {
              console.log("Returned from post:", json);
              this.books = json;
              //this.bookForm = {};
              //this.selectedBook = null;
      
              //reset book form
              this.resetBookForm();
            });
          },
          postDeleteBook(b) {
            if (!confirm("Are you sure you want to delete this book?")) {
              return;
            }
            console.log("Delete!", b);
      
            fetch('api/books/delete.php', {
              method: 'POST',
              body: JSON.stringify(b),
              headers: {
                "Content-type": "application/json; charset=utf-8"
              }
            })
            .then( response => response.json() )
            .then( json => {
              console.log("Returned from post:", json);
              this.books = json;
              //this.bookForm = {};
      
              //reset book form
              this.resetBookForm();
            });
          },
          selectBookToEdit(b){
            this.selectedBook = b;
            this.bookForm = Object.assign({}, this.selectedBook);
          },
          resetBookForm() {
            this.selectedBook = null;
            this.bookForm = {};
          }
    },

    created(){
        this.fetchBookData();
    }
}
  
Vue.createApp(Book).mount('#books');