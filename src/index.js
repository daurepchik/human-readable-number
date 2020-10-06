module.exports = function toReadable(number) {
    let arr1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    let arr11 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    let arr10 = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

    let arr = String(number).split('')

    let res = ''

    if (arr.length === 3 && arr[1] !== '1' && arr[2] !== '0' && arr[1] !== '0') {
        res = `${arr1[Number(arr[0])]} hundred ${arr10[Number(arr[1])]} ${arr1[Number(arr[2])]}`
    }
    else if (arr.length === 3 && arr[1] === '0' && arr[2] === '0') {
        res = `${arr1[Number(arr[0])]} hundred`
    }
    else if (arr.length === 3 && arr[1] === '0') {
        res = `${arr1[Number(arr[0])]} hundred ${arr1[Number(arr[2])]}`
    }
    else if (arr.length === 3 && arr[2] === '0') {
        res = `${arr1[Number(arr[0])]} hundred ${arr10[Number(arr[1])]}`
    }
    else if (arr.length === 3 && arr[1] === '1') {
        res = `${arr1[Number(arr[0])]} hundred ${arr11[Number(arr[2])]}`
    }
    else if (arr.length === 3 && arr[1] === '1' && arr[1] === '0') {
        res = `${arr1[Number(arr[0])]} hundred ${arr11[0]}`
    }
    else if (arr.length === 2 && arr[0] !== '1' && arr[1] !== '0') {
        res = `${arr10[Number(arr[0])]} ${arr1[Number(arr[1])]}`
    }
    else if (arr.length === 2 && arr[0] === '1' && arr[1] !== '0') {
        res = `${arr11[Number(arr[1])]}`
    }
    else if (arr.length === 2 && arr[1] === '0') {
        res = `${arr10[Number(arr[0])]}`
    }
    else if (arr.length === 1) {
        res = `${arr1[Number(arr[0])]}`
    }
    return res
}



