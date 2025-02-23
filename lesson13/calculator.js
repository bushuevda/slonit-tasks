const operations = {
	"addition": (x, y) => x + y,
	"subtraction": (x, y) => x - y,
	"multiply": (x, y) => x * y,
	"division": (x, y) => x / y 
}
const calculate = (x, y, operation) => operation(x,y); 
