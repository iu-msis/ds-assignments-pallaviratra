const User = {
    data() {
      return {
        "user": {},
        }
    },
    created() {
        console.log("A");
        fetch('https://randomuser.me/api/')
        .then( response => response.json() )
        .then( (responseJson) => {
            console.log(responseJson);
            console.log("C");
            this.user = responseJson.results[0];
        })
        .catch( (err) => {
            console.error(err);
        })
        console.log("B");
    } //end created
} // end Offer config
  
Vue.createApp(User).mount('#randomUser');
console.log("Z");