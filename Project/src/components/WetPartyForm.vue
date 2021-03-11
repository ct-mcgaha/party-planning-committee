<template>
  <form class="wet-party-form" v-on:submit.prevent="saveParty">
    <section id="guestName">
      <h3>Guest</h3>
      <input
        class="guestNameInput"
        type="text"
        placeholder="first + last name"
        v-model="guest.name"
        required
      />
      <div class="guestPlusOne">
      <button id="buttonPlusOne" v-on:click.prevent="addGuest" v-show="!hasGuest">add plus one</button>
      </div>
      <div v-show="hasGuest">
      <input
        class="plusOneNameInput"
        type="text"
        placeholder="plus one"
        v-model="guest.name"
        required
      />
      </div>
    
       <!-- add button and a show-if for a plus one guest? -->
    </section>
    <div class="drinkChoices">
      <section id="wineChoices">
        <h3>Wine</h3>
        <select>
          <option>Grapes Galore</option>
          <option>Cabernet Sauvignon</option>
          <option>Tempranillo</option>
          <option>Chardonnay</option>
          <option>Sauvignon Blanc</option>
          <option>Prosecco</option>
        </select>
        <input
          class="wineAmt"
          type="text"
          placeholder="amt of glasses"
          v-model="guest.wine"
          required
        />
      </section>
      <section id="beerChoices">
        <h3>Beer</h3>
        <select>
          <option>Beer Me</option>
          <option>(lager)</option>
          <option>(stout)</option>
          <option>(IPA)</option>
          <option>(sour)</option>
        </select>
        <input
          class="beerAmt"
          type="text"
          placeholder="amt of pints"
          v-model="guest.beer"
          required
        />
      </section>
      <section id="liquorChoices">
        <h3>Liquor</h3>
        <select>
          <option>House or Premium</option>
          <option>(premium)</option>
          <option>(house)</option>
        </select>
        <input
          class="cocktailAmt"
          type="text"
          placeholder="amt of cocktails"
          v-model="guest.gts"
          required
        />
      </section>
    </div>
    <section id="dinnerChoices">
      <div class="dinnerHeader">
      <h3> Dinner {{ dinner }} </h3>
      </div>
      <div id="dinnerAndSaveBtn">
      <select class="dinner" v-model="guest.dinner" required>
        <option>chicken scallopini</option>
        <option>ligurian seafood stew</option>
        <option>nebbiolo braised seitan 'meat'-balls</option>
      </select>
      <div>
        <button id="saveButton" v-on:click="alertSave">Save</button>
      </div>
      </div>
    </section>
  </form>
</template>

<script>
export default {
  name: "wet-party-form",
  data() {
    return {
      guest: {
        name: "",
        wine: "",
        beer: "",
        gts: "",
        dinner: Option,
        hasGuest: false,
      },
    };
  },
  /* needed if using v-if, might be using v-show instead
  props: {
    enableAdd: {
      type: Boolean,
      default: false,
    },
  },
  */
  methods: {
    alertSave(event) {
      if (event.target.id === "saveButton") {
        alert("LET'S GET THIS PARTY STARTED!");
      }
    },
    addGuest(event) {
      if (event.target.id === "buttonPlusOne") {
        alert("NOW YOU DON'T HAVE TO DANCE ALONE!");
      }
    },
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
};
</script>

<style>
form > input {
  font-size: 18px;
}

form > select {
  font-size: 18px;
}

input,
select,
option {
  font-family: 'Josefin Slab', serif;
}

.wet-party-form {
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
}

#guestName {
  text-align: center;
}

.drinkChoices {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 25px;
}

#buttonPlusOne {
  font-family: 'Josefin Slab', serif;
  margin-top: 5px;
}

#dinnerAndSaveBtn {
  display: flex;
  flex-direction: row;
}

#dinnerChoices {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
}

#saveButton {
  margin-left: 5px;
  border-radius: 50px;
  border-width: thick;
  font-family: 'Josefin Slab', serif;
  text-align: center;
}

#saveButton:hover {
  background-color: #80b2a6;
  color: #efffff;
  box-shadow: 4px 4px 4px #808cb2;
}

input {
  text-align: center;
  margin-left: 5px;
}

#beerChoices,
#wineChoices,
#liquorChoices {
  text-align: center;
}
</style>

<!-- NEED TO ADD LOGIC, ALL FIELDS MUST BE FILLED OUT IN ORDER TO USE SAVE BUTTON -->