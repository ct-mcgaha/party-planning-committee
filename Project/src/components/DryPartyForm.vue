<template>
  <form class="dry-party-form" v-on:submit.prevent="saveParty">
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
    </section>

    <div class="drinkChoices">
      <section id="seltzerChoices">
          <h3>Seltzers </h3> 
          <select>
          <option>Bubbles</option>
          <option>Cherry (Bubly)</option>
          <option>Grapefruit (Bubly)</option>
          <option>Blackberry (Bubly)</option>
          <option>Mango (La Croix)</option>
          <option>Peach-Pear (La Croix)</option>
          <option>Key Lime (La Croix)</option>
          <option>Pure (La Croix)</option>
        </select>
        <input
          class="seltzerAmt"
          type="text"
          placeholder="amt of cans"
          v-model="guest.seltzer"
          required
        />
      </section>

      <section id="teaChoices">
          <h3>Hopped-Teas </h3>
          <select>
          <option>Tea with Hops</option>
          <option>(your choice)</option>
          <option>(your choice)</option>
          <option>(your choice)</option>
          <option>(your choice)</option>
          <option>(your choice)</option>
          <!-- I figured you could fill this out since idk about these drinks lol -->
        </select>
        <input
          class="hopTeaAmt"
          type="text"
          placeholder="amt of pints"
          v-model="guest.hoptea"
          required
        />
      </section>

      <section id="mocktailChoices">
          <h3>Mocktails</h3>
          <select>
          <option>House or Premium</option>
          <option>Nolets</option>
          <option>Titos</option>
        </select>
        <input
          class="mocktailAmt"
          type="text"
          placeholder="amt of mocktails"
          v-model="guest.gts"
          required
        />
      </section>
    </div>

    <section id="dinnerChoices">
      <div class="dinnerHeader">
          <h3> Dinner {{ dinner }}</h3>
      </div>
      <div id="dinnerAndSaveBtn">
      <select class="dinner" v-model="guest.dinner" required>
        <option>chicken scallopini</option>
        <option>ligurian seafood stew</option>
        <option>nebbiolo braised seitan 'meat'balls</option>
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
  name: "dry-party-form",
  data() {
    return {
      guest: {
        name: "",
        seltzer: "",
        hoptea: "",
        gts: "",
        dinner: Option,
        hasGuest: false,
      },
    };
    },
    methods: {
     addGuest(event) {
      if (event.target.id === "buttonPlusOne") {
        alert("NOW YOU DON'T HAVE TO DANCE ALONE!");
      }
    },
  },
  // methods: {
  //     alertSave() {
  //         this.$store.commit('SAVE_CHOICE', this.choice);
  //         this.choice = {
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

.dry-party-form {
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
  text-align: center;
}

#dinnerAndSaveBtn {
  display: flex;
  flex-direction: row;
}

#dinnerChoices {
  display: flex;
  flex-direction: column; 
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

#seltzerChoices,
#teaChoices,
#mocktailChoices {
  text-align: center;
}

</style>