const Book = {
    data() {
      return {
        "books": {
            id: {},
            title: {},
            author: {},
            year: {},
            publisher: {},
            pages: {},
            msrp: {},
        }
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
        }
    },

    created(){
        this.fetchBookData();
    }
}
  
Vue.createApp(Book).mount('#books');