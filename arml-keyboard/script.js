const KEYS = [
    
    {l: 'اَ'}, {l: 'اُ'}, {l: 'اَيْ'}, {l: 'آ'}, {l: 'اُو'}, {l: 'اٗ'}, {l: 'اِ'}, {l: 'اِي'}, {l: 'رْ'}, {l: 'ا٘'},
    {l: 'ا٘ي'}, {l: 'اٗو'}, {l: 'اَوْ'}, {l: 'اَمْ'}, {l: 'ک'}, {l: 'كھ'}, {l: 'گ'}, {l: 'گھ'}, {l: 'ۼ'}, {l: 'چ'},
    {l: 'چھ'}, {l: 'ج'}, {l: 'جھ'}, {l: 'ڿ'}, {l: 'ڊ'}, {l: 'ڊھ'}, {l: 'ڗ'}, {l: 'ڗھ'}, {l: 'ڹ'}, {l: 'ت'},
    {l: 'تھ'}, {l: 'د'}, {l: 'دھ'}, {l: 'ن'}, {l: 'پ'}, {l: 'ف'}, {l: 'ب'}, {l: 'بھ'}, {l: 'م'}, {l: 'ي'},
    {l: 'ڔ'}, {l: 'ل'}, {l: 'و'}, {l: 'ش'}, {l: 'ۺ'}, {l: 'س'}, {l: 'ھ'}, {l: 'ۻ'}, {l: 'ژ'}, {l: 'ر'},
    {l: 'Clear'},{l: '!'},{l: '.'},{l: 'ڔّ'}, {l: '،'},{l: '؟'},{l: '/'}, {l: '('},{l: ')'},{l: 'Delete'}
]

const NUMERALS = [
    {l: '١'}, {l: '٢'}, {l: '٣'}, {l: '٤'}, {l: '٥'}, {l: '٦'}, {l: '٧'}, {l: '٨'}, {l: '٩'}, {l: '٠'}
]



const SPECIAL_KEYS = [

      {k: 'Space'}

]


var store = {
    state: {
        words: []
    },
    clearScreen: function(){
        return this.state.words.splice(0)
    },
    backspace: function(){
        var position = this.state.words.length
        return this.state.words.splice(position - 1, 1)
    }
}

Vue.component('Screen', {
    template: '#screen',
    data: function() {
        return {
            words: store.state.words,
        }
    },
    computed: {
        letters: function(){
            return this.words.map(function(word){
                return word
            }).join('')
        }
    }
})

Vue.component('Keyboard', {
    props: ['numerals', 'keys', 'special', 'remaining'],
    template: '#keyboard',
    data: function(){
        return {
            words: store.state.words,      
        }
    },
    methods:{
        addLetter: function(letter){
            
            if(letter==='Clear'){
                store.clearScreen()
            }else if(letter==="Delete"){
                store.backspace()
            }else if(letter==='Space'){
                this.words.push(' ')
            }
            else{
                this.words.push(letter)
            }
        }
    }
})

vm = new Vue({
    el: "#app",
    data: {
        numerals: NUMERALS,
        keys: KEYS,
        special: SPECIAL_KEYS,
       
    }
})
