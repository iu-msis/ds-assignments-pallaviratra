const User = {
    data() {
      return {
        "user": {
            name: {},
            picture: {},
            dob: {},
            location: {},
        }
        }
    },

    computed: {
        prettyBirthday() {
            return dayjs(this.user.dob.date)
            .format('DD MMM YYYY')
        }
    },

    methods: {
        fetchUserData() {
            fetch('https://randomuser.me/api/')
            .then( response => response.json() )
            .then( (responseJson) => {
                this.user = responseJson.results[0];
            })
            .catch( (err) => {
                console.error(err);
            })
        }    
    },
    
    created(){
        this.fetchUserData();
    }
}
  
Vue.createApp(User).mount('#randomUser');
