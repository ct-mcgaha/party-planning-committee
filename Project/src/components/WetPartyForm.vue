<template>
        <form class="wet-party-form" v-on:submit.prevent="saveParty">
            <input class="guest-name-input" type="text" placeholder="guest name" v-model="guest.name" /><br />
            <input class="glasses-of-wine" type="text" placeholder="glasses of wine" v-model="guest.wine" />glasses of wine<br />
            <input class="pints-of-beer" type="text" placeholder="pints of beer" v-model="guest.beer" />pints of beer<br />
            <input class="gin-and-tonics" type="text" placeholder="gin-and-tonics" v-model="guest.gts" />gin and tonics<br />
            <select class="dinner" v-model="guest.dinner">
                <option disabled value="">select your dinner choice</option>
                <option>chicken scallopini</option>
                <option>ligurian seafood stew</option>
                <option>nebbiolo braised seitan 'meat'balls</option>
            </select>
            <span>dinner: {{ dinner }}</span>    
        <button>Save</button>
        </form>
</template>

<script>
export default {
        name: "new-book-form",
    data() {
        return {
            guest: {
                name: '',
                wine: '',
                beer: '',
                gts: '',
                dinner: Option
            }
        }
    },
    // methods: {
    //     saveBook() {
    //         this.$store.commit('SAVE_BOOK', this.book);
    //         this.book = {
    //             title: '',
    //             author: '',
    //             read: false,
    //             isbn: ''
    //         };
    //     }
    // }
}    
</script>

<style>

form > input {
    font-size: 18px;
}

form > select {
    font-size: 18px;    
}

</style>