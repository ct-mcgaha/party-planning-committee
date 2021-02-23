<template>
  <form class="dry-party-form" v-on:submit.prevent="saveParty">
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
      <section id="seltzerChoices">
          <h3>Seltzer Choices </h3>
          <select>
          <option>Bubbles without the Headache</option>
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
          <h3>Hopped-Tea Choices</h3>
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
          <h3>Mocktail Choices</h3>
          <select>
          <option>House or Premium</option>
          <option>(premium)</option>
          <option>(house)</option>
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
           <span>dinner: {{ dinner }}</span>
      <select class="dinner" v-model="guest.dinner" required>

        <option>chicken scallopini</option>
        <option>ligurian seafood stew</option>
        <option>nebbiolo braised seitan 'meat'balls</option>
      </select>
      <div>
        <button id="saveButton" v-on:click="alertSave">Save</button>
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
      },
    };
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
  font-family: 'Amatic SC', cursive;
}

.dry-party-form {
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
  margin: 25px;
}

#saveButton {
  margin-left: 5px;
  border-radius: 50px;
  font-family: 'Amatic SC', cursive;
}

#saveButton:hover {
  background-color: #ffcccc;
  color: #efffff;
}

input {
  margin-left: 5px;
}

#seltzerChoices,
#teaChoices,
#mocktailChoices {
  text-align: center;
}

</style>