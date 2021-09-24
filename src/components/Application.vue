<template>
  <main>
    <div class="main-heading">
      <h1>EVTW Boilerplate</h1>
    </div>
    <div class="main-teaser">
      <img :src="logo" title="Codesbiome" />
      <div>
        Minimal boilerplate for rapid development of Desktop Applications.
        <br />
        This project makes use of Electron, React, Typescript, Webpack to serve
        the best environment for development with hot-reloading of modules and
        styles.
      </div>
    </div>
    <div class="versions center">
      <span> ERWT <span id="erwt-version"></span> </span>
      <span> Electron <span id="electron-version"></span> </span>
      <span> Chrome <span id="chrome-version"></span> </span>
      <span> Node <span id="node-version"></span> </span>
    </div>
    <p class="main-teaser small center">
      Click below button(s) to update the application &quot;counter&quot; state.
      For faster development experience, this application will update using Hot
      Reload without needing to restart/reload after code changes
    </p>
    <div class="center">
      <button @click="increment">
        Increment Counter <span>{{ counter }}</span>
      </button>
      &nbsp;&nbsp; &nbsp;&nbsp;
      <button @click="decrement">
        Decrement Counter <span>{{ counter }}</span>
      </button>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import logo from '@assets/images/logo.png';
import './Application.less';

export default defineComponent({
  data() {
    return {
      counter: 0,
      logo: logo,
    };
  },
  methods: {
    increment() {
      this.counter++;
    },
    decrement() {
      if (this.counter > 0) this.counter--;
    },
  },
});
</script>
