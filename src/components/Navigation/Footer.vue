<template>
    <footer>
        <div class="footerAboutUs common">
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat reprehenderit magnam deleniti quasi saepe, consequatur atque sequi delectus dolore veritatis obcaecati quae, repellat eveniet omnis, voluptatem in. Soluta, eligendi, architecto.</p>
        </div>
        <div class="footerNav common">
            <div>
                <router-link
                v-for="item in nav"
                :key="item.id"
                :to="item.path"
                >
                {{item.title}}
                </router-link>
            </div>
        </div>
        <div class="footerSocial common">
            <div>
                <h2>Connect With Us</h2>
                <i 
                v-for="(i, index) in social"
                :key="index"
                :class="i.class"></i>
            </div>
        </div>
    </footer>
</template>
<style scoped lang="scss">
footer {
	width: 100%;
	height: 100%;
	background-color: rgb(141, 141, 141);
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	.common { margin-right: 20px;
	width: 300px;
	height: 400px;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	align-content: center;
}
.footerAboutUs {
	h2 { 
        color: white;
}
p {
	color: white;
}
} 
	.footerNav {
		div { width: 200px;
		height: 200px;
	}
	} 
		.footerSocial {
			div { 
            width: 200px;
			height: 100px;
			h2 { 
                color: white;
		}
	}
}
a {
	font-weight: bold;
	font-size: 35px;
	color: white;
	text-decoration: none;
	margin-right: 5px;
	&.router-link-exact-active { color: rgb(43, 199, 238);
}
}
i {
	color: white;
	cursor: pointer;
	font-size: 25px;
	margin: 10px;
	transition-duration: 0.3s;
	&:hover {
		color: rgb(43, 199, 238);
		transition-duration: 0.3s;
	}
}
}
</style>
<script>
    export default {
        name: 'Footer',
        data: () => ({
            nav:[
                { path: '/', title: 'Home|', id: 1 },
                { path: '/about', title: 'About Us|', id: 2 },
                { path: '/posts', title: 'Posts|', id: 3},
                { path: '/contacts', title: 'Contacts|', id: 4}
            ],
            social: [
                { class: 'fab fa-instagram' },
                { class: 'fab fa-twitter' },
                { class: 'fab fa-facebook' },
                { class: 'fab fa-viber' },
            ]
        })
    }
</script>
