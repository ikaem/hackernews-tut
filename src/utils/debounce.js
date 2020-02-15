export const debounce = (func, wait, immediate, args) => {
    let timeout;

    return () => {
        const context = this;
        const callNow = immediate && !timeout // call now is false if immediate is false, and if immediate is true, it is whatever timeout is...
        const later = () => {
            timeout = null;
            if(!immediate) func.apply(context, args);
        };

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);

        if(callNow) func.apply(context, args);
    }
}