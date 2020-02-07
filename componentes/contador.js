Vue.component('contador', {
	template: `
	 <div>
		<h3>{{numero}}</h3>
		<button type="button" @click="numero++" class="btn btn-info">+</button>
	 </div>
	`,
	data() {
		return {
			numero: 0
		}
	}

});