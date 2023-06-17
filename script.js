//selecting images
const pics1 = document.querySelectorAll('.img__item img')[0]
const pics2 = document.querySelectorAll('.img__item img')[1]
const pics3 = document.querySelectorAll('.img__item img')[2]
const pics4 = document.querySelectorAll('.img__item img')[3]

//swapping images
pics1.addEventListener('mouseover', () =>{
pics1.src = ' images/IMG_6329.jpg'
})

pics2.addEventListener('mouseover', () =>{
	pics2.src = ' images/IMG_6328.jpg'
	})
	pics3.addEventListener('mouseover', () =>{
		pics3.src = ' images/IMG_6330.jpg'
		pics3.style.objectFit = ' contain '
		})
		pics4.addEventListener('mouseover', () =>{
			pics4.src = ' images/IMG_6331.jpg'
			})
//swapping images to default
pics1.addEventListener('mouseout', () =>{
	pics1.src = ' images/img-groovytune.jpg'
	})
	pics2.addEventListener('mouseout', () =>{
		pics2.src = ' images/img.jpg'
		})
		pics3.addEventListener('mouseout', () =>{
			pics3.src = ' images/imgI.jpg'
			})
			pics4.addEventListener('mouseout', () =>{
				pics4.src = ' images/imgIII.jpg'
				})