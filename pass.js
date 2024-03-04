const makePassword = () => {
    let lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    let symbols = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~']

    let allChars = [[...lowercase], [...uppercase], [...numbers], [...symbols]]
    let password = ""
    for (let i = 0; i < allChars.length; i++) {
        let randomChar = allChars[i][Math.floor(Math.random() * allChars[i].length)];
        password += randomChar;
    }//  * This loop is made to make sure that there is atleast 1 uppercase, 1 lowercase, 1 symbol and 1 number in the password 
    for (let i = 0; i < 8; i++) {
        let randomArray = allChars[Math.floor(Math.random() * 4)]
        let randomChar = randomArray[Math.floor(Math.random() * randomArray.length)]
        password += randomChar
    }
    let pass = document.querySelector("#pass")
    pass.value = password
}

const copyPassword = () => {
    let pass = document.querySelector("#pass")
    let password = pass.value
    navigator.clipboard.writeText(password)
}
