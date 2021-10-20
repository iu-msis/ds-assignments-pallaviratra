const Book = {
    data() {
      return {
        "books": [],
        "bookForm": {} 
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
        postNewBook(evt) {
            // this.offerForm.studentId = this.selectedStudent.id;  
            console.log("Posting!", this.bookForm);
            //alert("Created");
      
            fetch('api/books/add.php', {
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
              this.bookForm = {};
            });
        }
    },

    created(){
        this.fetchBookData();
    }
}
  
Vue.createApp(Book).mount('#books');