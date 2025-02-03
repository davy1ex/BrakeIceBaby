export const fetchUserProfile  = new Promise((resolve) => {
    const profileMockUp = {
        picture:
            "https://funny.klev.club/smeh/uploads/posts/2024-04/funny-klev-club-bu5y-p-smeshnie-kartinki-super-sus-18.jpg",
        name: "Супер сус",
        birthDay: "01-01-2000",
        description:
            "Всё нормально, я Супер Сус. 20 лет тут лазил, лазию и буду лазить",
    };

    setTimeout(() => {
        console.log('kek')
        resolve(profileMockUp)
        
    }, 1000)
    
    
})