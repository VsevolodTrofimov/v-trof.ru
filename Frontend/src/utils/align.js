export default function align (element, target, options={
        by: element,
        to: 'top',
        apply: true
    }) { 
    
    let byRect = options.by.getBoundingClientRect()
    let targetRect = target.getBoundingClientRect()
    let innerDiff = 0
    let result = 0

    if(element !== options.by) {
        innerDiff = element.getBoundingClientRect().top - byRect.top
    }

    result = targetRect.top - byRect.top
    
    switch(options.to) {
        case 'center':
            result += (targetRect.height - byRect.height) / 2
            break
        case 'bottom':
            result += targetRect.height - byRect.height
            break
    }

    result += innerDiff

    if(options.apply) {
        element.style.transform = `translateY(${Math.round(result)}px)`
    }

    return result
}