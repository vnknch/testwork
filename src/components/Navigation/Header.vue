<template>
<header>
    <div class="wrapperForLogo">
        <h1>HaHa!</h1>
    </div>
    <div class="nav">
      <router-link
      v-for="item in nav"
      :key="item.id"
      :to="item.path"
      >{{item.title}}</router-link>
    </div>
</header>
</template>
<style scoped lang="scss">
header {
	width: 100%;
	height: 5rem;
	background-color: rgb(245, 243, 243);
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.wrapperForLogo {
	width: 10%;
	height: 60%;
	margin-left: 10px;
	h1 { 
    color: rgb(245, 157, 43);
	font-size: 35px;
}
} 
	.nav {
		margin-right: 20px;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		width: 20%;
		height: 30%;
		a { 
        font-weight: bold;
		font-size: 18px;
		color: #2c3e50;
		text-decoration: none;
		margin-right: 5px;
		&.router-link-exact-active { 
            color: rgb(43, 199, 238);
	}
}
}


  /////
 @media screen and (min-width: 370px) and (max-width: 750px){
     .nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 50%;
    height: 50%;
    }
        a {
        font-size: 20px;
    }
}
  @media screen and (min-width: 300px) and (max-width: 370px){
           .nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 50%;
    height: 50%;
    }
     a {
        font-size: 12px;
    }
}
</style>
<script>
    export default {
        name: 'Header',
        data: () => ({
            nav:[
                { path: '/', title: 'Home|', id: 1 },
                { path: '/about', title: 'About Us|', id: 2 },
                { path: '/posts', title: 'Posts|', id: 3},
                { path: '/contacts', title: 'Contacts|', id: 4}
            ]
        })
    }
</script>
