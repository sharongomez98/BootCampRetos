var maxArea = (alturas) => {
    let left = 0;
    let right = alturas.length - 1;
    let area = 0;

    while (left < right) {
        const currentArea =  (right - left) * Math.min(alturas[right], alturas[left]);
        area = Math.max(area, currentArea);
        if(alturas[left] < alturas[right]) {
            left++;
        } else {
            right --;
        }
    }
    return area;

}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3 ,7 ]));
console.log(maxArea([1, 1 ]));
console.log(maxArea([4, 3, 2, 1, 4 ]));