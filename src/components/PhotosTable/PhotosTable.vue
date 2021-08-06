<template>
    <div class="wrapper">
        <div class="middlePosts">
            <div class="wrapperForPosts">
                <div 
                v-for="photo in pagination" 
                :key="photo.id" 
                class="posts">
                    <img 
                    :src="photo.url"
                    alt=""
                    class="size"
                    >
                    <p>{{photo.title}}</p>
                </div>
            </div>
            <div class="wrapperForPages">
                <div 
                class="pages"
                v-for="page in pages"
                :key="page"
                @click="changePage(page)"
                :class="{'activePage': page === pageNumber}"
                >
                    {{page}}
                </div>
                <button @click="sortByTitle">
                    Sort by Title
                </button>
            </div>  
        </div>
    </div>
</template>
<script>
export default {
    name: 'PhotosPagination',
    components: {
    },
    props: {
        photos: {
            type: Array,
            default: () => []
        }
    },
    data: () => ({
        pageNumber: 1,
        photosOnPage: 10,
        fetchOrNot: true
    }),
    mounted () {
    },
    methods: {
        changePage (page) {
            this.pageNumber = page
        },
        sortByTitle () {
                this.photos.sort((a, b) => a.title.localeCompare(b.title))
        }
    },
    computed: {
        pages () {
            return Math.ceil(this.photos.length / 10)
        },
        pagination () {
            let a = (this.pageNumber - 1) * this.photosOnPage
            let b = a + this.photosOnPage
            return this.photos.slice(a, b)
        }
    }
}
</script>
<style scoped lang="scss">
 button {
	border: 1px solid rgba(0, 0, 0, 0.342);
	background-color: rgb(255, 255, 255);
	border-radius: 10px;
	transition-duration: 0.3s;
	cursor: pointer;
	&:hover {
		transition-duration: 0.3s;
		background-color: rgb(111, 226, 255);
	}
}
.wrapper {
	width: 100%;
	height: 100%;
}
.middlePosts {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.wrapperForPosts {
	width: 80%;
	height: 100%;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
}
.posts {
	padding: 25px;
	margin-bottom: 10px;
	border-bottom: 1px solid rgba(0, 0, 0, 0.513);
	flex-basis: 30%;
	p {
		font-weight: 700;
		font-size: 17px;
	}
}
.size {
	width: 250px;
	height: 250px;
}
.wrapperForPages {
	width: 100%;
	display: flex;
	justify-content: center;
}
.pages {
	width: 10px;
	height: 20px;
	padding: 8px;
	margin-right: 10px;
	border: 1px solid black;
	border-radius: 30px;
	transition-duration: 0.3s;
	cursor: pointer;
	&:hover {
		transition-duration: 0.3s;
		background-color: rgb(111, 226, 255);
	}
}
.activePage {
	background-color: rgb(111, 226, 255);
}

</style>
