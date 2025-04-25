function flip(array, n) {
    // Pointers (starting at extremes of array)
    let start = 0;
    let end = n - 1;

    while (start < end) {
        // Swap elements at boundaries of array
        let tmp = array[start];
        array[start] = array[end];
        array[end] = tmp;

        // Move pointers inward
        start++;
        end--;
    }

    return array;
}

// Use only flip() here to manipulate the array
function pancakeSort(array) {
    let n = array.length;
    let unsorted_size = n;

    // Each time this runs, the max element of the unsorted portion is moved to where it should be
    for (let i = 0; i < n; i++) {
        let M = 0; // Index of max element

        // Find max element in unsorted portion
        for (let j = 0; j < unsorted_size; j++) {
            if (array[j] > array[M]) {
                M = j;
            }
        }

        if (M === unsorted_size - 1) {
            // If max value is at end of unsorted portion, do nothing
            unsorted_size--;

            continue;
        } else if (M === 0) {
            // If at beginning, flip whole unsorted portion
            flip(array, unsorted_size);

            unsorted_size--;

            continue;
        } else {
            // Otherwise, flip everything from beginning to that max, bringing max to the beginning
            flip(array, M + 1);

            // Then flip the whole unsorted portion, putting max at the end of it
            flip(array, unsorted_size);

            unsorted_size--;
        }
    }

    return array;
}