'use strict';

function quickSort(input) {
if(input ==null || input.length == 0)
{
return;
}
sort(input, 0, input.length - 1);
};
function swap(items, firstIndex, secondIndex){
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}
function partition(items, left, right) {

    var pivot   = items[Math.floor((right + left) / 2)],
        i       = left,
        j       = right;


    while (i <= j) {

        while (items[i] < pivot) {
            i++;
        }

        while (items[j] > pivot) {
            j--;
        }

        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }

    return i;
}
function sort(items, left, right) {

    var index;

    if (items.length > 1) {

        index = partition(items, left, right);

        if (left < index - 1) {
            sort(items, left, index - 1);
        }

        if (index < right) {
            sort(items, index, right);
        }

    }

    return items;
}
module.exports = quickSort;