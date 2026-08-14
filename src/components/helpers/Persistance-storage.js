export const setItem = (key, data) => {
    try {
        localStorage.setItem(key, data)
    } catch (error) {
        console.log('Eror, Invalid.');
        
    }
}
export const getItem = key => {
    try {
      return  localStorage.getItem(key)
    } catch (error) {
        console.log('Eror, data Invalid.');
        
    }
}

export const removeItem = key => {
    try {
        localStorage.removeItem(key)
    } catch (error) {
        console.log('Erorr removing data');
        
    }
}