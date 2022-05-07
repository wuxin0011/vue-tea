const wx = window.localStorage

export function setStore(key,value){
    wx.setItem(key,JSON.stringify(value))
}

export function getStore(key){
    try {
        return JSON.parse(wx.getItem(key))
    } catch (error) {
        return null
    }
}

export function remove(key){
    return wx.removeItem(key)
}