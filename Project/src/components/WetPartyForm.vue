<template>
        <form class="wet-party-form" v-on:submit.prevent="saveParty">
            <section id="guestName">
            <h3>First + Last Name</h3>
            <input class="guest-name-input" type="text" placeholder="guest name" v-model="guest.name" required/><span>unless you're Cher or Bono or someone fancy</span>
            </section>
            <br/>
            <section id="wineChoices">
            <h3>Wine Choices</h3>
            <br/>
            <select><span>red, white, or bubbles</span>
            <option>Pick Me! Pick Me!</option>
            <option>(red)</option>
            <option>(white)</option>
            <option>(bubbles)</option>
            </select>
            <input class="glasses-of-wine" type="text" placeholder="Grapes Galore" v-model="guest.wine" required/><span>how many glasses?</span>
            </section>
            <br/>
            <section id="beerChoices">
            <h3>Beer Choices</h3>
            <br/>
            <select><span></span>
            <option>Beer Me</option>
            <option>(lager)</option>
            <option>(stout)</option>
            <option>(IPA)</option>
            <option>(sour)</option>
            </select>
            <input class="pints-of-beer" type="text" placeholder="Jeremy Beer-imy" v-model="guest.beer" required/><span>how many pints?</span>
            </section>
            <br/>
            <section id="liquorChoices">
            <h3>Liquor</h3>
            <br/>
            <select><span></span>
            <option>Gin-ny From The Block</option>
            <option>(premium)</option>
            <option>(house)</option>
            </select>
            <input class="gin-and-tonics" type="text" placeholder="Gin-uinely Excited" v-model="guest.gts" required/><span>how many cocktails?</span>
            </section>
            <br/>
            <section id="dinnerChoices">
            <select class="dinner" v-model="guest.dinner" required>
                <option disabled value="">select your dinner choice</option>
                <option>chicken scallopini</option>
                <option>ligurian seafood stew</option>
                <option>nebbiolo braised seitan 'meat'balls</option>
            </select>
            <span>dinner: {{ dinner }}</span>  
            </section>  
            <div>
        <button id="saveButton" v-on:click="alertSave">Save</button>
            </div>
        </form>
</template>

<script>
export default {
        name: "wet-party-form",
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
    methods: {
        alertSave(event) {
            if (event.target.id === "saveButton") {
                alert("LET'S GET THIS PARTY STARTED!");
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