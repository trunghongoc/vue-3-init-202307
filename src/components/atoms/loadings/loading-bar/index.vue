<template>
  <div className="loading-bar">
    <div className="bar-container primary">
      <div className="bar-item primary" />
    </div>

    <div className="bar-container aux">
      <div className="bar-item aux" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'LoadingBar'
})
</script>

<style scoped lang="scss">
$color: #3498db;

@keyframes primary-indeterminate-translate {
  0% {
    transform: translateX(-145.166611%)
  }

  20% {
    animation-timing-function: cubic-bezier(.5, 0, .701732, .495819);
    transform: translateX(-145.166611%)
  }

  59.15% {
    animation-timing-function: cubic-bezier(.302435, .381352, .55, .956352);
    transform: translateX(-61.495191%)
  }

  to {
    transform: translateX(55.444446%)
  }
}

@keyframes primary-indeterminate-scale {
  0% {
    transform: scaleX(.08)
  }

  36.65% {
    animation-timing-function: cubic-bezier(.334731, .124820, .785844, 1);
    transform: scaleX(.08)
  }

  69.15% {
    animation-timing-function: cubic-bezier(.06, .11, .6, 1);
    transform: scaleX(.661479)
  }

  to {
    transform: scaleX(.08)
  }
}

@keyframes auxiliary-indeterminate-translate {
  0% {
    animation-timing-function: cubic-bezier(.15, 0, .515058, .409685);
    transform: translateX(-54.888891%)
  }

  25% {
    animation-timing-function: cubic-bezier(.310330, .284058, .8, .733712);
    transform: translateX(-17.236978%)
  }

  48.35% {
    animation-timing-function: cubic-bezier(.4, .627035, .6, .902026);
    transform: translateX(29.497274%)
  }

  to {
    transform: translateX(105.388891%)
  }
}

@keyframes auxiliary-indeterminate-scale {
  0% {
    animation-timing-function: cubic-bezier(.205028, .057051, .576610, .453971);
    transform: scaleX(.08)
  }

  19.15% {
    animation-timing-function: cubic-bezier(.152313, .196432, .648374, 1.004315);
    transform: scaleX(.457104)
  }

  44.15% {
    animation-timing-function: cubic-bezier(.257759, .003163, .211762, 1.381790);
    transform: scaleX(.727960)
  }

  to {
    transform: scaleX(.08)
  }
}

.loading-bar {
  position: relative;
  width: 100%;
  height: 1px;
  overflow: hidden;
  transform: translateZ(0);
  transform: translateY(-1px);

  .bar-container {
    position: absolute;
    height: 100%;
    width: 100%;
    transform-origin: top left;

    .bar-item {
      position: absolute;
      display: inline-block;
      height: 100%;
      width: 100%;
      background-color: $color;

      &.primary {
        animation: primary-indeterminate-scale 2s infinite linear;
      }

      &.aux {
        animation: auxiliary-indeterminate-scale 2s infinite linear;
      }
    }

    &.primary {
      animation: primary-indeterminate-translate 2s infinite linear;
    }

    &.aux {
      animation: auxiliary-indeterminate-translate 2s infinite linear;
    }
  }
}
</style>