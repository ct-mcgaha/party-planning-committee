<template>
        <form class="dry-party-form" v-on:submit.prevent="saveParty">
            <input class="guest-name-input" type="text" placeholder="guest name" v-model="guest.name" /><br />
            <input class="cans-of-seltzer" type="text" placeholder="cans of seltzer" v-model="guest.seltzer" />cans of seltzer<br />
            <input class="pints-of-hoptea" type="text" placeholder="pints of HopTea" v-model="guest.hoptea" />pints of HopTea<br />
            <input class="ginger-and-tonics" type="text" placeholder="ginger-and-tonics" v-model="guest.gts" />ginger and tonics<br />
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
                seltzer: '',
                hoptea: '',
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