let all_pics = document.getElementsByTagName('img');
console.log(all_pics)
console.log(all_pics.length)
document.addEventListener("load", function(){
    // Handler when the DOM is fully loaded
    console.log('dom loaded')
    for (i = 0; i < all_pics.length; i++) {
        console.log('hello')
        if (all_pics.item(i).src.contains('https://pbs.twimg.com/profile_images')) {
            // console.log(pic)
            pic.src = "";
        }
    }
});

// /let profile_pics = all_pics_array.forEach(pic => {
//     console.log(pic)
//     if (pic.src.contains('https://pbs.twimg.com/profile_images')) {
//         // console.log(pic)
//         pic.src = "";
//     }
// })
