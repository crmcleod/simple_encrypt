const encrypt = (str) => {
    let newStr = str.split('').map(char => {
        let bin = char.charCodeAt(0).toString(2);
        bin.length < 10 && (bin = '0'.repeat(10-bin.length)+bin);
        return bin;
    });
    return btoa(newStr.join(''))
};

const decrypt = (str) => {
    let binaryStr = atob(str)
    let binaryArr = [];
    for(let i = 0; i < binaryStr.length; i+=10) {
        binaryArr.push(String.fromCharCode(parseInt(binaryStr.slice(i, i+10), 2)));
    }
    return binaryArr.join('')
}
