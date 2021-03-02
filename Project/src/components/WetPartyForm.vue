<template>
  <form class="wet-party-form" v-on:submit.prevent="saveParty">
    <section id="guestName">
      <h3>Guest Name</h3>
      <input
        class="guestNameInput"
        type="text"
        placeholder="first, last"
        v-model="guest.name"
        required
      />
      <p>(unless you're Oprah or Cher)</p>
    </section>
    <div class="drinkChoices">
      <section id="wineChoices">
        <h3>Wine Choices</h3>
        <select>
          <option>Grapes Galore</option>
          <option>(red)</option>
          <option>(white)</option>
          <option>(bubbles)</option>
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
        <h3>Beer Choices</h3>
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
      <span> dinner: {{ dinner }} </span>
      <select class="dinner" v-model="guest.dinner" required>
        <option>chicken scallopini</option>
        <option>ligurian seafood stew</option>
        <option>nebbiolo braised seitan 'meat'-balls</option>
      </select>
      <div>
        <button id="saveButton" v-on:click="alertSave">Save</button>
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
      },
    };
  },
  methods: {
    alertSave(event) {
      if (event.target.id === "saveButton") {
        alert("LET'S GET THIS PARTY STARTED!");
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
}

#beerChoices,
#wineChoices,
#liquorChoices {
  text-align: center;
}
</style>