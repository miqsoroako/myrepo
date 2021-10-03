// array javascript
// array atau sebuah list of value
// di definisikan dengan tanda []
let my_array=[1,6,8,9,10]
// index itu adalah nilai di dalam sebuah list
// yang di definisikan setelah / sebelum koma
// Index itu dimulai dari 0 -> n


// access array lewat index -> variable_index[nomor_index]
// console.log(my_array[3])
// console.log(my_array[1])
// console.log(my_array[2])
// console.log(my_array[4])


// object javascript

// di definisikan dengan tanda {} dan selalu ada key dan value
// {
//     'key':'value'
// }

const ageCalculator = (year) => {
    let now = 2021
    return now - year
}

let object_kosong = {}

let my_object = {
    'nama':null,
    'year_date':1988,
    'age':ageCalculator(1988),
    'mobil':[
        'jaguar',
        'suzuki',
        'mazda'
    ]
}
// memanggil nilai dari sebuah object
// object.key -> untuk masuk ke dalam key.. diawali dengan tanda titik setelah object itu sendiri
// console.log(my_object.nama)
// access object
my_object.nama ='iqbal' // mengganti nilai di dalam object

console.log(my_object.mobil[1]) 
// console.log(my_object)

// my_object.mobil.unshift('lamborgini')
// console.log(my_object)

//  buat object orang, lalu buat group array  berisi object orang
// setiap key object harus sama, buat validasi bahwa key2 tersebut ada di dalam object
// hasil jika di console.log() akan berisi kan data2 object tsb



let group_people = []
