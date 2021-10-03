let array_kosong =[]
let my_object1 = {
    'nama' : 'gana',
    'umur' : 25,
    'alamat' : 'Jakarta',
    'hobi' : [
        'jogging',
        'badminton',
        'nonton film'
    ]
}
let my_object2 = {
    'nama' : 'andi',
    'umur' : 26,
    'alamat' : 'Magelang',
    'hobi' : [
        'basket',
        'sepakbola',
        'nonton film'
    ]
}
    let my_object3 = {
    'nama' : 'joni',
    'umur' : 28,
    'alamat' : 'Jakarta',
    'hobi' : [
        'jogging',
        'badminton',
        'nonton film'
    ]
}
array_kosong.push(my_object1)
array_kosong.push(my_object1)

console.log(Array.isArray(array_kosong))
console.log(array_kosong)
console.log(array_kosong[0])
console.log(array_kosong[0].nama)
console.log(array_kosong[1])
// console.log(array_kosong)