<template>
  <div class="features">
    <div class="container">
      <section class="section">
        <h1 class="title">Features</h1>
        <h2 class="subtitle is-4">Lorem ipsum dolor sit amet consectetur.</h2>

        <div class="columns pd">
          <div class="column">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    src="https://bulma.io/images/placeholders/1280x960.png"
                    alt="Placeholder image"
                  >
                </figure>
              </div>
              <div class="card-content">
                <p class="title">Lorem</p>
                <p
                  class="subtitle"
                >Ipsum dolor, sit amet consectetur adipisicing elit. Provident odio tempore reprehenderit, atque illum facilis?</p>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    src="https://bulma.io/images/placeholders/1280x960.png"
                    alt="Placeholder image"
                  >
                </figure>
              </div>
              <div class="card-content">
                <p class="title">Consectetur</p>
                <p
                  class="subtitle"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt at porro sint odio dolorem, dolores corrupti alias quasi excepturi expedita.</p>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    src="https://bulma.io/images/placeholders/1280x960.png"
                    alt="Placeholder image"
                  >
                </figure>
              </div>
              <div class="card-content">
                <p class="title">Dolorem</p>
                <p
                  class="subtitle"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, dolorem quasi reiciendis odit quia excepturi!</p>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img
                    src="https://bulma.io/images/placeholders/1280x960.png"
                    alt="Placeholder image"
                  >
                </figure>
              </div>
              <div class="card-content">
                <p class="title">Excepturi</p>
                <p
                  class="subtitle"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, maiores. Blanditiis natus ratione vitae quo!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "features"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '../mq'

.pd
  padding: 2.5em 0 1.5em 0

.columns
  flex-wrap: wrap

</style>
