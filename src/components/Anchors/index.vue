<template>
	<div class="buttons">
		<div class="circle active"></div>
		<div class="circle"></div>
		<div class="circle"></div>
	</div>
</template>

<script>
export default {
  name: 'index'
};
</script>

<style scoped lang="scss">
.buttons {
	position: absolute;
	top: 0;
	bottom: 0;
	right: 28px;
	margin: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	.circle {
		border-radius: 50%;
		height: 13px;
		width: 13px;
		border: 2px solid $white;
		background: $white;
		margin-bottom: 16px;
		transition: all 0.3s ease-in-out;
		cursor: pointer;
		&:last-child {
			margin-bottom: 0;
		}
		&.active{
			background: $color-font;
		}
		&:hover {
			background: $color-font;
		}
	}
}
</style>
