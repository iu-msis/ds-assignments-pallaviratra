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
        }
    },

    created(){
        this.fetchBookData();
    }
}
  
Vue.createApp(Book).mount('#books');