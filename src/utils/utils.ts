function getRandomImage() {
    const images = [
        {
            src: "https://images.unsplash.com/photo-1700028274752-91c0ddae9bc7",
            alt: "Image of a man wearing a keffiyeh holding the flag of Palestine"
        },
        {
            src: "https://images.unsplash.com/photo-1700028276640-ee2e12ebdd1b",
            alt: "Image of protestors with the flags of Palestine"
        },
        {
            src: "https://images.unsplash.com/photo-1621207849748-2bf8ee80e1fe",
            alt: "Image of a boy holding the flag of Palestine"
        },
        {
            src: "https://images.unsplash.com/photo-1621268409464-cc9dbb7a5336",
            alt: "Image of the flag of Palestine"
        },
        {
            src: "https://images.unsplash.com/photo-1556654985-3f57071f9547",
            alt: "Image of an outdoors somewhere in Palestine, containing a palm tree, sand, vegetation, and ruins"
        },
        {
            src: "https://images.unsplash.com/photo-1565343486806-9d939d24a993",
            alt: `Image of a graffiti saying "VISIT PALESTINE" and illustrating the Al-Aqsa mosque`
        },
        {
            src: "https://images.unsplash.com/photo-1644670711376-be4df8383d46",
            alt: `Image of a graffiti depicting the flag of Palestine`
        }
    ];
    const index = Math.floor(Math.random() * images.length)
    return images[index]
}

export { getRandomImage }