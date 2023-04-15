export const generateCode = (length: number = 4) => {
    let result = ""
    for (let i = 0; i < length; i++) {
        result += Math.round(Math.random() * 8).toString()
    }
    return result
}
