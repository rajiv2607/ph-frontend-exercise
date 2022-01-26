

export function getFirstTab(item) {
    if (Array.isArray(item)) {
       return item[0].title
    }
    console.log('Error in the format of data passeed')
}

export function getFirstTabSubMenuLength(item) {
    if (Array.isArray(item)) {
        return item[0].children.length
    }
    console.log('Error in the format of data passeed')
}

export function getNumberOfTabs(item) {
    if (Array.isArray(item)) {
        return item.length
    }
    console.log('Error in the format of data passeed')
}
