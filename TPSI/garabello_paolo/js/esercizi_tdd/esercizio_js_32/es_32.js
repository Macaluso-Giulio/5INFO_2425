/**
 * @param {string} str1 
 * @param {string} str2 
 */
export const special_concat = (str1, str2) => {
    if(str1.includes(" ") || str2.includes(" ") || str1.length < 2 || str2.length < 2)
        return "parole non adatte"   
    return str2.slice(0, 2) + str1.slice(2) + str1.slice(0, 2) + str2.slice(2);
};