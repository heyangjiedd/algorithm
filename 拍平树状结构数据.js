let arr = [1, [432, [324]], 2, 3, 5, [4, 4, 5, [5, 65, 23,[13,32,52]]]]
let arrChildren = [{
    id: 1,
    children: [{
        id: 2,
        children: [{
            id: 3
        }, {
            id: 3.5
        }]
    }]
},
    {
        id: 4,
        children: [{
            id: 5
        }, {
            id: 7
        }]
    },
    {
        id: 6
    },
    {
        id: 8,
        children: [{
            id: 9
        }]
    }
]

function TreeData(data) {
    return data.reduce((total, item) => {
        return total.concat(Array.isArray(item) ? TreeData(item) : item)
    }, [])
}

function TreeData1(data) {
    return data.reduce((total, item) => {
        return total.concat(Array.isArray(item.children) ? (TreeData1(item.children).concat({
            ...item,
            children: undefined
        })) : item)
    }, [])
}

function* yyy(data) {
    if (Array.isArray(data)) {
        for (let i = 0; i < data.length; i++) {
            if (Array.isArray(data[i].children)) {
                yield* yyy(data[i].children)
                delete data[i].children
                yield data[i]
            } else {
                yield data[i]
            }
        }
    } else {
        yield data
    }
}

// console.log([...yyy(arrChildren)])
// console.log(TreeData(arr))
function flatten(arr) {
    while (arr.some(item=>Array.isArray(item))){
        arr = [].concat(...arr)
    }
    return arr
}
console.log(flatten(arr))