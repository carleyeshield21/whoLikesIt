// This is the link to this JavaScript challenge
// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript

function likes(names) {
    nameslength = names.length

    if(nameslength >= 4){
        console.log(`${names[0]}, ${names[1]} and ${nameslength-2} others like this`)
    } else if(nameslength == 3){
        console.log(`${names[0]}, ${names[1]}, and ${names[2]} like this`)
    } else if(nameslength == 2){
        console.log(`${names[0]} and ${names[1]} like this`)
    } else if(nameslength == 1){
        console.log(`${names[0]} likes this`)
    } else {
        console.log('Nobody likes this')
    }
}
likes(['Kaley'])
console.log('=====')
likes([])
console.log('=====')
likes(["Alex", "Jacob", "Mark", "Max"])
console.log('=====')
likes(["Alex", "Jacob", "Mark"])
console.log('=====')
likes(["Alex", "Jacob"])
console.log('=====')
likes(['Christiana','Jason','Jaden','Sonya','Luz','Yehuda','Jaylon','Breana','Riley','Naya','Jodie','Katie','Ashlin','Davis','Erick','Brendon','Kylan','Johnson','Keegan','Wendy','Frances','Dontae','Kristofer','Conrad','Tammy','Genesis','Sierra','Dylon','Notnamed','Kyree','Marisol','Jaiden','Kasey','Kortney','Evelyn','Kristal','Jacie','Cathryn','Gideon','Vicky','Jamison','Charity','Karyme','Leanne','Rylee','Moira','Domenic','Triniti','Shakira','Kathleen','Amaris','Garett','Leland','Dora','Nautica','Alexys','Louie','Katia','Dewayne','Anton','Marilyn','Mark','Travion','Elaine','Jairo','Tamia','Declan','Mykayla','Keanna','Angel','Caroline','Belen','Ivette','Livia','Mckenna','Graham','Sheldon','Judith','Stephen','Micheal','Elijah','Alexi','Mitchell','Ronaldo','Yisroel','Brendan','Clarence','Grayson','Christine','Theo','Arjun','Karsyn','Dyllan','Kaley','Kaleb','Madison','Brady','Syed','Tierney','Salvatore'])