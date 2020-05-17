let count = 0;
let i = 2;
let n = 2;
while (count <= 20) {
  while (i <= Math.sqrt(n)) {
    if (n % i == 0) {
      i++;
    } else {
      document.write("n + '<br>");
      n++;
      count++;
    }
  }
}
document.getElementById('Results').innerHTML = ("20 so nguyen to dau tien la: ");
