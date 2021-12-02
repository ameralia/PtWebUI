<template>
	<div class="locate_button">
	</div>
</template>

<style scoped>
	.locate_button {
		position: absolute;
		bottom: 20px;
		right: 20px;
		width: 32px;
		height: 32px;
		background: #fff url("../assets/locate.svg") no-repeat center;
		opacity: 0.8;
		box-shadow:  1px 1px 1px 1px rgba(20, 20, 20, .2);
		border: 1px solid rgba(20, 20, 20, .4);
		border-radius: 2px;
		z-index: 2000;
	}
	.locate_button:hover {
		cursor: pointer;
		opacity: 1;
	}
</style>