const users = [
    {
        firstName: 'Галина Петровная',
        age: 21,
        profileDesc: 'lorem loremlorem lorem loloremrem loremloremlorem lorem loremloremloremloremloremloremloremloremlorem ',
        urlPic: 'https://th.bing.com/th/id/OIP.1Pa5VO4zeyX9gfJP5B-shgHaLH?w=115&h=180&c=7&r=0&o=5&pid=1.7'
    },

    {
        firstName: 'Тамара Константиновна',
        age: 21,
        profileDesc: 'lorem loremlorem lorem loloremrem loremloremlorem lorem loremloremloremloremloremloremloremloremlorem ',
        urlPic: 'https://th.bing.com/th/id/OIP.PfG7pabf9plecSv0tdwycwHaEJ?w=294&h=180&c=7&r=0&o=5&pid=1.7'
    }
]

export const getUsers = () => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            
            resolve( users)
        }, 1000)
    })
}