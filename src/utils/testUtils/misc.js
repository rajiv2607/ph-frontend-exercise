

export function getFirstTab(item) {
    if (Array.isArray(item)) {
       return item[0].title
    }
    return 'Error in the format of data passed'
}

export function getFirstTabSubMenuLength(item) {
    if (Array.isArray(item)) {
        return item[0].children.length
    }
    return 'Error in the format of data passed'
}

export function getNumberOfTabs(item) {
    if (Array.isArray(item)) {
        return item.length
    }
    return 'Error in the format of data passed'
}
