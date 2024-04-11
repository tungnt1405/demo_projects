const passJetpackProtected = (arr_number_protected = []) => {
    if (
        !Array.isArray(arr_number_protected) ||
        arr_number_protected.length == 0
    ) {
        return parseInt(0);
    }
    let result_math_protected = 0;
    switch (arr_number_protected[1]) {
        case "-":
            result_math_protected =
                parseInt(arr_number_protected[0]) -
                parseInt(arr_number_protected[2]);
            break;
        case "*":
            result_math_protected =
                parseInt(arr_number_protected[0]) *
                parseInt(arr_number_protected[2]);
            break;
        case "/":
            result_math_protected =
                parseInt(arr_number_protected[0]) /
                parseInt(arr_number_protected[2]);
            break;
        default:
            result_math_protected =
                parseInt(arr_number_protected[0]) +
                parseInt(arr_number_protected[2]);
            break;
    }

    return result_math_protected;
};

module.exports = {
    passJetpackProtected,
};
