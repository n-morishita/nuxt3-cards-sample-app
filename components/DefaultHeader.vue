<template>
  <v-app-bar
    :class="{ scrolled: isScrolled }"
    density="compact"
    class="custom-app-bar px-6 d-flex align-center justify-center"
    flat
  >
    <div class="d-flex align-center">
      <v-app-bar-title @click="handleClickTitle" class="clickable mr-4">
        My Portfolio
      </v-app-bar-title>
    </div>
    <div class="d-flex align-center ml-auto">
      <div class="px-3 clickable menu-item" @click="handleClickAbout">
        About
      </div>
      <div class="px-3 clickable menu-item" @click="handleClickInterests">
        Interests
      </div>
      <div class="px-3 clickable menu-item" @click="handleClickWorks">
        Works
      </div>
      <div class="px-3 clickable menu-item" @click="handleClickSkills">
        Skills
      </div>
      <div class="px-3 clickable menu-item" @click="handleClickContact">
        Contact
      </div>
    </div>
  </v-app-bar>
</template>

<script setup lang="ts">
const router = useRouter();
const isScrolled = ref<boolean>(false);

const handleClickTitle = (): void => {
  router.push("/");
};

const handleClickAbout = (): void => {
  router.replace({ hash: "#about" });
};

const handleClickInterests = (): void => {
  router.replace({ hash: "#interests" });
};

const handleClickWorks = (): void => {
  router.replace({ hash: "#works" });
};

const handleClickSkills = (): void => {
  router.replace({ hash: "#skills" });
};

const handleClickContact = (): void => {
  router.replace({ hash: "#contact" });
};

const handleScroll = (): void => {
  isScrolled.value = window.scrollY > 50;
};

onMounted((): void => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted((): void => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style lang="scss">
.custom-app-bar {
  transition: background-color 0.3s ease, height 0.3s ease;
  background-color: transparent !important;
  height: 100px;
  box-shadow: none;
  div {
    color: white;
  }
}

.custom-app-bar.scrolled {
  // background-color: rgba(107, 169, 192, 0.9) !important;
  height: 60px;
  color: white;
}

.clickable {
  cursor: pointer;
}

.menu-item {
  position: relative;
  padding-bottom: 2px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 2px;
    background-color: #a98a34;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
    left: 0;
    right: auto;
  }
}
</style>
