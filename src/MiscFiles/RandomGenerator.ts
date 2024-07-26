export const randomBool = () => {
    const rnd = Math.round(Math.random())
    if (rnd == 0) {
        return true
    } else {
        return false
    }
}

export const randomNumber = (min: number, max: number) => {
    const rand = Math.round(min + Math.random() * (max - min));
    return rand
}