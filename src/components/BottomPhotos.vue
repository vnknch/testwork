<template>
    <div>
        <div class="wrapperForBottomPhotos">
            <div class="wrapperForThreePhotos">
                <div 
                class="item"
                v-for="(photo, index) in getRandomPhotos"
                :key="index"
                >
                <img :src="photo.url" alt="" width="200px">
                <p>{{photo.title}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
 .wrapperForBottomPhotos {
	width: 100%;
	height: 100%;
	background-color: rgb(245, 243, 243);
	margin-top: 10rem;
	display: flex;
	align-items: center;
	justify-content: center;
	border-top: 1px solid rgba(0, 0, 0, 0.486);
	border-bottom: 1px solid rgba(0, 0, 0, 0.486);
	.wrapperForThreePhotos { 
    width: 700px;
	height: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	.item { 
    height: 250px;
	margin: 20px;
	flex-basis: 40%;
	border-bottom: 1px solid rgba(0, 0, 0, 0.493);
    }
.item {
	&:nth-child(1) {
		flex-basis: 100%;
	}
	img {
		&:nth-child(1) {
			width: 100%;
			height: 80%;
		}
	}
}
}
         @media screen and (min-width: 370px) and (max-width: 750px){
        p {
        font-size: 12px;
    }
}
  @media screen and (min-width: 300px) and (max-width: 370px){
     p {
        font-size: 12px;
    }
}
    }
</style>
<script>
import { mapGetters } from 'vuex'
export default {
    name: 'BottomPhotosComponent',
    data: () => ({
    }),
    mounted () {
    },
    methods: {
    },
    computed: {
        ...mapGetters(['getRandomPhotos'])
    }
}
</script>