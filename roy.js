let my_group = {
    name: 'Budi',
    job: 'Astronot',
    age: 23
}

const keyMyGroup = Object.keys(my_group);
const keysToCheck = ['nama', 'job','age']
console.log(keyMyGroup,keysToCheck)

const checkKey = () => {
    if (JSON.stringify(keyMyGroup)==JSON.stringify(keysToCheck)){
        console.log('my_group punya key yang sesuai')
    } else {
        console.log('error')
    }
}

checkKey()