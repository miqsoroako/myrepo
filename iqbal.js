

const checkKey = (objArray, keyArray) => {
    
    keyArray.forEach(key => {
        objArray.forEach(item => {
            if (Object.keys(item).length !== keyArray.length) {
                // console.log(Object.keys(item).length)
                throw `number of keys are not equal`
            }
            else {
                if (item.hasOwnProperty(key)) {
                    console.log(`yes key [${key}] is available`)
                } else {
                    // throw `sorry key [${key}] is not available`
                    console.log(`sorry key [${key}] is not available`)
                }
            }
        })
    })
}

let group_people = [
    {nama: 'jhon', lokasi: 'usa', club:'AC Milan'},
    {nama: 'messi', lokasi: 'argentina',clubs:'barcelona',},
    {nama: 'ronaldo', lokasi: 'portugal',clubs:'barcelona'},
]

const keysToCheck = ['nama', 'lokasi','club']

checkKey(group_people, keysToCheck)
