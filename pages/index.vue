<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        <About id="about" />
      </v-col>
      <v-col cols="8">
        <v-row>
          <v-col cols="8">
            <Interests id="interests" />
          </v-col>
          <v-col cols="4">
            <Works id="works" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="8">
            <Skills id="skills" />
          </v-col>
          <v-col cols="4">
            <Contact id="contact" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
import VanillaTilt from "vanilla-tilt";
import { useRoute } from "vue-router";

const route = useRoute();

const handleNavigationClick = (targetId: string) => {
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.classList.add("highlight");
    setTimeout(() => {
      targetElement.classList.remove("highlight");
    }, 1000);
  }
};

watch(
  () => route.hash,
  (newHash) => {
    if (newHash) {
      const targetId = newHash.replace("#", ""); // #about のようなハッシュからIDを取得
      handleNavigationClick(targetId);
    }
  }
);

onMounted(() => {
  const cards = Array.from(document.querySelectorAll(".card")) as HTMLElement[];
  if (cards.length > 0) {
    VanillaTilt.init(cards, {
      max: 15,
      speed: 400,
      glare: true,
      "max-glare": 1,
    });
  }
});

onBeforeUnmount(() => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    if ((card as any).vanillaTilt) {
      (card as any).vanillaTilt.destroy();
    }
  });
});
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Zen+Antique&display=swap");

* {
  font-family: "Poppins", sans-serif;
}

.card {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  border-radius: 15px;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);

  .content {
    padding: 20px;

    h2 {
      position: absolute;
      top: 0px;
      right: 0px;
      font-size: 8rem;
      color: rgba(255, 255, 255, 0.1);
    }

    p {
      font-size: 1rem;
      color: #fff;
      font-weight: 300;
    }
  }
}

/* クリックされた要素が強調されるようなエフェクト */
.highlight {
  animation: highlight-animation 1s ease-in-out;
}

@keyframes highlight-animation {
  0% {
    background-color: rgba(255, 255, 255, 0.2);
  }
  100% {
    background-color: transparent;
  }
}
</style>
