import base from "./base"

const accessKey = process.env.REACT_APP_UNSPLASH_KEY



async function unsplash() {
    console.log(accessKey)
    let image = await fetch(`https://api.unsplash.com//photos/random?client_id=${accessKey}`)
    let jsonImage = await image.json()
    let information = {
        author: jsonImage.user.username,
        author_profile: jsonImage.user.links.html,
        url: jsonImage.urls.regular,
        description: jsonImage.alt_description,
        likes: jsonImage.likes
    }
    return information
}


async function getImages() {
    for(let i=1; i < 28; i++){
        let picInfo = await unsplash()
        let imageref = base.ref().child("images")
        imageref.child(`image${i}`).set({
            author: picInfo.author,
            profile: picInfo.author_profile,
            url: picInfo.url,
            description: picInfo.description,
            likes: picInfo.likes
        })
    }
}