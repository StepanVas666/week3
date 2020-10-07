/*
y = sqrt(x) => y**2 = x
3 = sqrt(9) => 3**2 =12345678 
*/
let x = 152415765279684
function sqrt(x)
{
	let y = 1
	while (y**2 < x)
	{
	y += 1 
	}
	if (y**2 === x)
	{
      console.log(`sqrt(${x})=${y}`)
	}
	else
	{
		console.log("Нет точного корня")
	}
}
console.log(sqrt(25))
console.log(sqrt(152415765279684))
