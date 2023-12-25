const input_tag = document.querySelector('.input-tag');
const tags_length = document.querySelector(".tags-lenght");
let tag_list = [];
input_tag.addEventListener("keyup", (e) => {
	const val = input_tag.value
	if(e.key == "Enter") {
		if (tag_list.some(e => e.text == val)) return alert
		('Duplicate tags')
		if (val == "") return;
		
		const tags = val.split(',').map(e => e.trim()).filter(e => e !== "")
		
		for (let i of tags) {
			tag_list.push({
				id: Math.random().toString(10).substring(2, 10),
				text: i
			})			
		}
		input_tag.value = ""
		RenderTags()
	}
})

function RenderTags() {
	const wrapper_tags = document.querySelector(".wrapper-tags")
	let cache = ""
	
	document.querySelectorAll('.item-tag').forEach(e => e.remove())
	cache = ""
	
	tag_list.forEach(e => {
		cache = `<div class="item-tag">
				 <span>${e.text}</span>
				 <button type="button" data-id="${e.id}" class="btn-rm-tag">
					 <i class="fas fa-times"></i>
				 </button>
			 </div>`;
		 wrapper_tags.insertAdjacentElement('afterbegin', cache);
		 HandleRmTags()
	})
	
	tags_length.textContent = `${tag_list.length} Tags` 
}

function HandleRmTags() {
	const btns = document.querySelectorAll('.btn-rm-tag')
	if (btns.length > 0) {
		btns.forEach(e => {
			e.onclick = function () {
				const data_id = Number(e.getAttribute('data_id'))
				tag_list = tag_list.filter(x => x.id != data_id)
				RenderTags()
			}
		})
	}	
}