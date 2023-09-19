<template>
  <div class="page">
    <HomeHero />
    <div class="gradient gradient-mask"></div>
  </div>
</template>

<style scoped lang="scss">
.gradient-mask {
  -webkit-mask-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 0, 0, 1)
  );
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
}

.gradient {
  z-index: -1;

  position: absolute;
  width: calc(100% + 32px);
  left: -16px;
  top: 0;
  height: 100vh;
  opacity: 0.5;

  background: linear-gradient(
    300deg,
    var(--background),
    #47eaffbf,
    var(--background),
    #6a40b1bf
  );
  background-size: 600% 600%;

  -webkit-animation: HeroGradientAnim 30s ease infinite;
  -moz-animation: HeroGradientAnim 30s ease infinite;
  -o-animation: HeroGradientAnim 30s ease infinite;
  animation: HeroGradientAnim 30s ease infinite;
}

@-webkit-keyframes HeroGradientAnim {
  0% {
    background-position: 14% 0%;
  }
  50% {
    background-position: 87% 100%;
  }
  100% {
    background-position: 14% 0%;
  }
}
@-moz-keyframes HeroGradientAnim {
  0% {
    background-position: 14% 0%;
  }
  50% {
    background-position: 87% 100%;
  }
  100% {
    background-position: 14% 0%;
  }
}
@-o-keyframes HeroGradientAnim {
  0% {
    background-position: 14% 0%;
  }
  50% {
    background-position: 87% 100%;
  }
  100% {
    background-position: 14% 0%;
  }
}
@keyframes HeroGradientAnim {
  0% {
    background-position: 14% 0%;
  }
  50% {
    background-position: 87% 100%;
  }
  100% {
    background-position: 14% 0%;
  }
}
</style>
