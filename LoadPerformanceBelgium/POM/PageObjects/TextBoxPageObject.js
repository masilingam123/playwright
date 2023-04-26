
/**
 * 
 * @returns 
 */
function Input(label){
    return `//input[@id='userName']`
}

/**
 * 
 * @returns 
 */
function Textarea(label){
    return `//textarea[@id="${label}"]`
}

/**
 * 
 * @returns 
 */
function submit(){
    return '//button[@id="submit"]'
}

module.exports = {
    Input,
    Textarea,
    submit
}