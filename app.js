const today = new Date()

let val

val = today
val = today.getMonth() // 0 - january
val = today.getDate()
val = today.getDay()
val = today.getFullYear()
val = today.getHours()
val = today.getMinutes()
val = today.getTime()

val = new Date("09/22/2021")
val = new Date('September 23 2022')

val = new Date()
val.setDate(23)
val.setFullYear(2023)

console.log(val)