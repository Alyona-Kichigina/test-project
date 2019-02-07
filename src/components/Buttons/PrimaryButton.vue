<script>
export default {
  name: 'PrimaryButton',
  functional: true,
  render (createElement, { data, children }) {
    return createElement('button', { class: ['btn-def'], ...data }, children)
  }
}
</script>

<style scoped lang="scss">
.btn-def {
	border-radius: 5px;
	transition: all 0.3s ease-in-out;
	display: inline-block;
	font-weight: 700;
	font-size: 1.25rem;
	line-height: 2.1875rem;
	padding: 0.5rem 2.5rem;
	color: $white;
	text-align: center;
	white-space: nowrap;
	cursor: pointer;
	background-color: $green;
	border-color: transparent;
	@media (max-width: 559px) {
		font-size: 1rem;
	}
	&:hover, &:focus {
		background-color: $button-hover;
		outline: 0;
		}
}
</style>
