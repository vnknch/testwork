<template>
    <div class="subscribedSection">
        <div class="wrapperForSubscribedDivs">
          <div>
              <h2>Subscribe to our newsletter</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit nesciunt error illum a explicabo, ipsam nostrum.</p>
          </div>
          <div>
              <input type="text" placeholder="Enter Your Email Adress"><button>Go!</button>
          </div>  
        </div>
    </div>
</template>
<style scoped lang="scss">
.subscribedSection {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	border-bottom: 1px solid rgba(0, 0, 0, 0.411);
	.wrapperForSubscribedDivs { 
    width: 40%;
	height: 80%;
	display: flex;
	flex-wrap: wrap;
	div { 
    flex-basis: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	margin: 10px;
    }
  }
}
</style>
<script>
export default {
    data: () => ({
        name: 'SubscribedComponent'
    }),
    mounted () {
    },
    methods: {
    },
    computed: {
    }
}
</script>