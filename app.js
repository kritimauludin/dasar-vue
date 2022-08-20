new Vue({
    el: '#app', 
    data: {
        title: 'Learn vue js',
        codeName : 'RZL',
        name: 'Riza',
        coordinate: {
            x: 0,
            y: 0
        },
        url: 'https://arahin.ocumps.com',
        text: ['one', 'two'],
        courses: ['Coding JS', 'Cooking', 'Promotion', 'SEO'],
        packages: [
            {coursePackage:'Coding JS', price: 500000, description: 'Coding with javascript programming language'},
            {coursePackage:'Cooking', price: 200000, description: 'Learn how to cooking'},
            {coursePackage:'SEO', price: 250000, description: 'Learn how to implementation SEO in your website'}
        ]
    },
    methods: {
        greet(){
            return `Hello world... | My Code ${this.codeName}`
        },
        logEvent(e){
            console.log(e)
        },
        logCoordinate(e){
            this.coordinate.x = e.offsetX
            this.coordinate.y = e.offsetY
        },
        updateName (e){
            this.name = e.target.value
        }
    }
})