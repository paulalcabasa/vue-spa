<template>
    <div class="text-2xl text-gray-800">
        Dashboard <br />
        Name : {{ user.name }} <br />

        <button @click.prevent="logout">Logout</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            user: null
        }
    },
    methods: {
        logout(){
            axios.post('api/logout').then( () => {
                this.$router.push({ name: 'Home'});
            });
        }
    },
    mounted(){
        axios.get('api/user').then( (res) => {
            this.user = res.data
        });
    }
}
</script>