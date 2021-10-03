var integer = 12 // angka bulat
var float = 1.2 // angka berkoma
var char = 'a' // di tengah tanda petik, dan 1 huruf
var tulisan = '111'  // string atau sebual kalimat

// integer + char = string
// integer + integer = integer
// integer / integer = float
// char + char = string
// integer + string = string ??
// var integer_asli =5089
// var integer_string =5
// let output = integer_asli / integer_string

// console.log(`hasil: ${output} ini sudah fix`)
// console.log("type data: ", typeof(output))


// var variable_var =2
// console.log(variable_var)
// variable_var=3
// console.log(variable_var)
JSON
dictionary
map
hashtable
{
    'key':'value'
}
client  |user_id|currency
iaT7LB2l|34     |EUR
MIB007  |75     |USD



var data = [{
    'client':'iaT7LB2l',
    'user_id':34,
    'currency':'EUR'
        },
    {
    'client':'MIB007',
    'user_id':75,
    'currency':'USD'
}]

// 1 definisi variable
// let variable_let
// let variable_let
// console.log(variable_let)
//2 input nilai ke dalam variable
// variable_let= 'ini aku'
// console.log(variable_let)
// variable_let= 'ini aku yang di rubah'
// console.log(variable_let)

// ini adalah fungsi ES 5 ke bawah
function nama_fungsi(){
    console.log('fungsi')
}
// nama_fungsi()
// ES 6 


const setting =(input) => {
    //setelah tanda/block { }
    // ini adalah tempat logic/proses
    let output_setting
    if (input === 'windows'){
        // output dalah return
        output_setting ='setting.exe'
        }
    else if(input === 'ubuntu'){
        output_setting ='setting.sh' 

    }
    else if(input === 'mac'){
        output_setting ='setting.mac' 
    } 
    else{
        output_setting ='setting.gatau' 
    }

    return output_setting


}
var win = setting('windows')
var ubuntu = setting('ubuntu')
var mac = setting('mac')
var macss = setting('macsss')
console.log('windows',win)
console.log('ubuntu',ubuntu)
console.log('mac',mac)
console.log('macss',macss)
// const setting_ubuntu ='image2'
// const setting_macos ='image3'
// console.log(varaible_const(5))
// console.log(varaible_const('halo'))
// console.log(varaible_const(3))
// console.log(varaible_const('sadnjad'))
tes iqbal